import clsx from "clsx";
import { positions, theaderItemstable } from "../../Model/collaboratorModel";
import { isOpenFormStore } from "../../store/FormStore";
import { useEffect } from "react";
import { useFormMutation } from "../../Hooks/useformValidation";
import { CollaboratorStore } from "../../store/collaboratorToForm";
import ReactInputMask from "react-input-mask";
export interface ItheaderItemstable {
  nome: string;
  position: string;
  admission: string;
  phone: string;
}

export const FormCollaborator = () => {
  const { isOpenForm, setIsOpenForm } = isOpenFormStore();
  const { collaborator, clear } = CollaboratorStore();

  const {
    handleSubmit,
    isError,
    isLoading,
    isSuccess,
    errors,
    watch,
    register,
    reset,
  } = useFormMutation("add");

  const name = watch("name");
  const position = watch("position");
  const phone = watch("phone");
  const admission = watch("admission");

  useEffect(() => {
    if (isSuccess) {
      setIsOpenForm(false);
      clear();
      return;
    }

    reset();
  }, [isSuccess]);

  useEffect(() => {
    if (collaborator) {
      console.log("REsolvendo problemas aqui", collaborator);

      if (!name || !admission || !position || !phone) {
        return;
      }

      reset({
        name,
        admission,
        position,
        phone,
      });
    }
    console.log("Faltou");
  }, []);
  return (
    <form
      onSubmit={handleSubmit}
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

          <ReactInputMask
            mask="99/99/9999"
            type="text"
            value={admission || ""}
            placeholder={items.admission}
            {...register("admission")}
            className={clsx("px-4 py-2 border-2 border-slate-800 rounded-md", {
              "bg-red-100 rounded-md px-2 text-red-500": errors.admission,
            })}
          />

          <ReactInputMask
            mask="(99) 9-9999-9999"
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
          onClick={() => {
            setIsOpenForm(!isOpenForm), clear();
          }}
        >
          Cancelar
        </div>
      </div>
      {isError && <span>Falha ao Cadastrar</span>}
    </form>
  );
};
