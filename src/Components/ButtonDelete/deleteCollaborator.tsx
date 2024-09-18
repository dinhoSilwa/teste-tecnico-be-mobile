import { Trash2Icon } from "lucide-react";
import { useDeleteCollaborator } from "../../Hooks/useDelete";

interface IIdProps {
  id: string | any;
  nameCollaborator: string;
}

export const DeleteCollaborator = ({ id, nameCollaborator }: IIdProps) => {
  const { deleteMutation } = useDeleteCollaborator();

  const handleDeleteCollaborator = (id: string, nameCollaborator: string) => {
    const isConfimerd = confirm(`Deletar colaborador ${nameCollaborator} ?`);

    if (isConfimerd) {
      deleteMutation.mutate(id);
      return;
    }
  };
  return (
    <>
      <button
        className="h-10 w-12 rounded-full flex justify-center items-center"
        title="Editar Colaborador"
        onClick={() => handleDeleteCollaborator(id, nameCollaborator)}
      >
        <Trash2Icon size={18} className="text-slate-600 hover:text-red-600 hover:scale-125 transition-all duration-500" />
      </button>
    </>
  );
};
