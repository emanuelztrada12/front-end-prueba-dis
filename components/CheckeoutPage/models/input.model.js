import { useMutation } from "@apollo/client";
import { Form } from "./query_graphql.model";

export default function modelForm() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [newInformation] = useMutation(Form);
    const inputValues = async (values) => {
        let years = new Date(new Date() - new Date(values.date_form)).getFullYear() - 1970;
        let year = years.toString();
        let total = parseFloat(values.mount);
        console.log(total)
        let sum = total;

        const { data } = await newInformation({
            variables: {
                input: {
                    name: values.name_form,
                    lastname: values.lastname_form,
                    email: values.email_form,
                    birthday: year,
                    servicesProduct: values.servicesProduct,
                    mount: sum
                },
            },
        });
        console.log(data); 
    }

    return inputValues;
}
