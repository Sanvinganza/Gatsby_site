import { IResolverMap } from 'interfaces/IResolvers';

export default <IResolverMap>{
  getUsers: async (parent, args, { models }, info) => {
    try {
      const users = await models.Users.find();
      return users;
    } catch (error) {}
  },
  getUser: async (parent, args, { models }, info) => {
    try {
      const { login, password } = args;
      const user = await models.Users.find({ login : login, password: password});
      return user;
    } catch (error) {}
  },
};