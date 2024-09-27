import { PlusSquare, SearchIcon } from "lucide-react";
import { isOpenFormStore } from "../../store/FormStore";
import type React from "react";
import { SearchStore } from "../../store/SearchStore";

export const SearchBar = () => {
  const { isOpenForm, setIsOpenForm } = isOpenFormStore();
  const { setTextForSearch } = SearchStore();

  const handleSearch = (value: string) => {
    setTextForSearch(value);
  };

  return (
    <section className="h-28 flex items-center justify-between px-12 mb-8">
      <h2 className="text-2xl font-bold text-slate-800">Colaboradores</h2>{" "}
      <fieldset className="flex items-center">
        <input
          type="text"
          id="searachCollaborators"
          className="ring rounded-md h-8 w-96 text-xl px-2 font-bold"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            handleSearch(e.target.value)
          }
        />
        <label
          htmlFor="searachCollaborators"
          className="-translate-x-8 text-blue-900"
        >
          <SearchIcon />
        </label>

        <button
          type="button"
          className="flex items-center justify-center gap-2 w-40 bg-green-600 text-white px-2 py-3 rounded-xl text-md font-bold"
          onClick={() => setIsOpenForm(!isOpenForm)}
        >
          <PlusSquare /> Adicionar
        </button>
      </fieldset>
    </section>
  );
};
