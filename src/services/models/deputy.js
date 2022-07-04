import { nationalAssemblyAPI } from "../index";

const resource = "/deputies/";

export const deputyService = {
  getMany(params) {
    return nationalAssemblyAPI.get(resource, { params });
  },
  getOne(id) {
    return nationalAssemblyAPI.get(`${resource}${id}/`);
  },
};
