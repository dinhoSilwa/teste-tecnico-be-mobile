//import { useDeleteCollaborator } from "../../Hooks/useDelete";
import { useGetEmployerList } from "../../Hooks/useGetEmployer";
import { theaderItemstable } from "../../Model/collaboratorModel";
import Avatar from "@mui/material/Avatar";
import { TBodyTd, TheadTd } from "./TablesTD/thead";
import { DeleteCollaborator } from "../ButtonDelete/deleteCollaborator";
import { ButtonEditCollaborator } from "../ButtonEdit/editCollaborator";
import { stringAvatar, stringToColor } from "./TablesTD/utils/avatarIcon";
import toast, { Toaster } from "react-hot-toast";
import { useEffect } from "react";

const CollaboratorTable = () => {
  const { data } = useGetEmployerList();

  useEffect(() => {
    const notify = () => toast("✅Lista Atualizada");
    notify();
  }, [data]);

  return (
    <section className=" deployers-table full flex justify-center h-auto z-0 shadow-xl bg-white">
      <Toaster />
      <table className=" flex flex-col items-center justify-start gap-4 w-full">
        <thead className="w-[80%] h-14 bg-cyan-800 text-white flex items-center rounded-t-xl">
          {theaderItemstable.map(
            ({ nome, position, admission, phone }, index) => (
              <tr key={index} className=" flex justify-around w-full">
                <TheadTd tdString={"avatar"} />
                <TheadTd tdString={nome} />
                <TheadTd tdString={position} />
                <TheadTd tdString={admission} />
                <TheadTd tdString={phone} />
                <TheadTd tdString={"Opçoes"} />
              </tr>
            )
          )}
        </thead>
        {data && data?.length > 0 ? (
          <tbody className="w-[80%] h-[400px] overflow-y-auto text-white flex flex-col items-center elemento">
            {data?.map((items, index) => (
              <tr
                key={index}
                className=" flex justify-around w-full text-gray-800 even:bg-gray-200 items-center py-2"
              >
                <td className="flex-1 text-center flex justify-center">
                  <figure>
                    <Avatar
                      sx={{
                        width: 36,
                        height: 36,
                        fontSize: "1rem",
                        bgcolor: stringToColor(items.name as string),
                      }}
                    >
                      {stringAvatar(items.name as string).children}
                    </Avatar>
                  </figure>
                </td>
                <TBodyTd tdString={items.name} />
                <TBodyTd tdString={items.position} />
                <TBodyTd tdString={items.admission} />
                <TBodyTd tdString={items.phone} />
                <td className="flex-1 flex justify-center">
                  <DeleteCollaborator
                    id={items._id}
                    nameCollaborator={items.name}
                  />

                  <ButtonEditCollaborator id={items._id} />
                </td>
              </tr>
            ))}
          </tbody>
        ) : (
          <tbody>
            <td>Nenhum Colaborador Adicionado...</td>
          </tbody>
        )}
      </table>
    </section>
  );
};

export default CollaboratorTable;
