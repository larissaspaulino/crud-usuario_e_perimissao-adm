import users from '../database/users/db'

const verifyEmailAvailabilityMiddleware = (request, response, next) => {

  const { email } = request.body

  const userAlreadyExistis = users.find((user) => user.email === email)

  if (userAlreadyExistis) {
    return response.status(400).json({ message: 'E-mail already registered' })
  }

  next() 
}

export default verifyEmailAvailabilityMiddleware
