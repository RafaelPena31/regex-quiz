import { AxiosResponse } from 'axios'
import { IUserAnswer } from './entities/IUserAnswer'
import { ICreateUserAnswer } from './repositories/ICreateUserAnswer'
import { IUpdateUserAnswer } from './repositories/IUpdateUserAnswer'

interface IUserAnswerMethods {
  create({ question_id, userAnswer, user_id }: ICreateUserAnswer): Promise<AxiosResponse<IUserAnswer>>
  update({ id, question_id, userAnswer, user_id }: IUpdateUserAnswer): Promise<void>
  findById(id: string): Promise<AxiosResponse<IUserAnswer>>
  findByQuestion(questionId: string): Promise<AxiosResponse<IUserAnswer>>
  findByUserId(user_id: string): Promise<AxiosResponse<IUserAnswer>>
  delete(id: string): Promise<void>
}

export type { IUserAnswerMethods }
