import { Router } from "express";
import { usersController } from "../controller/users.controller.js";
import { rbacFunctions } from "../rbac/rbac_functions.js";
import { verifyJwt } from "../middlewares/authorization.js";


export const usersRoutes = Router()


usersRoutes.post('/create', usersController.create)
usersRoutes.post('/edit', verifyJwt, rbacFunctions.validateRole('users:edit'), usersController.update)
usersRoutes.post('/login', usersController.login)