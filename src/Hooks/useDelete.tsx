import {
  useMutation,
  useQueryClient,
  type UseMutationResult,
} from "@tanstack/react-query";
import { useGetEmployerList } from "./useGetEmployer";
import { deleteCollaborator } from "./utils/methodsFuntion";

export const useDeleteCollaborator = () => {
  const deleteQuery = useQueryClient();
  const { refetch } = useGetEmployerList();
  const deleteMutation: UseMutationResult<void, unknown, string, unknown> =
    useMutation({
      mutationFn: deleteCollaborator,
      onError: (error) => console.error("Erro ao deletar Colaborador", error),
      onSuccess: () => {
        refetch();
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
