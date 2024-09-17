import {
  useMutation,
  useQueryClient,
  type UseMutationResult,
} from "@tanstack/react-query";
import { CollaboratorServices } from "../Service/employerServices";
import { useHttp } from "../Service/useHttp";
import { useGetEmployerList } from "./useGetEmployer";

export const deleteCollaborator = async (
  collaboratorId: string
): Promise<void> => {
  const api = useHttp();
  const deleteColl = new CollaboratorServices();
  await deleteColl.deleteCollaborator(api, collaboratorId);
};

export const useDeleteCollaborator = () => {
  const deleteQuery = useQueryClient();
  const {refetch} = useGetEmployerList()
  const deleteMutation: UseMutationResult<void, unknown, string, unknown> =
    useMutation({
      mutationFn: deleteCollaborator,
      onError: (error) => console.error("Erro ao deletar Colaborador", error),
      onSuccess: () => {
        refetch()
        deleteQuery.invalidateQueries({ queryKey: ["collaborator-query"] });
      },
    });

  return {
    deleteMutation,
    isLoadingDelete: deleteMutation.isPending,
    isDeleted: deleteMutation.isSuccess,
    isErrorDelete: deleteMutation.isError,
  };
};
