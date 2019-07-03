import { ApolloServer } from 'apollo-server-express';
import schema from './schemas/schema';
import { FlickrAPI } from './rest/api';

const apolloServer = new ApolloServer({
  schema,
  dataSources: () => ({
    flickrAPI: new FlickrAPI(),
  }),
});

export default apolloServer;