import { useHttp } from "../Service/useHttp";
import { CollaboratorServices } from "../Service/employerServices";
import { useQuery, type UseQueryResult } from "@tanstack/react-query";
import type { IColalaborator } from "../types/Employers/collabotarorType";

const getAllcollaborator = async (): Promise<IColalaborator[] | any> => {
  const api = useHttp();
  const get = new CollaboratorServices();
  const response = await get.getAllcollaborator(api);
  console.log(response);
};

export const useGetEmployerList = (): UseQueryResult<IColalaborator[]> => {
  const getcollaboratorQuery = useQuery<IColalaborator[]>({
    queryFn: getAllcollaborator,
    queryKey: ["get-collaborator"],
  });

  return getcollaboratorQuery;
};
