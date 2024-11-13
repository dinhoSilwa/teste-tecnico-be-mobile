import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { collaboratorSchema } from "../Model/shemasYup/collaboratorSchemas";
import {
  useMutation,
  UseMutationResult,
  useQueryClient,
} from "@tanstack/react-query";

import type { ICollaborator } from "../types/Employers/collabotarorType";
import { addCollaborator, getByIdAndUpdate } from "./utils/methodsFuntion";
import { useGetEmployerList } from "./useGetEmployer";

export const useFormMutation = (operation: "add" | "edit", id?: string) => {
  const Query = useQueryClient();
  const { refetch } = useGetEmployerList();
  const QUERY_KEY = ["create-query"] as const;

  const mutation: UseMutationResult<
    void,
    unknown,
    { id: string | undefined; data: ICollaborator },
    unknown
  > = useMutation({
    mutationFn: ({ id, data }) => {
      if (operation === "add") {
        return addCollaborator(data);
      } else if (operation === "edit" && id) {
        return getByIdAndUpdate(id, data);
      }
      throw new Error("Invalid Operation or Missing id");
    },
    onError: (error) => console.error(`Error ${operation}`, error),
    onSuccess: () => {
      Query.invalidateQueries({ queryKey: QUERY_KEY });
      refetch();
    },
  });

  const {
    handleSubmit,
    register,
    watch,
    reset,
    setValue,
    formState: { errors },
  } = useForm<ICollaborator>({
    resolver: yupResolver(collaboratorSchema),
  });

  const onSubmit = (data: ICollaborator) => {
    mutation.mutate({ id, data });
  };

  return {
    handleSubmit: handleSubmit(onSubmit),
    register,
    watch,
    errors,
    reset,
    isLoading: mutation.isPending,
    isError: mutation.isError,
    isSuccess: mutation.isSuccess,
    setValue,
  };
};
