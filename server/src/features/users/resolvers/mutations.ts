import { IResolverMap } from "interfaces/IResolvers";

export default <IResolverMap>{
  createUser: async (parent, args, { models }) => {
    const { login, name, password } = args;

    try {
        await models
        .Users({
            login,
            name,
            password
        })
        .save();

      const response = await models.Users.find();

      return response;
    } catch (error) {
      throw new Error(error.message);
    }
  },
};