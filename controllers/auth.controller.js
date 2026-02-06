import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import User from '../models/User.js'

export const signUp = async (req, res) => {
    const { name, email, mobile, role, password } = req.body
    const hashPassword = await bcrypt.hash(password, 10)

    try {
        const user = await User.create({
            name,
            email,
            password: hashPassword,
            role,
            mobile
        })

        res.status(201)
        res.json({ message: 'User Created', user })
    }
    catch (err) {
        res.status(500)
        res.send({ message: err.message })
    }

}

export const login = async (req, res) => {
    const { email, password } = req.body

    try {
        const user = await User.findOne({ email })
        if (!user) {
            res.status(401)
            res.json('Unauthorized Request')
        }
        const isPasswordMatch = await bcrypt.compare(password, user.password)
        if (!isPasswordMatch) {
            res.status(401)
            res.json('Unauthorized Request')
        }

        const token = jwt.sign(
            { id: user._id, role: user.role, name: user.name, email: user.email },
            process.env.JWT_SECRET,
            { expiresIn: '1h' }
        )

        res.send({
            token,
            user: {
                name: user.name,
                email: user.email,
                role: user.role
            }
        })
    }
    catch (err) {
        res.status(500)
        res.json({ message: err.message })
    }
}