import { create } from "zustand";
interface isOpenFormStoreProps {
  isOpenForm: boolean;
  setIsOpenForm: (isOpenForm: boolean) => void;
}
export const isOpenFormStore = create<isOpenFormStoreProps>()((set) => ({
  isOpenForm: false,
  setIsOpenForm: () => set((state) => ({ isOpenForm: !state.isOpenForm })),
}));
