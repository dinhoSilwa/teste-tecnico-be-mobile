import { create } from "zustand";

interface SearchProps {
  textForSearch: string;
  setTextForSearch: (newTerm: string) => void; 
}


export const SearchStore = create<SearchProps>((set) => ({
  textForSearch: "", 
  setTextForSearch: (newTerm: string) => set({ textForSearch: newTerm }), 
}));
