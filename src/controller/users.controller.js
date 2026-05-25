import { HttpStatusMap } from "../http_status_map"
import { userSchema } from "../schemas/users.schema"
import bcrypt from 'bcryptjs'


export const usersController = {
    create: async (req, res) => {
        try {
            const result = userSchema.safeParse(req.body)

            if (result.success) {
                
                const passwordHash = await bcrypt.hash(result.data.password, process.env.SALT_NUMBER_HASH || 10)
                res.status(HttpStatusMap.CREATED.sc).json({ type: HttpStatusMap.CREATED.type, message: HttpStatusMap.CREATED.message })
            }
        }
        catch(e){

        }
    }
}