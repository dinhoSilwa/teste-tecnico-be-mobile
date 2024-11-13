import { PenSquare, Trash2 } from "lucide-react";

interface ITheadTd {
  tdString?: string;
}

interface IBodyTd {
  tdString: string | React.ReactElement;
  isLoading : boolean;
}



export const TheadTd = ({ tdString, ...props }: ITheadTd) => {
  return (
    <th className={`flex-1 text-center flex justify-center `} {...props}>

      {tdString}
    </th>
  );
};

export const TBodyTd = ({ tdString, isLoading, ...props }: IBodyTd) => {
  return (
    <td className={`flex-1 text-center flex justify-center ${isLoading && 'animate-pulse bg-gray-200'}`} {...props}>
      {tdString}
    </td>
  );
};

export const TBodyTdIcon = () => {
  return (
    <section className="flex-1 text-center flex justify-center ">
      <button
        className="h-10 w-12 rounded-full flex justify-center items-center"
        title="Editar Colaborador"
      >
        <PenSquare size={18} className="text-slate-600 hover:text-cyan-600 " />
      </button>
      <button
        className="h-10 w-12 rounded-full flex justify-center items-center"
        title="Deletar Colaborador"
      >
        <Trash2 size={18} className="text-slate-600 hover:text-red-500" />
      </button>
    </section>
  );
};
