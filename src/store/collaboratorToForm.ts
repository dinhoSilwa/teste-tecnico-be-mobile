import { create } from "zustand";
import type { collaboratorProps } from "../Service/employerServices";

interface storeProps {
  collaborator: collaboratorProps | any;
  setcollaborator: (collaborator: collaboratorProps) => void;
  clear: () => void;
}

export const CollaboratorStore = create<storeProps>()((set) => ({
  collaborator: [],
  setcollaborator: (Newcollaborator: collaboratorProps) =>
    set({ collaborator: Newcollaborator }),
  clear: () => set({ collaborator: [] }),
}));
