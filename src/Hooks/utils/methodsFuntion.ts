import { CollaboratorServices } from "../../Service/employerServices";
import type { ICollaboratorResponse } from "../../Service/methods/get";
import { useHttp } from "../../Service/useHttp";
import type { ICollaborator } from "../../types/Employers/collabotarorType";

export const fetchAllCollaborators = async (): Promise<
  ICollaborator[] | any
> => {
  const api = useHttp();
  const getList = new CollaboratorServices();
  const response: ICollaboratorResponse = await getList.AllCollaborators(api);
  return response;
};

export const addEmployer = async (
  CollaboratorData: ICollaborator
): Promise<void> => {
  const api = useHttp();
  const service = new CollaboratorServices();
  await service.createCollabotaror(api, CollaboratorData);
};

export const getByIdAndUpdate = async (
  id: string,
  update: ICollaborator
): Promise<any> => {
  const api = useHttp();
  const updateCollaborator = new CollaboratorServices();
  await updateCollaborator.updateCollaboratorById(api, id, update);
  return;
};

export const deleteCollaborator = async (
  collaboratorId: string
): Promise<void> => {
  const api = useHttp();
  const deleteColl = new CollaboratorServices();
  await deleteColl.deleteCollaborator(api, collaboratorId);
};
