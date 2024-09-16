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
import type { IColalaborator } from "../types/Employers/collabotarorType";

const addEmployer = async (CollaboratorData: IColalaborator): Promise<void> => {
  const api = useHttp();
  const service = new CollaboratorServices();
  await service.createEmployer(api, CollaboratorData);
};

export const useFormValidation = () => {
  const addEmployerQuery = useQueryClient();

  const addEmployerMutation: UseMutationResult<
    void,
    unknown,
    IColalaborator,
    unknown
  > = useMutation({
    mutationFn: addEmployer,
    onError: () => console.error("Erro Ao Adicionar Empregado"),
    onSuccess: () => {
      console.log("Sucesso ao Cadastrar"),
        addEmployerQuery.invalidateQueries({ queryKey: ["create-query"] });
    },
  });

  const {
    handleSubmit,
    register,
    watch,
    formState: { errors },
  } = useForm<IColalaborator>({
    resolver: yupResolver(collaboratorSchema),
  });

  const onSubmit = (CollaboratorData: IColalaborator) => {
    addEmployerMutation.mutate(CollaboratorData);
  };

  return {
    handleSubmit: handleSubmit(onSubmit),
    register,
    watch,
    errors,
    isLoading: addEmployerMutation.isPending,
    isError: addEmployerMutation.isError,
  };
};