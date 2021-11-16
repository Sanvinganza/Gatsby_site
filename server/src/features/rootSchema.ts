import { mergeSchemas } from 'graphql-tools';
import todosSchema from './todos/schema';
import UsersSchema from './auth/schema';
/* CODE-GENERATOR - ROOTSCEHMA IMPORT */

export default mergeSchemas({
  schemas: [
    todosSchema,
    UsersSchema,
    /* CODE-GENERATOR - ROOTSCEHMA DEFAULT */
  ],
});
