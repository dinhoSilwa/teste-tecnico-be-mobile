import { Loader2Icon, PenSquareIcon } from "lucide-react";
import { useGetCollaboratorId } from "../../Hooks/useGetCollaboratorId";

interface IdProps {
  id: string | undefined;
}

export const ButtonEditCollaborator = ({ id }: IdProps) => {

  const { handleCollaboratorById, isLoading } = useGetCollaboratorId();

  if(!id) return null


  return (
    <>
      <button
        className="h-10 w-12 rounded-full flex justify-center items-center"
        title="Editar Colaborador"
        onClick={()=>handleCollaboratorById(id)}
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
