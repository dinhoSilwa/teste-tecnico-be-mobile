import { create } from "zustand";
import type { ICollaborator } from "../types/Employers/collabotarorType";

interface storeProps {
  collaborator: ICollaborator
  setcollaborator: (collaborator: ICollaborator) => void;
  clear: () => void;
}

export const CollaboratorStore = create<storeProps>()((set) => ({
  collaborator: { name: '', admission: '', position: '', phone: '' }, // Inicialização com objeto vazio
  setcollaborator: (Newcollaborator: ICollaborator) => set({ collaborator: Newcollaborator }),
  clear: () => set({ collaborator: { name: '', admission: '', position: '', phone: '' } }), // Limpar para objeto vazio
}));

