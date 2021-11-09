const typeDefs = `
    type Users {
      username: String,
      email: String,
      password: String!
    }
  
    type Query {
      getUsers: [Users!]!
    }

    type Mutation {
      createUsers(username: String!, email: String!, password: String!): [Users!]!
      updateUsersById(username: String!, email: String!, password: String!): [Users!]!
      deleteUsersById(email: String!): [Users!]!
    }
 
    schema {
      query: Query
      mutation: Mutation
    }
`;

export default typeDefs;
