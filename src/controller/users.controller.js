import { Roles, Users } from "../db/database.js"
import { HttpStatusMap } from "../http_status_map.js"
import { createUserSchema, editUserSchema, loginUserSchema } from "../schemas/users.schema.js"
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'


export const usersController = {
    create: async (req, res) => {
        try {
            console.log('requisição recebida')
            console.log(req.body)
            const result = createUserSchema.safeParse(req.body)

            if (result.success) {

                const password_hash = await bcrypt.hash(result.data.password, process.env.SALT_NUMBER_HASH || 10)
                const role = await Roles.findOne({ where: { name: result.data.role } })

                const user = await Users.create({ name: result.data.name, email: result.data.email, password_hash, role_id: role.id })

                res.status(HttpStatusMap.CREATED.sc).json({ type: HttpStatusMap.CREATED.type, message: HttpStatusMap.CREATED.message, data: user })
            }
            else {
                return res.status(400).json({ error: result.error.message })
            }
        }
        catch (e) {

            return res.status(500).json({ error: e.message })
        }
    },
    update: async (req, res) => {
        try {

            const result = editUserSchema.safeParse()

            if(result.success){

                const user = await Users
            }
        }
        catch (e) {

        }
    },
    login: async (req, res) => {

        try {

            const result = loginUserSchema.safeParse(req.body)

            if (result.success) {

                const user = await Users.findOne({ where: { email: result.data.email } })

                if (!user) {
                    return res.status(HttpStatusMap.NOT_FOUND.sc).json({ type: HttpStatusMap.NOT_FOUND.type, message: HttpStatusMap.NOT_FOUND.message })
                }

                const passwordIsCorrect = await bcrypt.compare(result.data.password, user.password_hash)

                if (passwordIsCorrect) {

                    console.log(user.role_id)

                    const sessionToken = jwt.sign({ userName: user.name, userId: user.id, userRoleId: user.role_id, userEmail: user.email }, process.env.JWT_SECRET)

                    console.log(jwt.decode(sessionToken, process.env.JWT_SECRET))

                    return res.status(HttpStatusMap.CREATED.sc).json({ type: HttpStatusMap.CREATED.type, message: HttpStatusMap.CREATED.message, token: sessionToken })
                }
                else {
                    return res.status(HttpStatusMap.UNAUTHORIZED.sc).json({ type: HttpStatusMap.UNAUTHORIZED.type, message: HttpStatusMap.UNAUTHORIZED.message })
                }
            }
            else {
                return res.status(HttpStatusMap.BAD_REQUEST.sc).json({ type: HttpStatusMap.BAD_REQUEST.type, message: result.error })
            }
        }
        catch (e) {

            return res.status(HttpStatusMap.INTERNAL_SERVER_ERROR.sc).json({ type: HttpStatusMap.INTERNAL_SERVER_ERROR.type, message: e.message })
        }
    }
}