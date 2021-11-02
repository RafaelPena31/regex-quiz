import { combineReducers } from 'redux'
import { QuestionReducer } from './QuestionStore'
import { UserReducer } from './UserStore'

const rootReducer = combineReducers({
  user: UserReducer,
  question: QuestionReducer
})

export default rootReducer

export type RootState = ReturnType<typeof rootReducer>
