import Joi = require("@hapi/joi");
import { HASURA_ROLES } from "./hasura/types";
import { STATUSES } from "./types";

export const RoleValidator = Joi.string().valid(...HASURA_ROLES);
export const StatusValidator = Joi.string().valid(...STATUSES);