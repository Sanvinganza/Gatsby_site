import { mergeSchemas } from 'graphql-tools';
import todosSchema from './todos/schema';
import usersSchema from './users/schema';
/* CODE-GENERATOR - ROOTSCEHMA IMPORT */

export default mergeSchemas({
  schemas: [
    todosSchema,
    usersSchema
    /* CODE-GENERATOR - ROOTSCEHMA DEFAULT */
  ],
});
