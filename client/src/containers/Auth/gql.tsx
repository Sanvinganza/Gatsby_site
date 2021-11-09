import gql from 'graphql-tag';

export const CREATE_USER = gql`
  mutation CreateUser($login: String!, $name: String!, $password: String!) {
    createUser(login: $login, name: $name, password: $password) {
      login
      name
      password
    }
  }
`;

export const GET_USERS = gql`
  query {
    getUsers {
      login
      name
      password
    }
  }
`;
