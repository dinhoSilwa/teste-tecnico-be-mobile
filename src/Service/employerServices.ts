import type { AxiosInstance } from "axios";
import { addNewEmployer } from "./methods/post";
import type { ICollaborator } from "../types/Employers/collabotarorType";
import { updateCollaboratorByIdDetails } from "./methods/put";
import { deleteCollaboratorId } from "./methods/delete";
import {
  collaboratorById,
  getAllCollaborators,
  type ICollaboratorResponse,
} from "./methods/get";

export interface collaboratorProps {
  collaborator : ICollaborator
}

export class CollaboratorServices {
  AllCollaborators = async (
    api: AxiosInstance
  ): Promise<ICollaboratorResponse> => await getAllCollaborators(api);

  getCollaboratorById = async (
    api: AxiosInstance,
    id: string
  ): Promise<collaboratorProps> => await collaboratorById(api, id);

  createCollabotaror = async (
    api: AxiosInstance,
    CollaboratorData: ICollaborator
  ): Promise<void> => await addNewEmployer(api, CollaboratorData);

  updateCollaboratorById = async (
    api: AxiosInstance,
    collaboratorId: string,
    update: ICollaborator
  ): Promise<void> =>
    await updateCollaboratorByIdDetails(api, collaboratorId, update);

  deleteCollaborator = async (
    api: AxiosInstance,
    collaboratorId: string
  ): Promise<void> => await deleteCollaboratorId(api, collaboratorId);
}
