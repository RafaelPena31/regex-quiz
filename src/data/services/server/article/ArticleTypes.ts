import { DateString, IStatusRequest } from '../../../../domain/types/general'

export interface IArticle {
  id: string
  randomId: number
  title: string
  content: string
  author: string
  publishedAt: DateString
  subAuthor?: string
  videoLink?: string
  articleLink?: string
  coverLink?: string
}

export interface ICreateArticle {
  title: string
  content: string
  author: string
  publishedAt: DateString
  subAuthor?: string
  videoLink?: string
  articleLink?: string
  coverLink?: string
}

export interface IPayloadFindArticleResponse {
  requestedStatus: IStatusRequest
  response: IArticle | null
}

export interface IPayloadFindAllArticleResponse {
  requestedStatus: IStatusRequest
  response: IArticle[] | null
}
