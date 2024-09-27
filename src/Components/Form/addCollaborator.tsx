import clsx from "clsx";
import { positions, theaderItemstable } from "../../Model/collaboratorModel";
import { useFormMutation } from "../../Hooks/useformValidation";
import { CollaboratorStore } from "../../store/collaboratorToForm";
import InputMask from "react-input-mask";
import { isOpenFormStore } from "../../store/FormStore";
import { useEffect } from "react";

export const FormCollaborator = () => {
  const { collaborator, clear } = CollaboratorStore();
  const { isOpenForm, setIsOpenForm } = isOpenFormStore();
  const {
    handleSubmit,
    isError,
    isLoading,
    errors,
    watch,
    register,
    reset,
    isSuccess,
  } = useFormMutation(collaborator._id ? "edit" : "add", collaborator?._id);

  const name = watch("name");
  const position = watch("position");
  const phone = watch("phone");
  const admission = watch("admission");

  useEffect(() => {
    if (!collaborator._id) reset();
    else if (collaborator._id) {
      reset({
        name: collaborator.name,
        admission: collaborator.admission,
        position: collaborator.position,
        phone: collaborator.phone,
      });
    }

    return () => {
      reset();
      clear();
    };
  }, [reset]);
  if (isSuccess) setIsOpenForm(!isOpenForm);

  return (
    <form
      onSubmit={handleSubmit}
      className={clsx(
        "fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg w-[50%] px-8 flex flex-col pt-8 h-[400px]"
      )}
    >
      <legend className="flex items-center justify-center text-cyan-900 font-bold">
        Adicionar Novo Colaborador
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

          <datalist id="positionList">
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

          <InputMask
            mask="99/99/9999"
            type="text"
            value={admission || ""}
            placeholder={items.admission}
            {...register("admission")}
            className={clsx("px-4 py-2 border-2 border-slate-800 rounded-md", {
              "bg-red-100 rounded-md px-2 text-red-500": errors.admission,
            })}
          />

          <InputMask
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
        <button
          type="submit"
          className="w-32 bg-green-600 text-white py-2 rounded-lg"
          disabled={isLoading}
        >
          {isLoading
            ? "Carregando..."
            : collaborator._id
            ? "Editar"
            : "Cadastrar"}
        </button>

        <button
          type="button"
          className="w-32 flex justify-center items-center border-2 bg-red-100 border-red-600 text-red-600 py-2 rounded-lg cursor-pointer"
          onClick={() => setIsOpenForm(!isOpenForm)}
        >
          Cancelar
        </button>
      </div>
      {isError && <span className="text-red-600">Falha ao Cadastrar</span>}
    </form>
  );
};
