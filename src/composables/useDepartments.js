import axios from "axios";
import { useQuery } from "vue-query";

/**
 * A Composable that fetches the list of departments from Etalab package
 * https://www.npmjs.com/package/@etalab/decoupage-administratif
 */

const SOURCE =
  "https://unpkg.com/@etalab/decoupage-administratif@2.1.0/data/departements.json";

export default () => {
  return useQuery({
    queryKey: ["departments"],
    queryFn: () => axios.get(SOURCE),
    select: ({ data }) => {
      return { departments: data };
    },
  });
};
