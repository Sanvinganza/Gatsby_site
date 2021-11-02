import { IResolverMap } from "interfaces/IResolvers";
import Todo from "../db/TodoDb";

export default <IResolverMap>{
  createTodos: async (parent, args, { models }) => {
    const { task, checked } = args;
    
    try {
Todo.push({
  id: Todo.length,
  task: task,
  checked: checked
})
      const response = Todo;

      return response;
    } catch (error) {
      throw new Error(error.message);
    }
  },
  updateTodosById: async (parent, args, { models }) => {
    const { id, task, checked } = args;

    try {
      const index = Todo.findIndex(n => n.id == id);
      if (index !== -1) {
        Todo[id].task = task;
        Todo[id].checked = checked;
      }

      return Todo;
    } catch (error) {
      throw new Error(error.message);
    }
  },
  deleteTodoById: async (parent, args, { models }) => {
    const { id } = args;
    const index = Todo.findIndex(n => n.id == id);
if (index !== -1) {
  Todo.splice(index, 1);
}
Todo.map((e: any, index: any)=>{
  return e.id = index;
})
    try {
      const todos = Todo;
      return todos;
    } catch (error) {
      throw new Error(error.message);
    }
  }
  
};
