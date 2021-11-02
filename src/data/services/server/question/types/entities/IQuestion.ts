import { TypeQuestions } from '../../../../../../domain/types/enum'

interface IQuestion {
  id: string
  correctAnswer: string
  title: string
  type: TypeQuestions
  body: string
}

interface IAnswer {
  index: number
  answer: string | boolean
  questionId?: string
  questionType?: TypeQuestions
  correctAnswer?: string | boolean
  isCorrect?: boolean
}

export type { IQuestion, IAnswer }
