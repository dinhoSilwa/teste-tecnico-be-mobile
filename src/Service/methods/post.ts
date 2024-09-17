import { AxiosInstance } from "axios";
import { IColalaborator } from "../../types/Employers/collabotarorType";

export const addNewEmployer = async (
  api: AxiosInstance,
  CollaboratorData: IColalaborator
) => {
  const { data } = await api.post("collaborators", CollaboratorData);
  return data;
};
