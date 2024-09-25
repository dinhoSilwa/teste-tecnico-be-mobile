import clsx from "clsx";
import { FormCollaborator } from "../Components/Form/addCollaborator";
import { SuperBar } from "../Components/Header/bar/superBar";
import { SearchBar } from "../Components/SearchBar/searchBars";
import CollaboratorTable from "../Components/Table/collaboratorTable";
import { isOpenFormStore } from "../store/FormStore";

export const Home = () => {
  const { isOpenForm } = isOpenFormStore();

  return (
    <>
      <section>
        <SuperBar />
        <SearchBar />
        <section
          className={clsx(
            "z-40 background h-screen w-screen  inset-0 bg-slate-800/50 backdrop-blur-sm fixed top-0 left-0",
            { hidden: isOpenForm === false }
          )}
        ></section>
        <FormCollaborator />
        <CollaboratorTable />
      </section>
    </>
  );
};
