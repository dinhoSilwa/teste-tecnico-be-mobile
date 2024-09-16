import { useFormValidation } from "../../Hooks/useformValidation";
import { theaderItemstable } from "../../Model/collaboratorModel";

export interface ItheaderItemstable {
  avatar: string;
  nome: string;
  position: string;
  admission: string;
  phone: string;
  action: any;
}
export const FormEmployer = () => {
  const { handleSubmit, watch, isError, isLoading, errors, register } =
    useFormValidation();

  const name = watch("name");
  const avatar = watch("avatar");
  const position = watch("position");
  const phone = watch("phone");
  const admission = watch("admission");
  return (
    <form onSubmit={handleSubmit}>
      {theaderItemstable.map((items, index) => (
        <fieldset key={index}>
          <label htmlFor={items.avatar}>{items.avatar}</label>
          <input
            type="text"
            id={items.avatar}
            {...register("avatar")}
            value={avatar || ""}
          />
          {errors.avatar && <span>{errors.avatar.message}</span>}

          <label htmlFor={items.nome}>{items.nome}</label>
          <input
            type="text"
            id={items.nome}
            {...register("name")}
            value={name || ""}
          />

          {errors.name && <span>{errors.name.message}</span>}

          <label htmlFor={items.position}>{items.position}</label>
          <input
            type="text"
            id={items.position}
            {...register("position")}
            value={position || ""}
          />
          {errors.position && <span>{errors.position.message}</span>}

          <label htmlFor={items.admission}>{items.admission}</label>
          <input
            type="text"
            id={items.admission}
            {...register("admission")}
            value={admission || ""}
          />
          {errors.admission && <span>{errors.admission.message}</span>}

          <label htmlFor={items.phone}>{items.phone}</label>
          <input
            type="text"
            id={items.phone}
            {...register("phone")}
            value={phone || ""}
          />
          {errors.phone && <span>{errors.phone.message}</span>}
        </fieldset>
      ))}
      <button>{isLoading ? "Caregando..." : "Cadastrar"}</button>
      {isError && <span>Falha ao Cadastrar</span>}
    </form>
  );
};
