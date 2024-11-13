import { useQuery, type UseQueryResult } from "@tanstack/react-query";
import type { ICollaborator } from "../types/Employers/collabotarorType";
import { fetchAllCollaborators } from "./utils/methodsFuntion";

// todo
// 1 - Include pagination in the backend for better API performance
//
export const useGetEmployerList = (): UseQueryResult<ICollaborator[]> => {
  const getcollaboratorQuery = useQuery<ICollaborator[]>({
    queryFn: fetchAllCollaborators,
    queryKey: ["get-collaborator"],
  });

  return getcollaboratorQuery;
};
