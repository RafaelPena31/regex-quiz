import { ArticleActions } from './ArticleStore'
import { QuestionActions } from './QuestionStore'
import { UserActions } from './UserStore'

export type RootActions = UserActions | QuestionActions | ArticleActions
