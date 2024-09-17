// export const updateCollaborator = async (
//   api: AxiosInstance,
//   CollaboratorData: IColalaborator
// ) => {
//   const { data } = await api.post("collaborators", CollaboratorData);
//   return data;
// };

import type { AxiosInstance } from "axios";
import type { IColalaborator } from "../../types/Employers/collabotarorType";

export const updateCollaboratorDetails = async (
  api: AxiosInstance,
  collaboratorId: string,
  update: IColalaborator
) => {
  await api.put(`collaborators/${collaboratorId}`, update);
};
