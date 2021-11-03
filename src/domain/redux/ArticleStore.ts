import { Dispatch } from 'redux'
import { IArticle } from '../types/article'

export const SET_ARTICLE = 'SET_ARTICLE'
export const RESET_ARTICLE = 'RESET_ARTICLE'

export const SET_OPENED_ARTICLE = 'SET_OPENED_ARTICLE'
export const RESET_OPENED_ARTICLE = 'RESET_OPENED_ARTICLE'

interface ISetArticle {
  type: typeof SET_ARTICLE
  payload: IArticle[]
}

interface IResetArticle {
  type: typeof RESET_ARTICLE
}

interface ISetOpenedArticle {
  type: typeof SET_OPENED_ARTICLE
  payload: string
}

interface IResetOpenedArticle {
  type: typeof RESET_OPENED_ARTICLE
}

export interface ArticleModelState {
  articleList: IArticle[]
  openedArticle: string[]
}

export type ArticleActions = ISetArticle | IResetArticle | ISetOpenedArticle | IResetOpenedArticle

export const articleState: ArticleModelState = {
  articleList: [],
  openedArticle: []
}

export const ArticleReducer = (state = articleState, action: ArticleActions) => {
  switch (action.type) {
    case SET_ARTICLE:
      return {
        ...state,
        articleList: action.payload
      }
    case RESET_ARTICLE:
      return {
        ...state,
        articleList: []
      }
    case SET_OPENED_ARTICLE:
      return {
        ...state,
        openedArticle: [...state.openedArticle, action.payload]
      }
    case RESET_OPENED_ARTICLE:
      return {
        ...state,
        openedArticle: []
      }
    default:
      return state
  }
}

export const SetArticle = (articleList: IArticle[]) => async (dispatch: Dispatch<ArticleActions>) => {
  dispatch({ type: SET_ARTICLE, payload: articleList })
}

export const ResetArticle = () => async (dispatch: Dispatch<ArticleActions>) => {
  dispatch({ type: RESET_ARTICLE })
}

export const SetOpenedArticle = (id: string) => async (dispatch: Dispatch<ArticleActions>) => {
  dispatch({ type: SET_OPENED_ARTICLE, payload: id })
}

export const ResetOpenedArticle = () => async (dispatch: Dispatch<ArticleActions>) => {
  dispatch({ type: RESET_OPENED_ARTICLE })
}
