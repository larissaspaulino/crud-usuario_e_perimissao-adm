import users from '../database/users/db'

const isAdmMiddleware = (request, response, next) => {
  const idRequestingUser = request.user.id
  const user = users.find((user) => user.id === idRequestingUser)

  if (!user) {
    return response.status(404).json({ message: 'User not found' })
  }

  if (request.method === 'DELETE' || request.method === 'PATCH') {
    const idUserBeingRequested = request.params.id

    if (idRequestingUser !== idUserBeingRequested && !user.isAdm) {
      return response.status(401).json({ message: 'Unauthorized' })
    } else {
      return next()
    }
  }

  if (!user.isAdm) {
    return response.status(401).json({ message: 'Unauthorized' })
  }

  next()
}

export default isAdmMiddleware
