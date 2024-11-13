import { FormCollaborator } from "../Components/Form/addCollaborator";
import { SuperBar } from "../Components/Header/bar/superBar";
import { SearchBar } from "../Components/SearchBar/searchBars";
import CollaboratorTable from "../Components/Table/collaboratorTable";
import { ModalForm } from "../Components/Modal/modal";
import { FormModalStore } from "../store/modalType";

export const Home = () => {
  const { formTypeModal } = FormModalStore();
  const toggleForms = formTypeModal["add"] ? "add" : "edit";

  return (
    <>
      <section>
   
        {formTypeModal[toggleForms] && (
          <ModalForm children={<FormCollaborator />} />
        )}
        <SuperBar />
        <SearchBar />
        <CollaboratorTable />
      </section>
    </>
  );
};
