import userLoginService from '../services/sessions/userLogin.service'

export default class SessionController {
  store(request, response) {
    const { email, password } = request.body

    try {
      const user = userLoginService({ email, password })

      return response.status(200).json(user)
    } catch (err) {
      return response.status(401).json({
        message: err.message,
      })
    }
  }
}
