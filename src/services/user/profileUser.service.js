import users from '../../database/users/db'

const profileUserService = ({ id }) => {
  const { name, email, createdOn, updatedOn } = users.find((user) => user.id === id)

  return { name, email, createdOn, updatedOn, id }
}

export default profileUserService
