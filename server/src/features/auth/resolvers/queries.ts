import { IResolverMap } from 'interfaces/IResolvers';

export default <IResolverMap>{
  getUsers: async (parent, args, { models }, info) => {
    try {
      const users = await models.Users.find();
      return users;
    } catch (error) { }
  },
  checkUsersEmail: async (parent, args, { models }, info) => {
    try {
     
      const { email } = args;
      const user = await models.Users.find({email: email});
      return user;
    } catch (error) { }
  },

  getUser: async (parent, args, { models }) => {
    try {
      const { email, password } = args;
      const user = await models.Users.findOne({ email : email, password: password});
      
      return user;
    } catch (error) {}
  },
  
checkUsersById: async (parent, args, { models }, info) => {
  try {
    const { email, password } = args;
    const user = await models.Users.find({email: email, password: password});
    if(user.length !== 0){
    return user}else
    {return false}
  } catch (error) { }
}}