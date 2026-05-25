import z, { email, string } from "zod";


export const userSchema = z.object({
    name: string().min(3).max(20),
    email: email(),
    password: string().min(8).max(30),
    confirmPassword: string().min(8).max(30)
}).refine((schema) => schema.password == schema.confirmPassword, {
    message: 'Confirme a senha corretamente',
    path: ['confirmPassword']
})