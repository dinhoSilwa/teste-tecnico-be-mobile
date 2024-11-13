import { create } from "zustand";
interface FormModalStoreProps {
  formTypeModal: Record<string, boolean>;
  openForm: (formTypeKey: string) => void;
  closeForm: (formTypeKey: string) => void;
  formTypeToggle: (formType: string) => void;
}
export const FormModalStore = create<FormModalStoreProps>()((set) => ({
  formTypeModal: {},
  openForm: (formTypeKey: string) =>
    set((state) => ({
      formTypeModal: { ...state.formTypeModal, [formTypeKey]: true },
    })),
  closeForm: (formTypeKey: string) =>
    set((state) => ({
      formTypeModal: { ...state.formTypeModal, [formTypeKey]: false },
    })),

  formTypeToggle: (formTypeKey: string) =>
    set((state) => ({
      formTypeModal: {
        ...state.formTypeModal,
        [formTypeKey]: !state,
      },
    })),
}));
