import { graphqlExpress } from 'apollo-server-express';
import bodyParser from 'body-parser';
import compression from 'compression';
import cookieParser from 'cookie-parser';
import express from 'express';
import helmet from 'helmet';
import http from 'http';
import cors from 'cors';
import _ from 'lodash';
import apolloServer from './apolloServer';

const port = process.env.PORT || 8080;

const app = express();
app.use(helmet());
app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());

app.options("*", cors());

const setupPublic = () => {
  app.get('/', (req, res) => res.sendStatus(200));
  app.get('/favicon.ico', (req, res) => res.sendStatus(204));
};

const setupApolloServer = () => {
  apolloServer.applyMiddleware({
    app,
    path: '/graphql',
  });
};

setupPublic();
setupApolloServer();

const server = http.createServer(app);

server.listen(port, () => {
  console.log(`Express server listening on port ${port}`);
});
