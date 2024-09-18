import { useQuery, type UseQueryResult } from "@tanstack/react-query";
import type { ICollaborator } from "../types/Employers/collabotarorType";
import { fetchAllCollaborators } from "./utils/methodsFuntion";

export const useGetEmployerList = (): UseQueryResult<ICollaborator[]> => {
  const getcollaboratorQuery = useQuery<ICollaborator[]>({
    queryFn: fetchAllCollaborators,
    queryKey: ["get-collaborator"],
  });

  return getcollaboratorQuery;
};
