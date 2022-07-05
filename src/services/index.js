import axios from "axios";

/**
 * An Axios instance dedicated to communication with National Assembly API
 * See documentation at https://github.com/petitkriket/national-assembly-members-api
 **/

const baseURL = import.meta.env.VITE_NATIONAL_ASSEMBLY_API_URL;

export const nationalAssemblyAPI = axios.create({ baseURL });
