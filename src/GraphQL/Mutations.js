import { gql } from "@apollo/client";

export const CREATE_USER_MUTATION = gql`
  mutation Dog($name: String!) {
    createDog(name: $name) {
      id
    }
  }
`;

// import { gql } from "@apollo/client";

// export const CREATE_USER_MUTATION = gql`
//   mutation createUser(
//     $firstName: String!
//     $lastName: String!
//     $email: String!
//     $password: String
//   ) {
//     createUser(
//       firstName: $firstName
//       lastName: $lastName
//       email: $email
//       password: $password
//     ) {
//       id
//     }
//   }
// `;
