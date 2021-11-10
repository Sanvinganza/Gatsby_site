const typeDefs = `
    type Users {
      id: ID!
      login: String!
      name: String!
      password: String!
    }
  
    type Query {
      getUsers: [Users!]!
      getUser(login: String!, password: String! ): [Users!]!
    }

    type Mutation {
      updateUser(id: String, login: String, name: String, password: String ): [Users!]
      createUser(login: String!, name: String!, password: String! ): [Users!] 
      deleteUserById(id: String!): [Users!]
    }
 
    schema {
      query: Query
      mutation: Mutation
    }
`;

export default typeDefs;
