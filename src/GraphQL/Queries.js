import { gql } from "@apollo/client";

export const LOAD_DOGS = gql`
  query {
    dogs {
      name
    }
  }
`;
