import Role from "../models/MasterRoleModel.js";
import { response } from "../utils/ResponseUtils.js";

export const getMasterRole = async (req, res) => {
    try {
      const result = await Role.findAll({
        attributes: ["roleId","name"],
      });
      response(200, result, "Get All Role method Successfully", res);
    } catch (error) {
      console.log(error.message);
    }
  };

export const addMasterRole = async (req, res) => {
    const { name} = req.body;
    try {
      await Role.create({
        name: name,
      });
      response(200, "", "Role Successfully Added", res);
    } catch (error) {
      console.log(error.message);
    }
}