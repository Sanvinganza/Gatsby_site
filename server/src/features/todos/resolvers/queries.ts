// import { IResolverMap } from 'interfaces/IResolvers';
type ResolverFn = (parent: any, args: any, ctx: any, info: any) => Promise<any>;
// import Todos from 'bd/Todos';
import Todos from '../../../bd/Todos.json';
// import * as Todos from '../../../bd/Todos';

interface IResolverMap {
  [field: string]: ResolverFn;
}

export default <IResolverMap>{
  getTodos: async (parent, args, { models }, info) => {
    try {
      const todos = await models.Todos.find();
      // const todos = Todos;
      // console.log('GetTodos done', todos)
      return todos;
    } catch (error) {}
  },
};
