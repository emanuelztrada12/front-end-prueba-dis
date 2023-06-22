import * as yup from "yup";
import generalFormModel from "./generalFormModel";

const {
  formField: { name_form, lastname_form, email_form, date_form },
} = generalFormModel;

export default [
  yup.object().shape({
    [name_form.name]: yup.string().required(`${name_form.requiredErrorMsg}`),

   [lastname_form.name]: yup.string().required(`${name_form.requiredErrorMsg}`),

    [email_form.name]: yup
      .string()
      .email("El email no es correcto")
      .required(`${email_form.requiredErrorMsg}`),
  }),
];
