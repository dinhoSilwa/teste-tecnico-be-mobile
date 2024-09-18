import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { collaboratorSchema } from "../Model/shemasYup/collaboratorSchemas";
import {
  useMutation,
  UseMutationResult,
  useQueryClient,
} from "@tanstack/react-query";
import { useHttp } from "../Service/useHttp";
import { CollaboratorServices } from "../Service/employerServices";
import type { ICollaborator } from "../types/Employers/collabotarorType";
import { useGetEmployerList } from "./useGetEmployer";

const addEmployer = async (CollaboratorData: ICollaborator): Promise<void> => {
  const api = useHttp();
  const service = new CollaboratorServices();
  await service.createCollabotaror(api, CollaboratorData);
};

export const useFormValidation = () => {
  const addEmployerQuery = useQueryClient();
  const { refetch } = useGetEmployerList();

  const addEmployerMutation: UseMutationResult<
    void,
    unknown,
    ICollaborator,
    unknown
  > = useMutation({
    mutationFn: addEmployer,
    onError: (error) => console.error("Erro Ao Adicionar Empregado", error),
    onSuccess: () => {
      console.log("Sucesso ao Cadastrar"),
        addEmployerQuery.invalidateQueries({ queryKey: ["create-query"] });
      refetch();
    },
  });

  const {
    handleSubmit,
    register,
    watch,
    reset,
    formState: { errors },
  } = useForm<ICollaborator>({
    resolver: yupResolver(collaboratorSchema),
  });

  const onSubmit = (CollaboratorData: ICollaborator) => {
    addEmployerMutation.mutate(CollaboratorData);
  };

  return {
    handleSubmit: handleSubmit(onSubmit),
    register,
    watch,
    errors,
    reset,
    isLoading: addEmployerMutation.isPending,
    isError: addEmployerMutation.isError,
    isSuccess: addEmployerMutation.isSuccess,
  };
};
