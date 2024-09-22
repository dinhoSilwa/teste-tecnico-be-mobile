import { create } from "zustand";
import type { ICollaborator } from "../types/Employers/collabotarorType";

interface storeProps {
  collaborator: ICollaborator | string[];
  setcollaborator: (collaborator: ICollaborator) => void;
  clear: () => void;
}

export const CollaboratorStore = create<storeProps>()((set) => ({
  collaborator: [],
  setcollaborator: (Newcollaborator: ICollaborator) =>
    set({ collaborator: Newcollaborator }),
  clear: () => set({ collaborator: [] }),
}));
