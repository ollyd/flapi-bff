import { makeExecutableSchema } from 'graphql-tools';

const typeDefs = `
  type Photos {
    title: String
    link: String
    description: String
    modified: String
    items: [PhotoType]
  }

  type PhotoType {
    title: String
    media: ImageType
    date_taken: String
    author: String
    author_id: String
    tags: String
    link: String
  }

  type ImageType {
    m: String
  }

  type Query {
    getPhotos(tags: String): Photos
  }
`;

const resolvers = {
  Query: {
    getPhotos: async (root, data, { dataSources }) => {
      const result = await dataSources.flickrAPI.getPhotos(data);
      return result;
    },
  },
};

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

export default schema;