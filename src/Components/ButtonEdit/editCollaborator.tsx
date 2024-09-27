import { Loader2Icon, PenSquareIcon } from "lucide-react";
import { isOpenFormStore } from "../../store/FormStore";
import { useGetCollaboratorId } from "../../Hooks/useGetCollaboratorId";
import { CollaboratorStore } from "../../store/collaboratorToForm";

interface IdProps {
  id: string | undefined;
}

export const ButtonEditCollaborator = ({ id }: IdProps) => {
  const { isOpenForm, setIsOpenForm } = isOpenFormStore();
  const { handleCollaboratorById, CollaboratoData, isLoading } =
    useGetCollaboratorId();
  const { setcollaborator } = CollaboratorStore();

  const handleEdit = () => {
    setIsOpenForm(!isOpenForm);
    if (id) {
      handleCollaboratorById(id);
      if (CollaboratoData) {
        setcollaborator(CollaboratoData.collaborator);
        return;
      }
      return;
    }
    console.log("não tem id");
  };

  return (
    <>
      <button
        className="h-10 w-12 rounded-full flex justify-center items-center"
        title="Editar Colaborador"
        onClick={handleEdit}
      >
        {!isLoading ? (
          <PenSquareIcon
            size={18}
            className="text-slate-600 hover:text-blue-600 hover:scale-125 transition-all duration-500"
          />
        ) : (
          <Loader2Icon
            size={18}
            className="text-slate-600 hover:text-blue-600 hover:scale-125 transition-all duration-500"
          />
        )}
      </button>
    </>
  );
};
