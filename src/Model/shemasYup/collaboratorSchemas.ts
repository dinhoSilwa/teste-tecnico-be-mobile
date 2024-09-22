import * as yup from "yup";

export const collaboratorSchema = yup.object().shape({
  _id: yup.string(),
  //avatar: yup.string(),
  name: yup.string().required("O nome é Obrigatorio"),
  position: yup.string().required("O position é obigatório"),
  admission: yup
    .string().required("A data de admissão é obrigatória"),
  phone: yup.string().required("Digite o número de Telefone"),
});
