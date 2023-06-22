import { gql } from "@apollo/client";

export const Form = gql`
  mutation NewInformation($input: InformationInput) {
    newInformation(input: $input) {
      birthday
      lastname
      name
      email
      servicesProduct
      mount
    }
  }
`;
