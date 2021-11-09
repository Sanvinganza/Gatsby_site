import gql from 'graphql-tag';

export const GET_USERS = gql`
  query {
    getTodos {
      email
      password
      name
    }
  }
`;

export const CREATE_USER = gql`
  mutation CreateUsers($email: String!, $password: String!, $name: String!) {
    createUser(email: $email, password: $password, name: $name) {
      email
      password
      name
    }
  }
`;