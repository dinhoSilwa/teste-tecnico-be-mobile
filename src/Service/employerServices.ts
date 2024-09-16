import type { AxiosInstance } from "axios";
import { getAllEmployerList } from "./methods/get";
import { addNewEmployer } from "./methods/post";
import type { IColalaborator } from "../types/Employers/collabotarorType";

export class CollaboratorServices {
  getAllcollaborator = async (api: AxiosInstance): Promise<void> => {
    await getAllEmployerList(api);
  };

  createEmployer = async (
    api: AxiosInstance,
    CollaboratorData: IColalaborator
  ): Promise<void> => await addNewEmployer(api, CollaboratorData);
}
