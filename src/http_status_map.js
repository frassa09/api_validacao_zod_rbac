export const HttpStatusMap = {
    // --- 2xx SUCESSO ---
    OK: {
        sc: 200,
        type: 'SUCESSO',
        message: 'Requisição processada com sucesso.'
    },
    CREATED: {
        sc: 201,
        type: 'SUCESSO',
        message: 'Registro criado com sucesso.'
    },
    NO_CONTENT: {
        sc: 204,
        type: 'SUCESSO',
        message: 'Requisição processada com sucesso (sem conteúdo de retorno).'
    },

    // --- 4xx ERROS DO CLIENTE (Essenciais para Zod, JWT e RBAC) ---
    BAD_REQUEST: {
        sc: 400,
        type: 'ERRO_VALIDACAO',
        message: 'Dados enviados inválidos ou mal formatados.' // Perfeito para falhas do Zod
    },
    UNAUTHORIZED: {
        sc: 401,
        type: 'ERRO_AUTENTICACAO',
        message: 'Token de acesso ausente, inválido ou expirado.' // Erros de login/JWT
    },
    FORBIDDEN: {
        sc: 403,
        type: 'ERRO_AUTORIZACAO',
        message: 'Você não tem permissão para acessar este recurso.' // Erros de RBAC (falta de role/permission)
    },
    NOT_FOUND: {
        sc: 404,
        type: 'ERRO_NAO_ENCONTRADO',
        message: 'O recurso solicitado não foi encontrado.' // Artigo ou usuário não existe
    },
    CONFLICT: {
        sc: 409,
        type: 'ERRO_CONFLITO',
        message: 'Este registro já existe no sistema.' // E-mail já cadastrado, por exemplo
    },
    UNPROCESSABLE_ENTITY: {
        sc: 422,
        type: 'ERRO_NEGOCIO',
        message: 'A requisição foi recebida correta, mas não pôde ser processada devido a regras de negócio.'
    },

    // --- 5xx ERROS DO SERVIDOR ---
    INTERNAL_SERVER_ERROR: {
        sc: 500,
        type: 'ERRO_INTERNO',
        message: 'Ocorreu um erro interno inesperado no servidor.' // Erros de banco ou crash no Sequelize
    }
};