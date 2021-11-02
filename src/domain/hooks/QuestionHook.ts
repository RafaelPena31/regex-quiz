import { useSelector } from 'react-redux'
import { RootState } from '../redux/reducers'

export const useQuestion = () => useSelector((state: RootState) => state.question.questionList)
export const useAnswer = () => useSelector((state: RootState) => state.question.answeredQuestions)
