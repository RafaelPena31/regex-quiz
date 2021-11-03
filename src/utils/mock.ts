import { IQuestion } from '../data/services/server/question/QuestionTypes'
import { TypeQuestions } from '../domain/types/enum'

export const mockQuestions: IQuestion[] = [
  {
    id: '1',
    body: 'Texto da questão 1',
    correctAnswer: '123',
    title: '',
    type: TypeQuestions.PRACTICAL
  },
  {
    id: '2',
    body: 'Texto da questão 2',
    correctAnswer: '123',
    title: '',
    type: TypeQuestions.PRACTICAL
  },
  {
    id: '3',
    body: 'Texto da questão 3',
    correctAnswer: 'true',
    title: '',
    type: TypeQuestions.BOOLEAN
  },
  {
    id: '4',
    body: 'Texto da questão 4',
    correctAnswer: 'false',
    title: '',
    type: TypeQuestions.BOOLEAN
  },
  {
    id: '5',
    body: 'Texto da questão 5',
    correctAnswer: '123',
    title: '',
    type: TypeQuestions.PRACTICAL
  },
  {
    id: '6',
    body: 'Texto da questão 6',
    correctAnswer: '123',
    title: '',
    type: TypeQuestions.PRACTICAL
  },
  {
    id: '7',
    body: 'Texto da questão 7',
    correctAnswer: '123',
    title: '',
    type: TypeQuestions.PRACTICAL
  }
]
