import { Roles } from "../db/database.js";
import { HttpStatusMap } from "../http_status_map.js";
import { rolesPermissions } from "./roles_permissions.config.js";

export const rbacFunctions = {
  validateRole: (targetPermission) => {

    return async (req, res, next) => {

      try {

        const { userRoleId } = req

        const role = await Roles.findOne({where: {id: userRoleId}})

        if (
          role.name != rolesPermissions.admin.role &&
          role.name != rolesPermissions.editor.role &&
          role.name != rolesPermissions.reader.role
        ) {
          return res.status(HttpStatusMap.UNAUTHORIZED.sc).json({ type: HttpStatusMap.UNAUTHORIZED.type, message: HttpStatusMap.UNAUTHORIZED.message })

        }

        const roleObj = await Roles.findOne({ where: { name: role.name } });
        const permissionArr = await roleObj.getAssociatedPermissions({
          where: { name: targetPermission },
        });

        if (permissionArr.length <= 0) {
          return res.status(HttpStatusMap.UNAUTHORIZED.sc).json({ type: HttpStatusMap.UNAUTHORIZED.type, message: 'Você não tem o nível de autorização necessário para executar isso' })
        } else {
          next()
        }
      }
      catch (e) {
        return res.status(HttpStatusMap.INTERNAL_SERVER_ERROR.sc).json({ type: HttpStatusMap.INTERNAL_SERVER_ERROR.type, message: e.message })
      }
    }


  },
};
