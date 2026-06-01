import jwt from 'jsonwebtoken'
import { HttpStatusMap } from '../http_status_map.js'

export const verifyJwt = (req, res, next) => {

    const { authorization } = req.headers

    if (!authorization) {
        return res.status(HttpStatusMap.INTERNAL_SERVER_ERROR.sc).json({ type: HttpStatusMap.INTERNAL_SERVER_ERROR.type, message: HttpStatusMap.INTERNAL_SERVER_ERROR.message })
    }

    const token = authorization.split(' ')[1]

    const decoded = jwt.verify(token, process.env.JWT_SECRET)

    if (decoded) {
        req.userName = decoded.userName
        req.userId = decoded.userId
        req.userRoleId = decoded.userRoleId
        req.userEmail = decoded.userRoleId

        next()
    }
    else {
        return res.status(HttpStatusMap.INTERNAL_SERVER_ERROR.sc).json({ type: HttpStatusMap.INTERNAL_SERVER_ERROR.type, message: HttpStatusMap.INTERNAL_SERVER_ERROR.message })
    }
}