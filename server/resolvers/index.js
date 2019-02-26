import path from 'path';
import { fileLoader, mergeResolvers } from 'merge-graphql-schemas';

const resolversArray = fileLoader(path.join(__dirname, "./**/*.resolvers.*"));
const merged = mergeResolvers(resolversArray);
export default merged