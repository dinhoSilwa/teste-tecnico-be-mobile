import { useHttp } from "../Service/useHttp";
import { CollaboratorServices } from "../Service/employerServices";
import { useQuery, type UseQueryResult } from "@tanstack/react-query";
import type { ICollaborator } from "../types/Employers/collabotarorType";
import type { ICollaboratorResponse } from "../Service/methods/get";

const fetchAllCollaborators = async (): Promise<ICollaborator[] | any> => {
  const api = useHttp();
  const getList = new CollaboratorServices();
  const response: ICollaboratorResponse = await getList.AllCollaborators(api);
  return response;
};

export const useGetEmployerList = (): UseQueryResult<ICollaborator[]> => {
  const getcollaboratorQuery = useQuery<ICollaborator[]>({
    queryFn: fetchAllCollaborators,
    queryKey: ["get-collaborator"],
  });

  return getcollaboratorQuery;
};
