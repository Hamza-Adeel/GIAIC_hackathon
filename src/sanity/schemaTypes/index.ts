import { type SchemaTypeDefinition } from 'sanity'
import { chefsSchema } from './chefs'
import { foodSchema } from './foods'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [chefsSchema, foodSchema],
}
