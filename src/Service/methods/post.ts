import { AxiosInstance } from "axios";
import { ICollaborator } from "../../types/Employers/collabotarorType";

export const addNewEmployer = async (
  api: AxiosInstance,
  CollaboratorData: ICollaborator
) => {
  const { data } = await api.post("/api/collaborators", CollaboratorData);
  return data;
};
