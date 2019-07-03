import { RESTDataSource } from 'apollo-datasource-rest';
import { ApolloError } from 'apollo-server-express';

const sendError = (err) => {
  throw new ApolloError(err);
}

const apiRequest = async (api) => {
  try {
    const data = await api;
    return data;
  } catch (error) {
    if (error.extensions) {
      return sendError(error.extensions.response.body.error.message);
    }
    return sendError(error);
  }
}

export class FlickrAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://www.flickr.com/services/feeds/photos_public.gne';
  }

  getPhotos(data) {
    apiRequest(this.get('/', {
      format: 'json',
      nojsoncallback: '?',
      ...data
    }));
  }
};

