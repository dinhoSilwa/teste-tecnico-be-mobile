//import { useDeleteCollaborator } from "../../Hooks/useDelete";
import { useGetEmployerList } from "../../Hooks/useGetEmployer";
import { theaderItemstable } from "../../Model/collaboratorModel";
import Avatar from "@mui/material/Avatar";
import { TBodyTd, TheadTd } from "./TablesTD/thead";
import { DeleteCollaborator } from "../ButtonDelete/deleteCollaborator";
import { ButtonEditCollaborator } from "../ButtonEdit/editCollaborator";

const CollaboratorTable = () => {
  const { data } = useGetEmployerList();
  function stringToColor(string: string) {
    let hash = 0;
    let i;

    /* eslint-disable no-bitwise */
    for (i = 0; i < string.length; i += 1) {
      hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }

    let color = "#";

    for (i = 0; i < 3; i += 1) {
      const value = (hash >> (i * 8)) & 0xff;
      color += `00${value.toString(16)}`.substr(-2);
    }
    /* eslint-enable no-bitwise */

    return color;
  }

  function stringAvatar(name: string) {
    const nameParts = name.split(" ");

    return {
      sx: {
        bgcolor: stringToColor(name),
      },
      children:
        nameParts.length > 1
          ? `${nameParts[0][0]}${nameParts[1][0]}`
          : `${nameParts[0][0]}`, // Caso haja apenas um nome
    };
  }

  return (
    <section className=" deployers-table full flex justify-center h-auto z-0 shadow-xl bg-white">
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
              <div className="flex-1 flex justify-center">
                <DeleteCollaborator
                  id={items._id}
                  nameCollaborator={items.name}
                />

                <ButtonEditCollaborator id={items._id} />
              </div>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default CollaboratorTable;
