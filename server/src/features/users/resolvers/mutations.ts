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
  updateUser: async (parent, args, { models }) => {
    const { id, login, name, password } = args;
    try {
      const user = await models.Users.findById(id);
      await user.set({ login: login, name: name, password: password  });
      await user.save();
      const users = await models.Users.find();
      return users;
    } catch (error) {
      throw new Error(error.message);
    }
  },
  deleteUserById: async (parent, args, { models }) => {
    const { id } = args;

    try {
      await models.Users.deleteOne({ _id: id });
      const users = await models.Users.find();
      return users;
    } catch (error) {
      throw new Error(error.message);
    }
  }
};