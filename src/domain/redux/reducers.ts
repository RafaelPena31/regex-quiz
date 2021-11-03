import { combineReducers } from 'redux'
import { ArticleReducer } from './ArticleStore'
import { QuestionReducer } from './QuestionStore'
import { UserReducer } from './UserStore'

const rootReducer = combineReducers({
  user: UserReducer,
  article: ArticleReducer,
  question: QuestionReducer
})

export default rootReducer

export type RootState = ReturnType<typeof rootReducer>
