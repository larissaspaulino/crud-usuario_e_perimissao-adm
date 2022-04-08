import express from 'express'
import userRouter from './routes/user.routes'
import sessionRouter from './routes/session.routes'

const app = express()
app.use(express.json())
app.use("/users", userRouter)
app.use("/login", sessionRouter)


app.listen(3000, () => {
    console.log(`Server is running on port 3000`)
})