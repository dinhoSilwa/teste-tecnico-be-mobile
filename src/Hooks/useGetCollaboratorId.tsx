import { useHttp } from "../Service/useHttp";
import {
  CollaboratorServices,
  type collaboratorProps,
} from "../Service/employerServices";
import {
  useMutation,
  useQueryClient,
  type UseMutationResult,
} from "@tanstack/react-query";
import { CollaboratorStore } from "../store/collaboratorToForm";

const collaborattorById = async (id: string) => {
  const api = useHttp();
  const getById = new CollaboratorServices();
  const response = await getById.getCollaboratorById(api, id);
  return response;
};

export const useGetCollaboratorId = () => {
  const byIdQuery = useQueryClient();
  const { setcollaborator } = CollaboratorStore();

  const MutationGetById: UseMutationResult<
    collaboratorProps,
    unknown,
    string,
    unknown
  > = useMutation({
    mutationFn: collaborattorById,
    onSuccess: (data) => {
      console.log("enviando", data.collaborator);
      if (data.collaborator) {
        setcollaborator(data.collaborator);
      }

      byIdQuery.invalidateQueries({ queryKey: ["byId-query"] });
    },
    onError: (error) => {
      console.error("Falha ao Obter dados", error);
    },
  });

  const handleCollaboratorById = (id: string) => {
    MutationGetById.mutate(id);
  };

  return {
    handleCollaboratorById,
    CollaboratoData: MutationGetById.data,
    isLoading: MutationGetById.isPending,
    isErro: MutationGetById.isError,
  };
};
