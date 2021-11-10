import { IResolverMap } from 'interfaces/IResolvers';

export default <IResolverMap>{
  getUsers: async (parent, args, { models }, info) => {
    try {
      const users = await models.Users.find();
      return users;
    } catch (error) { }
  },
  checkUsersById: async (parent, args, { models }, info) => {
    try {
      const { email } = args;
      const user = await models.Users.find({email: email});
      return user;
    } catch (error) { }
  },
};