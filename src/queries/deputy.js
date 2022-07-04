import { useQuery } from "vue-query";

import { deputyService } from "../services/models/deputy";
import { getListPaginationInfo } from "../services/helpers";

export const useDeputiesQuery = (params) => {
  return useQuery({
    queryKey: ["deputies", params],
    queryFn: () =>
      deputyService.getMany({ _page: 1, _limit: 25, ...params.value }),
    select: ({ data, headers }) => {
      return {
        deputies: data,
        info: getListPaginationInfo(headers),
      };
    },
  });
};

export const useDeputyQuery = (id) => {
  return useQuery({
    queryKey: ["deputy", id],
    queryFn: () => deputyService.getOne(id),
    select: ({ data }) => data,
  });
};
