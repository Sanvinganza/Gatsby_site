const typeDefs = `
    type Users {
      login: String!
      name: String!
      password: String!
    }
  
    type Query {
      getUsers: [Users!]!
    }

    type Mutation {
      createUser(login: String!, name: String!, password: String! ): [Users!] 
    }
 
    schema {
      query: Query
      mutation: Mutation
    }
`;

export default typeDefs;
