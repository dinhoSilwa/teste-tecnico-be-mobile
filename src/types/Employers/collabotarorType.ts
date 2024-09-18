import type { AxiosInstance } from "axios";

export interface ICollaborator {
  _id?: string;
  name: string;
  position: string;
  admission: string;
  phone: string;
}

export interface UpdateProps {
  api: AxiosInstance;
  collaboratorId: string;
  update: ICollaborator;
}