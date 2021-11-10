import { IResolverMap } from "interfaces/IResolvers";

export default <IResolverMap>{
  
  createUsers: async (parent, args, { models }) => {
    const { username, email, password } = args;

    try {
      await models
        .Users({
          username,
          email,
          password
        })
        .save();

      const response = await models.Users.find();

      return response;
    } catch (error) {
      throw new Error(error.message);
    } 
  },
 
  deleteUsersById: async (parent, args, { models }) => {
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