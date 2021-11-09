import auth from '@react-native-firebase/auth'
import { UserDeepModel } from '../../../../domain/redux/UserStore'
import axiosClient from '../../provider/axiosClient'
import { IPayloadCreateUserResponse, IPayloadUpdateUserResponse, IUserFirestore, UserModel, UserModelSQL } from './UserTypes'

export const CreateUser = async (firestorePayload: IUserFirestore): Promise<IPayloadCreateUserResponse> => {
  try {
    const { name, email, password } = firestorePayload

    /* FIREBASE QUERIES */
    const firebaseResponse = await auth().createUserWithEmailAndPassword(email, password)
    await firebaseResponse.user.updateProfile({
      displayName: name
    })

    const { emailVerified, isAnonymous, metadata, phoneNumber, photoURL, providerId, uid } = firebaseResponse.user

    const userModel: UserModel = {
      displayName: name,
      email,
      emailVerified,
      isAnonymous,
      metadata,
      phoneNumber,
      photoURL,
      providerId,
      uid
    }

    /* SQL QUERIES */
    const response = await axiosClient.post<UserModelSQL>('/users', {
      answeredQuestions: [],
      email,
      name,
      score: 0
    })

    return {
      requestedStatus: {
        firebase: {
          statusText: 'Created',
          statusCode: 201
        },
        sql: {
          statusText: 'Created',
          statusCode: 201
        }
      },
      response: {
        firebase: userModel,
        sql: response.data
      }
    }
  } catch (error) {
    console.error(error)

    return {
      requestedStatus: {
        firebase: {
          statusCode: 500,
          statusText: 'Internal Server Error',
          error: error
        },
        sql: {
          statusCode: 500,
          statusText: 'Internal Server Error',
          error: error
        }
      },
      response: {
        firebase: null,
        sql: null
      }
    }
  }
}

export const UpdateUser = async (
  userId: string,
  SQLPayload: UserModelSQL,
  firestorePayload: IUserFirestore
): Promise<IPayloadUpdateUserResponse> => {
  try {
    const { name, email, password } = firestorePayload
    const { answeredQuestions, score } = SQLPayload

    /* FIREBASE QUERIES */
    await auth().currentUser?.updateEmail(email)
    await auth().currentUser?.updatePassword(password)
    await auth().currentUser?.updateProfile({
      displayName: name,
      photoURL: auth().currentUser?.photoURL
    })

    const userModel: UserDeepModel = {
      displayName: name,
      email: email
    }

    /* SQL QUERIES */
    const response = await axiosClient.put<UserModelSQL>(`/users/${userId}`, {
      answeredQuestions,
      email,
      name,
      score
    })

    return {
      requestedStatus: {
        firebase: {
          statusText: 'Created',
          statusCode: 200
        },
        sql: {
          statusText: 'Created',
          statusCode: 200
        }
      },
      response: {
        firebase: userModel,
        sql: response.data
      }
    }
  } catch (error) {
    console.error(error)

    return {
      requestedStatus: {
        firebase: {
          statusCode: 500,
          statusText: 'Internal Server Error',
          error: error
        },
        sql: {
          statusCode: 500,
          statusText: 'Internal Server Error',
          error: error
        }
      },
      response: {
        firebase: null,
        sql: null
      }
    }
  }
}

export const FindUserByEmail = async (email: string): Promise<UserModelSQL> => {
  /* SQL QUERIES */
  const response = await axiosClient.get<UserModelSQL>(`/users/email/${email}`)
  return response.data
}

export const SignInUser = async (email: string, password: string): Promise<IPayloadCreateUserResponse> => {
  try {
    /* FIREBASE QUERIES */
    const firebaseResponse = await auth().signInWithEmailAndPassword(email, password)

    const { displayName, emailVerified, isAnonymous, metadata, phoneNumber, photoURL, providerId, uid } = firebaseResponse.user

    const userModel: UserModel = {
      displayName,
      email,
      emailVerified,
      isAnonymous,
      metadata,
      phoneNumber,
      photoURL,
      providerId,
      uid
    }

    /* SQL QUERIES */
    const sqlResponse = await FindUserByEmail(email)

    return {
      requestedStatus: {
        firebase: {
          statusText: 'OK',
          statusCode: 200
        },
        sql: {
          statusText: 'OK',
          statusCode: 200
        }
      },
      response: {
        firebase: userModel,
        sql: sqlResponse
      }
    }
  } catch (error) {
    return {
      requestedStatus: {
        firebase: {
          statusCode: 500,
          statusText: 'Internal Server Error',
          error: error
        },
        sql: {
          statusCode: 500,
          statusText: 'Internal Server Error',
          error: error
        }
      },
      response: {
        firebase: null,
        sql: null
      }
    }
  }
}

export const UpdateScore = async (score: number, userId: string): Promise<void> => {
  try {
    await axiosClient.put(`/score/users/${score}/${userId}`)
  } catch (error) {
    console.error(error)
  }
}
