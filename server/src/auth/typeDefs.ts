const typeDefs = `
    type Users {
      id: ID!
      email: String!
      name: String!
      password: String!
    }
  
    type Query {
      getUsers: [Users!]!
      getUserByEmail(email: String!): Users!
    }

    type Mutation {
      createUser(email: String!, name: String!, password: String!): [Users!]!
    }
`;

export default typeDefs;
