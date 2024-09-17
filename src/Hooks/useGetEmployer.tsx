import { useHttp } from "../Service/useHttp";
import { CollaboratorServices } from "../Service/employerServices";
import { useQuery, type UseQueryResult } from "@tanstack/react-query";
import type { IColalaborator } from "../types/Employers/collabotarorType";
import type { ICollaboratorResponse } from "../Service/methods/get";

const fetchAllCollaborators = async (): Promise<IColalaborator[] | any> => {
  const api = useHttp();
  const getList = new CollaboratorServices();
  const response: ICollaboratorResponse = await getList.AllCollaborators(api);
  return response;
};

export const useGetEmployerList = (): UseQueryResult<IColalaborator[]> => {
  const getcollaboratorQuery = useQuery<IColalaborator[]>({
    queryFn: fetchAllCollaborators,
    queryKey: ["get-collaborator"],
  });

  return getcollaboratorQuery;
};
