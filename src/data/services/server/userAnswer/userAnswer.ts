import { createUserAnswer } from './repositories/create'
import { deleteUserAnswer } from './repositories/delete'
import { findUserAnswerById } from './repositories/findById'
import { findUserAnswerByQuestion } from './repositories/findByQuestion'
import { findUserAnswerByUserId } from './repositories/findByUserId'
import { updateUserAnswer } from './repositories/update'
import { IUserAnswerMethods } from './types/IUserAnswer'

const userAnswerServerService: IUserAnswerMethods = {
  async create({ questionId, userAnswer, userId }) {
    const userAnswerData = await createUserAnswer({ questionId, userAnswer, userId })
    return userAnswerData
  },

  async update({ id, questionId, userAnswer, userId }) {
    await updateUserAnswer({ id, questionId, userAnswer, userId })
  },

  async findById(id) {
    const userAnswer = await findUserAnswerById(id)
    return userAnswer
  },

  async findByQuestion(questionId) {
    const userAnswer = await findUserAnswerByQuestion(questionId)
    return userAnswer
  },

  async findByUserId(userId) {
    const userAnswer = await findUserAnswerByUserId(userId)
    return userAnswer
  },

  async delete(id) {
    await deleteUserAnswer(id)
  }
}

export { userAnswerServerService }
