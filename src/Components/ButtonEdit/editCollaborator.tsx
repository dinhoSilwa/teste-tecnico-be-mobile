import { PenSquareIcon } from "lucide-react";
import { isOpenFormStore } from "../../store/FormStore";
import { useGetCollaboratorId } from "../../Hooks/useGetCollaboratorId";
import { CollaboratorStore } from "../../store/collaboratorToForm";

interface IdProps {
  id: string | undefined;
}

export const ButtonEditCollaborator = ({ id }: IdProps) => {
  const { isOpenForm, setIsOpenForm } = isOpenFormStore();
  const { handleCollaboratorById, CollaboratoData } = useGetCollaboratorId();
  const { setcollaborator } = CollaboratorStore();

  const handleEdit = (id: string) => {
    handleCollaboratorById(id);
    setIsOpenForm(!isOpenForm);
    const collaboratorGet = CollaboratoData?.collaborator;
    if (collaboratorGet) {
      setcollaborator(collaboratorGet);
    }
  };

  return (
    <>
      <button
        className="h-10 w-12 rounded-full flex justify-center items-center"
        title="Editar Colaborador"
        onClick={() => handleEdit(id)}
      >
        <PenSquareIcon
          size={18}
          className="text-slate-600 hover:text-blue-600 hover:scale-125 transition-all duration-500"
        />
      </button>
    </>
  );
};
