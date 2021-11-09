type ResolverFn = (parent: any, args: any, ctx: any, info: any) => Promise<any>;
interface IResolverMap {
    [field: string]: ResolverFn;
  }
  
export default <IResolverMap>{
  createUsers: async (parent, args, { models }) => {
    const { email, password, name } = args;
    try {
      await models
        .Users({
          email,
          password,
          name
        })
        .save();

      const response = await models.Todos.find();
      return response;
    } catch (error) {
      throw new Error(error.message);
    }
  }
};
