import { combineReducers } from 'redux'
import { UserReducer } from './UserStore'

const rootReducer = combineReducers({
  user: UserReducer
})

export default rootReducer

export type RootState = ReturnType<typeof rootReducer>
