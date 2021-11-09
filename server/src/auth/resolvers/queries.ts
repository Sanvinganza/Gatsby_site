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
};
