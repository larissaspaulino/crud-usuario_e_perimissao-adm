import users from '../../database/users/db'

const partialUpdateUserService = ({ newData, id }) => {
  const userIndex = users.findIndex((element) => element.id === id)

  if (Object.keys(newData).includes('isAdm')) {
    throw new Error('Changing adm status is not allowed')
  }

  let today = new Date().toUTCString()

  users[userIndex] = { ...users[userIndex], ...newData, updatedOn: today }

  return users[userIndex]
}

export default partialUpdateUserService
