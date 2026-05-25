import cors from 'cors'

export const configCors = cors({
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
    methods: ['POST', 'GET', 'DELETE', 'PUT'],
    origin: '*'
})