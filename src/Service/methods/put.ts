// export const updateCollaboratorById = async (
//   api: AxiosInstance,
//   CollaboratorData: ICollaborator
// ) => {
//   const { data } = await api.post("collaborators", CollaboratorData);
//   return data;
// };

import type { AxiosInstance } from "axios";
import type { ICollaborator } from "../../types/Employers/collabotarorType";

export const updateCollaboratorByIdDetails = async (
  api: AxiosInstance,
  collaboratorId: string,
  update: ICollaborator
) => {
  await api.put(`/api/collaborators/${collaboratorId}`, update);
};
