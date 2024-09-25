import type { AxiosInstance } from "axios";

export const deleteCollaboratorId = async (
  api: AxiosInstance,
  collaboratorId: string
) => {
  await api.delete(`/api/collaborators/${collaboratorId}`);
};
