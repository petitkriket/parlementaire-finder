import { useQuery } from "vue-query";

import { organizationService } from "../services/models/organization";
import { getListPaginationInfo } from "../services/helpers";

export const useOrganizationsQuery = (params) => {
  return useQuery({
    queryKey: ["organizations", params],
    queryFn: () =>
      organizationService.getMany({ _page: 1, _limit: 25, ...params.value }),
    select: ({ data, headers }) => {
      return {
        organizations: data,
        info: getListPaginationInfo(headers),
      };
    },
  });
};
