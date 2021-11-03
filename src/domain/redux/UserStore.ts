import { Dispatch } from 'redux'
import { UserModel, UserModelSQL } from '../../data/services/server/user/UserTypes'

export interface UserDeepModel {
  displayName: string
  email: string
}

export const SET_USER = 'SET_USER'
export const UPDATE_USER = 'UPDATE_USER'

export const SET_SQL_USER = 'SET_SQL_USER'

export const RESET_USER = 'RESET_USER'

interface ISetUser {
  type: typeof SET_USER
  payload: UserModel
}

interface IUpdateUser {
  type: typeof UPDATE_USER
  payload: UserDeepModel
}

interface ISetSQLUser {
  type: typeof SET_SQL_USER
  payload: UserModelSQL
}

interface IResetUser {
  type: typeof RESET_USER
}

export interface UserModelState {
  userStateData: UserModel | null
  userSQLStateData: UserModelSQL | null
}

export type UserActions = ISetUser | IUpdateUser | ISetSQLUser | IResetUser

export const userState: UserModelState = {
  userStateData: null,
  userSQLStateData: null
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
    case SET_SQL_USER:
      return {
        ...state,
        userSQLStateData: action.payload
      }
    case RESET_USER:
      return {
        ...state,
        userStateData: null,
        userSQLStateData: null
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

export const SetSQLUser = (userStateData: UserModelSQL) => async (dispatch: Dispatch<UserActions>) => {
  dispatch({ type: SET_SQL_USER, payload: userStateData })
}

export const ResetUser = () => async (dispatch: Dispatch<UserActions>) => {
  dispatch({ type: RESET_USER })
}
