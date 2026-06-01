import { Permissions, Roles, sequelize } from "../db/database.js";
import { rolesPermissions } from "./roles_permissions.config.js";

export const rbacFunctions = {
  validateRole: async (role, targetPermission) => {
    if (
      role != rolesPermissions.admin.role &&
      role != rolesPermissions.editor.role &&
      role != rolesPermissions.reader.role
    ) {
      return {
        success: false,
        message: "Role não identificado",
      };
    }

    const roleObj = await Roles.findOne({ where: { name: role } });
    const permissionArr = await roleObj.getAssociatedPermissions({
      where: { name: targetPermission },
    });

    if (permissionArr.length <= 0) {
      return {
        success: false,
        message: "Permissão não concedida",
      };
    } else {
      return {
        success: true,
        message: "Permissão concedida",
      };
    }
  },
};
