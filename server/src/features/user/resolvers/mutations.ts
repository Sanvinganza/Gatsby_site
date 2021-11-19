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
    return { token: createToken(user, secret, '30m'), userID: user.id };
  },
};
