import { create } from "zustand";
import type { collaboratorProps } from "../Service/employerServices";

interface storeProps {
  collaborator: collaboratorProps | null;
  setcollaborator: (collaborator: collaboratorProps) => void;
  clear: () => void;
}

export const CollaboratorStore = create<storeProps>()((set) => ({
  collaborator: null,
  setcollaborator: (Newcollaborator: collaboratorProps) =>
    set({ collaborator: Newcollaborator }),
  clear: () => set({ collaborator: null }),
}));
