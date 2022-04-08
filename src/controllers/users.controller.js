import createUserService from '../services/user/createUser.service'
import listUserService from '../services/user/listUsers.service'
import deleteUserService from '../services/user/deleteUser.service'
import partialUpdateUserService from '../services/user/partialUpdate.service'
import profileUserService from '../services/user/profileUser.service'

export default class UserController {
  async store(request, response) {
    // console.log(request.route)
    const body = request.body

    const user = await createUserService(body)

    return response.status(201).json(user)
  }

  index(request, response) {
    const users = listUserService()

    return response.status(200).json(users)
  }

  profile(request, response) {
    const { id } = request.user

    const user = profileUserService({ id })

    return response.status(200).json(user)
  }

  partialUpdate(request, response) {
    const newData = request.body
    const { id } = request.params

    try {
      const user = partialUpdateUserService({ newData, id })

      return response.status(200).json(user)
    } catch (err) {
      return response.status(400).json({
        message: err.message,
      })
    }
  }

  delete(request, response) {
    const { id } = request.params

    try {
      deleteUserService({ id })
      return response.status(204).json('User deleted with success')
    } catch (err) {
      return response.status(400).json({
        message: err.message,
      })
    }
  }
}
