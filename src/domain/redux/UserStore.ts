import { Dispatch } from 'redux'

export interface UserModel {
  displayName: string | null
  email: string | null
  emailVerified: boolean
  isAnonymous: boolean
  metadata: {
    creationTime?: string
    lastSignInTime?: string
  }
  phoneNumber: string | null
  photoURL: string | null
  providerId: string
  uid: string
}

export const SET_USER = 'SET_USER'
export const UPDATE_USER = 'UPDATE_USER'
export const DELETE_USER = 'DELETE_USER'

interface ISetUser {
  type: typeof SET_USER
  payload: UserModel
}

interface IUpdateUser {
  type: typeof UPDATE_USER
  payload: UserModel
}

interface IDeleteUser {
  type: typeof DELETE_USER
  payload: string
}

export interface UserModelState {
  userStateData: UserModel | null
}

export type UserActions = ISetUser | IUpdateUser | IDeleteUser

export const userState: UserModelState = {
  userStateData: null
}

export const UserReducer = (state = userState, action: UserActions) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        userStateData: action.payload
      }
    case UPDATE_USER:
      return {
        ...state,
        userStateData: action.payload
      }
    case DELETE_USER:
      return {
        ...state,
        userStateData: null
      }
    default:
      return state
  }
}

export const SetUser = (userStateData: UserModel) => async (dispatch: Dispatch<UserActions>) => {
  dispatch({ type: SET_USER, payload: userStateData })
}
