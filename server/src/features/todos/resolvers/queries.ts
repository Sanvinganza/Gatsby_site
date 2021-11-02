import { IResolverMap } from 'interfaces/IResolvers';
import Todo from "../db/TodoDb";
export default <IResolverMap>{
  
  getTodos: async (parent, args, models, info) => {
    try {
     // const todos = await models.Todos.find();
      const todos = Todo;
      return todos;
    } catch (error) {}
  },
};
