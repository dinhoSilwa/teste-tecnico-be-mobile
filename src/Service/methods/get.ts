import type { AxiosInstance, AxiosResponse } from "axios";
import type { ICollaborator } from "../../types/Employers/collabotarorType";
import type { collaboratorProps } from "../employerServices";

export interface ICollaboratorResponse {
  getAll: ICollaborator;
}
export const getAllCollaborators = async (
  api: AxiosInstance
): Promise<ICollaboratorResponse> => {
  const response: AxiosResponse<ICollaboratorResponse> =
    await api.get<ICollaboratorResponse>("/api/collaborators/");
  return response.data;
};

export const collaboratorById = async (
  api: AxiosInstance,
  id: string
): Promise<collaboratorProps> => {
  const response: AxiosResponse<collaboratorProps> =
    await api.get<collaboratorProps>(`/api/collaborators/${id}`);
  return response.data;
};
