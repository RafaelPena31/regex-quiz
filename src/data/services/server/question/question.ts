import { createQuestion } from './repositories/create'
import { deleteQuestion } from './repositories/delete'
import { findAllQuestions } from './repositories/findAll'
import { findQuestionById } from './repositories/findById'
import { updateQuestion } from './repositories/update'
import { IQuestionServerMethods } from './types/IQuestion'

const questionServerService: IQuestionServerMethods = {
  async create({ body, correctAnswer, title, type }) {
    const question = await createQuestion({ body, correctAnswer, title, type })
    return question
  },

  async update({ id, body, correctAnswer, title, type }) {
    await updateQuestion({ id, body, correctAnswer, title, type })
  },

  async findById(id) {
    const question = await findQuestionById(id)
    return question
  },

  async findAll() {
    const questions = await findAllQuestions()
    return questions
  },

  async delete(id) {
    await deleteQuestion(id)
  }
}

export { questionServerService }
