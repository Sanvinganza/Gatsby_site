type ResolverFn = (parent: any, args: any, ctx: any, info: any) => Promise<any>;
interface IResolverMap {
  [field: string]: ResolverFn;
}

export default <IResolverMap>{
  createUser: async (_, args, { models }) => {
    const { email, password, name } = args;
    try {
      const emailAllreadyExist = await models.Users.find({
        email
      });

      if (emailAllreadyExist.length !== 0) {
        throw new Error('Email already exist')
      } else {
        await models.Users({ email, password, name }).save();
      }

      const response = await models.Users.find();
      return response;
    } catch (error) {
      throw new Error(error.message);
    }
  }
};
