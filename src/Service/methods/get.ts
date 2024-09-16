import type { AxiosInstance } from "axios";
import type { IColalaborator } from "../../types/Employers/collabotarorType";

export const getAllEmployerList = async (
  api: AxiosInstance
): Promise<IColalaborator[]> => {
  const { data } = await api.get<IColalaborator[]>("collaborator");
  return data;
};
