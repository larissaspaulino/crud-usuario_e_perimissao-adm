import { Router } from 'express'

import SessionController from '../controllers/sessions.controller'

const sessionController = new SessionController()

const sessionRouter = Router()

sessionRouter.post('', sessionController.store)

export default sessionRouter
