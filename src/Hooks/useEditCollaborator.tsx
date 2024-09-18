import type { AxiosInstance } from "axios";
import { CollaboratorServices } from "../Service/employerServices";
import { useHttp } from "../Service/useHttp";
import type { ICollaborator } from "../types/Employers/collabotarorType";
import {
  useMutation,
  useQueryClient,
  type UseMutationResult,
} from "@tanstack/react-query";

interface UpdateProps {
  api: AxiosInstance;
  collaboratorId: string;
  update: ICollaborator;
}

const getByIdAndUpdate = async (
  id: string,
  update: ICollaborator
): Promise<any> => {
  const api = useHttp();
  const updateCollaborator = new CollaboratorServices();
  await updateCollaborator.updateCollaboratorById(api, id, update);
  return;
};

export const useEditCollaborator = () => {
  const updateQuery = useQueryClient();

  const upDateMutation: UseMutationResult<void, unknown, UpdateProps, unknown> =
    useMutation({
      mutationFn: ({ collaboratorId, update }) =>
        getByIdAndUpdate(collaboratorId, update),
      onError: (error) => console.error("Falha ao Atualizar", error),
      onSuccess: (data) => {
        console.log("Atualizado com Sucesso", data),
          updateQuery.invalidateQueries({ queryKey: ["update-query"] });
      },
    });

  const onSubmitUpdate = (collaboratorId: string, data: ICollaborator) => {
    const api = useHttp();
    if (collaboratorId) {
      upDateMutation.mutate({
        api,
        collaboratorId,
        update: data,
      });
    }
  };

  return {
    handleSubmitUpdate: onSubmitUpdate,
  };
};
