import { type SchemaTypeDefinition } from 'sanity';
import post from '../schemas/documents/post';
import blockContent from '../schemas/objects/blockContent';
import seo from '../schemas/objects/seo';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [post, blockContent, seo],
};
