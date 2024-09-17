import { useDeleteCollaborator } from "../../Hooks/useDelete";
import { useGetEmployerList } from "../../Hooks/useGetEmployer";
import { theaderItemstable } from "../../Model/collaboratorModel";

const CollaboratorTable = () => {
  const { data } = useGetEmployerList();
  const { deleteMutation } = useDeleteCollaborator();

  const handleDelete = (id: string, name: string) => {
    console.log(id);
    const confirmeDelete = confirm(`Deletar ${name} ??`);
    if (confirmeDelete) {
      deleteMutation.mutate(id);
      return;
    }
  };

  return (
    <section className="deployers-table">
      <table>
        <thead>
          {theaderItemstable.map(
            ({ avatar, nome, position, admission, phone, action }, index) => (
              <tr key={index}>
                <th>{avatar}</th>
                <th>{nome}</th>
                <th>{position}</th>
                <th>{admission}</th>
                <th>{phone}</th>
                <th>{action}</th>
              </tr>
            )
          )}
        </thead>
        <tbody>
          {data?.map((items, index) => (
            <tr key={index}>
              <td>
                <figure>
                  <img src={items.avatar} alt={items.name} />
                </figure>
              </td>
              <td>{items._id}</td>
              <td>{items.name}</td>
              <td>{items.position}</td>
              <td>{items.admission}</td>
              <td>{items.phone}</td>
              <td>
                <button
                  onClick={() => handleDelete(items._id as string, items.name)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default CollaboratorTable;
