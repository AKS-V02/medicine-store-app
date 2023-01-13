// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Medicine } = initSchema(schema);

export {
  Medicine
};