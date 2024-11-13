//import { useDeleteCollaborator } from "../../Hooks/useDelete";
import { useGetEmployerList } from "../../Hooks/useGetEmployer";
import { theaderItemstable } from "../../Model/collaboratorModel";
import Avatar from "@mui/material/Avatar";
import { TBodyTd, TheadTd } from "./TablesTD/thead";
import { DeleteCollaborator } from "../ButtonDelete/deleteCollaborator";
import { ButtonEditCollaborator } from "../ButtonEdit/editCollaborator";
import { stringAvatar, stringToColor } from "./TablesTD/utils/avatarIcon";
import toast, { Toaster } from "react-hot-toast";
import { useEffect, useState } from "react";
import { SearchStore } from "../../store/SearchStore";
import { DefaultTR } from "./loading";

const CollaboratorTable = () => {
  const { data, isLoading } = useGetEmployerList();
  const { textForSearch, setTextForSearch } = SearchStore();
  const [collaboratorList, setcollaboratorList] = useState(data);

  useEffect(() => {
    const notify = () => toast("✅Lista Atualizada");
    notify();
    setcollaboratorList(data);
    setTextForSearch("");
  }, [data]);

  useEffect(() => {
    setcollaboratorList(
      data?.filter((items) =>
        items.name
          .toLocaleLowerCase()
          .includes(textForSearch.toLocaleLowerCase())
      )
    );
    if (textForSearch.length <= 0) setcollaboratorList(data);
  }, [textForSearch]);

  return (
    <section className=" deployers-table full flex justify-center h-auto shadow-xl bg-white z-0">
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
        <tbody className="w-[80%] h-[400px] overflow-y-auto text-white flex flex-col items-center elemento">
          {collaboratorList ? (
            collaboratorList.map((items, index) => (
              <tr
                key={index}
                className=" flex justify-around w-full text-gray-800 even:bg-gray-200 items-center py-2"
              >
                <td className="flex-1 text-center flex justify-center">
                  <td className="z-0">
                    <Avatar
                      sx={{
                        width: 36,
                        height: 36,
                        fontSize: "1rem",
                        bgcolor: stringToColor(items.name as string),
                        zIndex: "0",
                      }}
                    >
                      {stringAvatar(items.name as string).children}
                    </Avatar>
                  </td>
                </td>
                <TBodyTd isLoading={isLoading} tdString={items.name} />
                <TBodyTd isLoading={isLoading} tdString={items.position} />
                <TBodyTd isLoading={isLoading} tdString={items.admission} />
                <TBodyTd isLoading={isLoading} tdString={items.phone} />
                <td className="flex-1 flex justify-center">
                  <DeleteCollaborator
                    id={items._id}
                    nameCollaborator={items.name}
                  />

                  <ButtonEditCollaborator id={items._id} />
                </td>
              </tr>
            ))
          ) : (
            <DefaultTR />
          )}
        </tbody>
      </table>
    </section>
  );
};

export default CollaboratorTable;
