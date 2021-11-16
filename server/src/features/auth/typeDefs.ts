const typeDefs = `
    type Users {
      username: String,
      email: String,
      password: String!
    }
  
    type Query {
      getUsers: [Users!]!
      checkUsersById(email: String!, password: String!): [Users!]!
      checkUsersEmail(email: String!): [Users!]!
      getUser(id: ID, email: String!, password: String!): [Users!]!
    }

    type Mutation {
      deleteUsersById(email: String!): [Users!]!
    }

    extend type Mutation {
      signUp(
        username: String!
        email: String!
        password: String!
      ): Token!

      signIn(id: ID, login: String!, password: String!): Token!
    }
 
    type Token {
      token: String!
    }

    schema {
      query: Query
      mutation: Mutation
    }
`;

export default typeDefs;
