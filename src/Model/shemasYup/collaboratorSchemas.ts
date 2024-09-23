import * as yup from "yup";

export const collaboratorSchema = yup.object().shape({
  _id: yup.string(),
  //avatar: yup.string(),
  name: yup.string().required("O nome é Obrigatorio"),
  position: yup.string().required("O position é obigatório"),
  admission: yup.string().required("A data de admissão é obrigatória"),
  phone: yup
    .string()
    .required("O telefone é obrigatório")
    .matches(
      /^\(\d{2}\) \d{1}-\d{4}-\d{4}$/,
      "Formato de telefone inválido (XX X-XXXX-XXXX)"
    ),
});
