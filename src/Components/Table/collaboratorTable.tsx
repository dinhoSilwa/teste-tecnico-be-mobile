import { useGetEmployerList } from "../../Hooks/useGetEmployer";
import { theaderItemstable } from "../../Model/collaboratorModel";

const CollaboratorTable = () => {
  const { data } = useGetEmployerList();

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
              <td>{items.name}</td>
              <td>{items.position}</td>
              <td>{items.admission}</td>
              <td>{items.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default CollaboratorTable;
