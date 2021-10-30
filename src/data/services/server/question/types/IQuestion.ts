import { AxiosResponse } from 'axios'
import { IQuestion } from './entities/IQuestion'
import { ICreateQuestion } from './repositories/ICreateQuestion'
import { IUpdateQuestion } from './repositories/IUpdateQuestion'

interface IQuestionServerMethods {
  create({ body, correctAnswer, title, type }: ICreateQuestion): Promise<AxiosResponse<IQuestion>>
  update({ id, body, correctAnswer, title, type }: IUpdateQuestion): Promise<void>
  delete(id: string): Promise<void>
  findById(id: string): Promise<AxiosResponse<IQuestion>>
  findAll(): Promise<AxiosResponse<IQuestion[]>>
}

export type { IQuestionServerMethods }
