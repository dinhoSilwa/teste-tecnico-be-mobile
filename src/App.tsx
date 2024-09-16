import "./App.css";
import { FormEmployer } from "./Components/Form/addCollaborator";
import CollaboratorTable from "./Components/Table/collaboratorTable";

function App() {
  return (
    <>
      <section>
        <FormEmployer />
        <CollaboratorTable/>
      </section>
    </>
  );
}

export default App;
