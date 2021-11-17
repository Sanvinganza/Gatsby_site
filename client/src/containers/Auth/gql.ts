import gql from 'graphql-tag';

export const GET_USERS = gql`
  query {
    getUsers {
      email
      password
      name
    }
  }
`;

export const GET_USER_BY_EMAIL = gql`
  query getUserByEmail($email: String!) {
    getUserByEmail(email: $email) {
      email
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
