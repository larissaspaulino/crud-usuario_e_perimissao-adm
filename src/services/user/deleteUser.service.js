import users from '../../database/users/db'

const deleteUserService = ({ id }) => {
  let userIndex = users.findIndex((user) => user.id === id)

  users.splice(userIndex, 1)
}

export default deleteUserService
