### Flapi-BFF

A backend for the frontend layer for a web application which hits the Flickr public API to retrieve photos. The UI layer can be found here:

Note: the first time you hit the backend it will take a few seconds. This is because it's hosted on Heroku and it needs some time for the dyno to fire up. Subsequent hits will be much faster.

### Tech

It uses Apollo, GraphQL, Node and Express. GraphQL acts as a wrapper around the public Flickr endpoint.

### Installation

Clone this repo.
```sh
$ yarn install
$ yarn dev
```

For production:

```sh
$ yarn start
```


### Todo

| Field | Task |
| ------ | ------ |
| Config | Should use a .env file |
| Security | Self-signed SSL certs for https  |
| Testing | Get Jest working with esm in order for testing to use ES6 imports |

### Considerations

| Field | Task |
| ------ | ------ |
| Usability | Perhaps a Lambda function would've been better than deploying to Heroku |
