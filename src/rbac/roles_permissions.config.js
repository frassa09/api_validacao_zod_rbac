export const rolesPermissions = {
  admin: {
    role: "admin",
    description: "Administrador do Sistema",
    permissions: {
      articles: {
        read: {
          name: "article:read",
          description: "Permite que o artigo seja lido",
        },
        edit: {
          name: "article:edit",
          description: "Permite que o artigo seja editado",
        },
        delete: {
          name: "article:delete",
          description: "Permite que o artigo seja deletado",
        },
        create: {
          name: "article:create",
          description: "Permite que o artigo seja criado",
        },
      },
      users: {
        read: {
          name: "users:read",
          description: "Permite que o usuário seja lido",
        },
        edit: {
          name: "users:edit",
          description: "Permite que o usuário seja editado",
        },
        delete: {
          name: "users:delete",
          description: "Permite que o usuário seja deletado",
        },
        create: {
          name: "users:create",
          description: "Permite que o usuário seja criado",
        },
      },
    },
  },
  editor: {
    role: "editor",
    description: "Editor do Sistema",
    permissions: {
      articles: {
        read: {
          name: "article:read",
          description: "Permite que o artigo seja lido",
        },
        edit: {
          name: "article:edit",
          description: "Permite que o artigo seja editado",
        },
        create: {
          name: "article:create",
          description: "Permite que o artigo seja criado",
        },
      },
      users: {
        read: {
          name: "users:read",
          description: "Permite que o usuário seja lido",
        },
      },
    },
  },
  reader: {
    role: "reader",
    description: "Leitor do Sistema",
    permissions: {
      articles: {
        read: {
          name: "article:read",
          description: "Permite que o artigo seja lido",
        },
      },
      users: {},
    },
  },
};
