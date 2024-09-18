import clsx from "clsx";
import { useFormValidation } from "../../Hooks/useformValidation";
import { positions, theaderItemstable } from "../../Model/collaboratorModel";
import { isOpenFormStore } from "../../store/FormStore";
import { useEffect } from "react";
import { CollaboratorStore } from "../../store/collaboratorToForm";

export interface ItheaderItemstable {
  nome: string;
  position: string;
  admission: string;
  phone: string;
}

export const FormCollaborator = () => {
  const { collaborator } = CollaboratorStore();
  const { isOpenForm, setIsOpenForm } = isOpenFormStore();
  const {
    handleSubmit,
    isError,
    isLoading,
    isSuccess,
    errors,
    watch,
    reset,
    register,
  } = useFormValidation();

  const name = watch("name");
  const position = watch("position");
  const phone = watch("phone");
  const admission = watch("admission");

  useEffect(() => {
    const handleCloseModal = () => {
      if (isSuccess) {
        setIsOpenForm(false);
      }
    };
    handleCloseModal();
  }, [isSuccess, isOpenForm]);

  useEffect(() => {
    console.log(collaborator);
    if (collaborator) {
      const { name, position, admission, phone } = collaborator as any;
      if (!name || !position || !admission || !phone) {
        console.log("Tem coisa aqui , Preparado Para Atualizar")
        return;
      }
      reset({
        name,
        admission,
        position,
        phone,
      });
    }
  }, [collaborator]);

  const handleChoseSubmit = () => {
    if (!collaborator) {
      handleSubmit;
      return;
    }
  };

  return (
    <form
      onSubmit={handleChoseSubmit}
      className={clsx(
        "z-50 fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg w-[50%] px-8 flex flex-col pt-8 h-[400px]",
        { flex: isOpenForm === true },
        { hidden: isOpenForm === false }
      )}
    >
      <legend className="flex items-center justify-center text-cyan-900 font-bold">
        Adicionar Novo Collaborador
      </legend>
      {theaderItemstable.map((items, index) => (
        <fieldset key={index} className="flex flex-col py-2 gap-4">
          <input
            type="text"
            value={name || ""}
            placeholder={items.nome}
            {...register("name")}
            className={clsx("px-4 py-2 border-2 border-slate-800 rounded-md", {
              "bg-red-100 rounded-md px-2 text-red-500": errors.name,
            })}
          />

          <datalist id="positionList" {...register("position")}>
            {positions.map((position, index) => (
              <option value={position} key={index} />
            ))}
          </datalist>

          <input
            list="positionList"
            type="text"
            value={position || ""}
            placeholder={items.position}
            {...register("position")}
            className={clsx("px-4 py-2 border-2 border-slate-800 rounded-md", {
              "bg-red-100 rounded-md px-2 text-red-500": errors.position,
            })}
          />

          <input
            type="date"
            value={admission || ""}
            placeholder={items.admission}
            {...register("admission")}
            className={clsx("px-4 py-2 border-2 border-slate-800 rounded-md", {
              "bg-red-100 rounded-md px-2 text-red-500": errors.admission,
            })}
          />

          <input
            type="text"
            value={phone || ""}
            placeholder={items.phone}
            {...register("phone")}
            className={clsx("px-4 py-2 border-2 border-slate-800 rounded-md", {
              "bg-red-100 rounded-md px-2 text-red-500": errors.phone,
            })}
          />
        </fieldset>
      ))}
      <div className="w-full flex gap-2 justify-end my-4">
        <button className="w-32 bg-green-600 text-white py-2 rounded-lg">
          {isLoading ? "Caregando..." : "Cadastrar"}
        </button>

        <div
          className="w-32 flex justify-center items-center border-2 bg-red-100 border-red-600  text-red-600 py-2 rounded-lg cursor-pointer"
          onClick={() => setIsOpenForm(!isOpenForm)}
        >
          Cancelar
        </div>
      </div>
      {isError && <span>Falha ao Cadastrar</span>}
    </form>
  );
};
