import z, { email, string } from "zod";
import { rolesPermissions } from "../rbac/roles_permissions.config.js";

const rolesEnum = [rolesPermissions.admin.role, rolesPermissions.editor.role, rolesPermissions.reader.role]

export const createUserSchema = z.object({
    name: string().min(3).max(20),
    email: email(),
    password: string().min(8).max(30),
    confirmPassword: string().min(8).max(30),
    role: z.enum(rolesEnum)
}).refine((schema) => schema.password == schema.confirmPassword, {
    message: 'Confirme a senha corretamente',
    path: ['confirmPassword']
})

export const editUserSchema = z.object({
    name: string().min(3).max(20).optional(),
    email: email().optional(),
    password: string().min(8).max(30).optional(),
    confirmPassword: string().min(8).max(30).optional(),
    role: z.enum(rolesEnum).optional()
}).refine((schema) => schema.password == schema.confirmPassword, {
    message: 'Confirme a senha corretamente',
    path: ['confirmPassword']
})

export const loginUserSchema = z.object({
    email: email(),
    password: string().min(8).max(30),
})