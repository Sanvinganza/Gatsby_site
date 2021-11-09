type ResolverFn = (parent: any, args: any, ctx: any, info: any) => Promise<any>;

interface IResolverMap {
  [field: string]: ResolverFn;
}

export default <IResolverMap>{
  getTodos: async (parent, args, { models }, info) => {
    try {
      const todos = await models.Todos.find();
      return todos;
    } catch (error) {}
  },
};
