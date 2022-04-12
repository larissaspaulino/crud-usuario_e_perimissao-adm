import jwt from 'jsonwebtoken'

const ensureAuthToken = (request, response, next) => {
  let tokenBearer = request.headers.authorization

  if (!tokenBearer) {
    return response
      .status(401)
      .json({ message: 'Missing Authorization Header' })
  }

  const [bearer, token] = tokenBearer.split(' ')

  jwt.verify(token, '8422dbd9f4d4bbc30b6b4d57605da553', (error, decoded) => {
    if (error) {
      return response.status(401).json({ message: 'Invalid Token' })
    }

    const { sub } = decoded

    request.user = {
      id: sub,
    } //poderia ter passado user.isAdm aqui - ou seja se o usuário é adm ou não
  })

  next()
}

export default ensureAuthToken
