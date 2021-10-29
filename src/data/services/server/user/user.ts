import { createUser } from './repositories/create'
import { deleteUser } from './repositories/delete'
import { findUserByEmail } from './repositories/findByEmail'
import { findUserById } from './repositories/findById'
import { updateUser } from './repositories/update'
import { IUserServerServiceMethods } from './types/IUser'

const userServerService: IUserServerServiceMethods = {
  async create({ answeredQuestions, email, name, score }) {
    const user = await createUser({ answeredQuestions, email, name, score })
    return user
  },

  async update({ id, answeredQuestions, email, name, score }) {
    await updateUser({ id, answeredQuestions, email, name, score })
  },

  async findById(id) {
    const user = await findUserById(id)
    return user
  },

  async findByEmail(email) {
    const user = await findUserByEmail(email)
    return user
  },

  async delete(id) {
    await deleteUser(id)
  }
}

export { userServerService }
