import type { AxiosInstance } from "axios";
import { addNewEmployer } from "./methods/post";
import type { IColalaborator } from "../types/Employers/collabotarorType";
import { updateCollaboratorDetails } from "./methods/put";
import { deleteCollaboratorId } from "./methods/delete";
import { getAllCollaborators, type ICollaboratorResponse } from "./methods/get";

export class CollaboratorServices {
  AllCollaborators = async (
    api: AxiosInstance
  ): Promise<ICollaboratorResponse> => await getAllCollaborators(api);

  createCollabotaror = async (
    api: AxiosInstance,
    CollaboratorData: IColalaborator
  ): Promise<void> => await addNewEmployer(api, CollaboratorData);

  updateCollaborator = async (
    api: AxiosInstance,
    collaboratorId: string,
    update: IColalaborator
  ): Promise<void> =>
    await updateCollaboratorDetails(api, collaboratorId, update);

  deleteCollaborator = async (
    api: AxiosInstance,
    collaboratorId: string
  ): Promise<void> => await deleteCollaboratorId(api, collaboratorId);
}
