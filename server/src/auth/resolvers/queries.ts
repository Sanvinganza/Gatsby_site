type ResolverFn = (parent: any, args: any, ctx: any, info: any) => Promise<any>;
interface IResolverMap {
  [field: string]: ResolverFn;
}

export default <IResolverMap>{
  getUsers: async (parent, args, { models }, info) => {
    try {
      const users = await models.Users.find();
      return users;
    } catch (error) {
        throw new Error(error.message);
    }
  },
  getUserByEmail: async (parent, args, { models }, info) => {
    try {
      const { email } = args;
      const user = await models.Users.findOne({ email: email});
      return user;
    } catch (error) {
      throw new Error(error.message);
    }
  }
};
