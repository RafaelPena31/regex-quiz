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

export interface UserDeepModel {
  displayName: string
  email: string
}

export const SET_USER = 'SET_USER'
export const UPDATE_USER = 'UPDATE_USER'
export const RESET_USER = 'RESET_USER'

interface ISetUser {
  type: typeof SET_USER
  payload: UserModel
}

interface IUpdateUser {
  type: typeof UPDATE_USER
  payload: UserDeepModel
}

interface IResetUser {
  type: typeof RESET_USER
}

export interface UserModelState {
  userStateData: UserModel | null
}

export type UserActions = ISetUser | IUpdateUser | IResetUser

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
        userStateData: {
          ...state.userStateData,
          ...action.payload
        } as UserModel
      }
    case RESET_USER:
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

export const UpdateUser = (userStateData: UserDeepModel) => async (dispatch: Dispatch<UserActions>) => {
  dispatch({ type: UPDATE_USER, payload: userStateData })
}

export const ResetUser = () => async (dispatch: Dispatch<UserActions>) => {
  dispatch({ type: RESET_USER })
}
