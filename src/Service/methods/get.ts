import type { AxiosInstance, AxiosResponse } from "axios";
import type { IColalaborator } from "../../types/Employers/collabotarorType";

export interface ICollaboratorResponse {
  getAll: IColalaborator;
}
export const getAllCollaborators = async (
  api: AxiosInstance
): Promise<ICollaboratorResponse> => {
  const response: AxiosResponse<ICollaboratorResponse> =
    await api.get<ICollaboratorResponse>("collaborators");
  return response.data;
};
