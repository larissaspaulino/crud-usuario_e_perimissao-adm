import users from '../../database/users/db'
import { v4 as uuidv4 } from 'uuid'
import * as bcrypt from 'bcryptjs'

const createUserService = async ({ name, email, password, isAdm = false }) => {
  const hashedPassword = await bcrypt.hash(password, 10)

  let today = new Date().toUTCString()

  const newUser = {
    id: uuidv4(),
    name,
    email,
    isAdm,
    password: hashedPassword,
    createdOn: today,
    updatedOn: today,
  }

  users.push(newUser)

  return {
    id: newUser.id,
    name,
    email,
    createdOn: today,
    updatedOn: today,
  }
}

export default createUserService
