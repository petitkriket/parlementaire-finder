import { nationalAssemblyAPI } from "../index";

const resource = "/organizations/";

export const organizationService = {
  getMany(params) {
    return nationalAssemblyAPI.get(resource, { params });
  },
};
