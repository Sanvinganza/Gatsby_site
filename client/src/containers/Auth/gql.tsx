import gql from 'graphql-tag';

export const CREATE_USERS = gql`
  mutation CreateUsers($username: String!, $email: String!, $password: String!) {
    createUsers(username: $username, email: $email, password: $password) {
      username
      email
      password
    }
  }
`;

export const GET_USERS = gql`
  query {
    getUsers {
      username
      email
      password
    }
  }
`;

export const CHECK_USERS = gql`
  query CheckUsersById($email: String!) {
    checkUsersById(email: $email) {
      username
      email
      password
    }
  }
`;
