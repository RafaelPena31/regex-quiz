import { UserDeepModel } from '../../../../domain/redux/UserStore'
import { IStatusRequest } from '../../../../domain/types/general'

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

export interface UserModelSQL {
  id: string
  name: string
  email: string
  score: number
  answeredQuestions: string[]
}

export interface IUserSQL {
  name: string
  email: string
  score: number
  answeredQuestions: string[]
}

export interface IUserFirestore {
  name: string
  email: string
  password: string
}

export interface IServerStatusRequest {
  firebase: IStatusRequest
  sql: IStatusRequest
}

export interface ICreateUserResponse {
  firebase: UserModel | null
  sql: UserModelSQL | null
}

export interface IPayloadCreateUserResponse {
  requestedStatus: IServerStatusRequest
  response: ICreateUserResponse
}

export interface IUpdateUserResponse {
  firebase: UserDeepModel | null
  sql: UserModelSQL | null
}

export interface IPayloadUpdateUserResponse {
  requestedStatus: IServerStatusRequest
  response: IUpdateUserResponse
}
