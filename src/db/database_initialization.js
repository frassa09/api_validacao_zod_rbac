import { Roles } from "./database.js";
import { rolesPermissions } from "../rbac/roles_permissions.config.js";
import { Permissions } from "./database.js";

export const seedDatabase = async () => {
  const count = await Roles.count();

  if (count <= 0) {
    await Roles.bulkCreate(
      [
        {
          name: rolesPermissions.admin.role,
          description: rolesPermissions.admin.description,
          Permissions: [
            {
              name: rolesPermissions.admin.permissions.articles.create.name,
              description:
                rolesPermissions.admin.permissions.articles.create.description,
            },
            {
              name: rolesPermissions.admin.permissions.articles.read.name,
              description:
                rolesPermissions.admin.permissions.articles.read.description,
            },
            {
              name: rolesPermissions.admin.permissions.articles.edit.name,
              description:
                rolesPermissions.admin.permissions.articles.edit.description,
            },
            {
              name: rolesPermissions.admin.permissions.articles.delete.name,
              description:
                rolesPermissions.admin.permissions.articles.delete.description,
            },
            {
              name: rolesPermissions.admin.permissions.users.create.name,
              description:
                rolesPermissions.admin.permissions.users.create.description,
            },
            {
              name: rolesPermissions.admin.permissions.users.read.name,
              description:
                rolesPermissions.admin.permissions.users.read.description,
            },
            {
              name: rolesPermissions.admin.permissions.users.edit.name,
              description:
                rolesPermissions.admin.permissions.users.edit.description,
            },
            {
              name: rolesPermissions.admin.permissions.users.delete.name,
              description:
                rolesPermissions.admin.permissions.users.delete.description,
            },
          ],
        },
        {
          name: rolesPermissions.editor.role,
          description: rolesPermissions.editor.description,
          Permissions: [
            {
              name: rolesPermissions.editor.permissions.articles.create.name,
              description:
                rolesPermissions.editor.permissions.articles.create.description,
            },
            {
              name: rolesPermissions.editor.permissions.articles.read.name,
              description:
                rolesPermissions.editor.permissions.articles.read.description,
            },
            {
              name: rolesPermissions.editor.permissions.articles.edit.name,
              description:
                rolesPermissions.editor.permissions.articles.edit.description,
            },
            {
              name: rolesPermissions.editor.permissions.users.read.name,
              description:
                rolesPermissions.editor.permissions.users.read.description,
            },
          ],
        },
        {
          name: rolesPermissions.reader.role,
          description: rolesPermissions.reader.description,
          Permissions: [
            {
              name: rolesPermissions.reader.permissions.articles.read.name,
              description:
                rolesPermissions.reader.permissions.articles.read.description,
            },
          ],
        },
      ],
      { include: [Permissions] },
    );
  }
};
