import { DateString } from './general'

export interface IArticle {
  id: string
  randomId: number
  title: string
  content: string
  author: string
  subAuthor?: string
  publishedAt: DateString
  videoLink?: string
  articleLink?: string
  coverLink?: string
}
