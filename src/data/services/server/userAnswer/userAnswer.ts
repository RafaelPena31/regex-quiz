import { createUserAnswer } from './repositories/create'
import { deleteUserAnswer } from './repositories/delete'
import { findUserAnswerById } from './repositories/findById'
import { findUserAnswerByQuestion } from './repositories/findByQuestion'
import { findUserAnswerByUserId } from './repositories/findByUserId'
import { updateUserAnswer } from './repositories/update'
import { IUserAnswerMethods } from './types/IUserAnswer'

const userAnswerServerService: IUserAnswerMethods = {
  async create({ question_id, userAnswer, user_id }) {
    const userAnswerData = await createUserAnswer({ question_id, userAnswer, user_id })
    return userAnswerData
  },

  async update({ id, question_id, userAnswer, user_id }) {
    await updateUserAnswer({ id, question_id, userAnswer, user_id })
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
