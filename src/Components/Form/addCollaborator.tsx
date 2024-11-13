import clsx from "clsx";
import { positions, theaderItemstable } from "../../Model/collaboratorModel";
import { useFormMutation } from "../../Hooks/useformValidation";
import { CollaboratorStore } from "../../store/collaboratorToForm";
import InputMask from "react-input-mask";
import { FormModalStore } from "../../store/modalType";
import { useEffect } from "react";

export const FormCollaborator = () => {
  const { collaborator } = CollaboratorStore();
  const { formTypeModal, formTypeToggle } = FormModalStore();
  const toggleForm = formTypeModal["add"] ? "add" : "edit";

  const {
    handleSubmit,
    isError,
    isLoading,
    errors,
    watch,
    register,
    isSuccess,
  } = useFormMutation(collaborator._id ? "edit" : "add", collaborator?._id);

  const name = watch("name");
  const position = watch("position");
  const phone = watch("phone");
  const admission = watch("admission");

  useEffect(() => {
    if (isSuccess)
      return formTypeModal["add"]
        ? formTypeToggle("add")
        : formTypeToggle("edit");
  }, [isSuccess]);

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className={clsx(
          "fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg w-[50%] px-8 flex flex-col pt-8 h-[400px]"
        )}
      >
        <legend className="flex items-center justify-center text-cyan-900 font-bold">
          {formTypeModal.add
            ? " Adicionar Novo Colaborador"
            : "Editar Colaborador"}
        </legend>
        {theaderItemstable.map((items, index) => (
          <fieldset key={index} className="flex flex-col py-2 gap-4">
            <input
              type="text"
              value={name || ""}
              placeholder={items.nome}
              {...register("name")}
              className={clsx(
                "px-4 py-2 border-2 border-slate-800 rounded-md",
                {
                  "bg-red-100 rounded-md px-2 text-red-500": errors.name,
                }
              )}
              disabled={isLoading}
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
              className={clsx(
                "px-4 py-2 border-2 border-slate-800 rounded-md",
                {
                  "bg-red-100 rounded-md px-2 text-red-500": errors.position,
                }
              )}
              disabled={isLoading}
            />

            <InputMask
              mask="99/99/9999"
              type="text"
              value={admission || ""}
              placeholder={items.admission}
              {...register("admission")}
              disabled={isLoading}
              className={clsx(
                "px-4 py-2 border-2 border-slate-800 rounded-md",
                {
                  "bg-red-100 rounded-md px-2 text-red-500": errors.admission,
                }
              )}
            />

            <InputMask
              mask="(99) 9-9999-9999"
              type="text"
              value={phone || ""}
              placeholder={items.phone}
              {...register("phone")}
              disabled={isLoading}
              className={clsx(
                "px-4 py-2 border-2 border-slate-800 rounded-md",
                {
                  "bg-red-100 rounded-md px-2 text-red-500": errors.phone,
                }
              )}
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
              : formTypeModal["edit"]
              ? "Editar"
              : "Cadastrar"}
          </button>

          <button
            type="button"
            className="w-32 flex justify-center items-center border-2 bg-red-100 border-red-600 text-red-600 py-2 rounded-lg cursor-pointer"
            onClick={() => formTypeToggle(toggleForm)}
          >
            Cancelar
          </button>
        </div>
        {isError && <span className="text-red-600">Falha ao Cadastrar</span>}
      </form>
    </>
  );
};
