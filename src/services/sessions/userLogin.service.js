import users from '../../database/users/db'
import * as bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

const userLoginService = ({ email, password }) => {
    const user = users.find(user => user.email === email)

    if (!user ) {
        throw new Error("Wrong email/password")
    }
    
    const passwordMatch = bcrypt.compareSync(password, user.password)
    
    if (!passwordMatch) {
        throw new Error("Wrong email/password")
    }
                        // poderia ter passado user.isAdm no primeiro objeto
    const token = jwt.sign({ email }, "8422dbd9f4d4bbc30b6b4d57605da553", { expiresIn: "24h", subject: user.id})
    
    return { token }
}

export default userLoginService