import helmet from "helmet";

export const configHelmet = helmet({
    hidePoweredBy: true,
    xFrameOptions: {action: 'deny'},
    contentSecurityPolicy: false
})