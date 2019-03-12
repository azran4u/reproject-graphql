import { ApolloServer } from 'apollo-server';
import { environment } from './environment';
import resolvers from './resolvers';
import typeDefs from './schemas';
import mocks from './mocks';

const server = new ApolloServer({
  typeDefs,
  resolvers,  
  // mocks,  
  introspection: environment.apollo.introspection,
  playground: true
  // playground: environment.apollo.playground,  
  // mockEntireSchema: true
});

console.log(environment.apollo.playground);
server.listen(environment.port)
  .then(({ url }) => console.log(`Server ready at ${url}. `));

// if (module.hot) {
//   module.hot.accept();
//   module.hot.dispose(() => server.stop());
// }