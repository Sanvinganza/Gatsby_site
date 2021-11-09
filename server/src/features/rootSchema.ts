import { mergeSchemas } from 'graphql-tools';
import todosSchema from './todos/schema';
import usersSchema from '../auth/schema';

export default mergeSchemas({
  schemas: [
    todosSchema,
    usersSchema
    /* CODE-GENERATOR - ROOTSCEHMA DEFAULT */
  ],
});
