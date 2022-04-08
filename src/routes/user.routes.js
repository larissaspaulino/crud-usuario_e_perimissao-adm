import { Router } from 'express'

import UserController from '../controllers/users.controller'
import ensureAuthToken from '../middlewares/ensureAuthToken.middleware'
import isAdmMiddleware from '../middlewares/isAdm.middleware'

import verifyEmailAvailabilityMiddleware from '../middlewares/verifyEmailAvailability.middleware'

const userController = new UserController()

const userRouter = Router()

userRouter.post('', verifyEmailAvailabilityMiddleware, userController.store)

userRouter.use(ensureAuthToken)

userRouter.get('', isAdmMiddleware, userController.index)
userRouter.get('/profile', userController.profile)
userRouter.patch('/:id', isAdmMiddleware, userController.partialUpdate)
userRouter.delete('/:id', isAdmMiddleware, userController.delete)

export default userRouter
