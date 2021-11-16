import { IResolverMap } from "interfaces/IResolvers";
import jwt from 'jsonwebtoken';
import { AuthenticationError, UserInputError } from 'apollo-server';


const createToken = async (user: any, secret: any, expiresIn: any) => {
  const { id, email, username } = user;
  return await jwt.sign({ id, email, username }, secret, {
    expiresIn,
  });
};

export default <IResolverMap>{
  
  signUp: async (
  parent,
  { username, email, password },
  { models, secret },
) => {
  const user = await models.Users.create({
    username,
    email,
    password,
  });

  return { token: createToken(user, secret, '30m') };
},
signIn: async (
  parent,
  { login, password },
  { models, secret },
) => {
  const user = await models.Users.findByLogin(login);

  if (!user) {
    throw new UserInputError(
      'No user found with this login credentials.',
    );
  }
   
  if(password!==user.password){
      throw new AuthenticationError('Invalid password.');
    }

  return { token: createToken(user, secret, '30m') };
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