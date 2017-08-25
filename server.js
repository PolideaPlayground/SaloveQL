import express from 'express';
import bodyParser from 'body-parser';
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';
import { makeExecutableSchema } from 'graphql-tools';
import schema from './schema'
import resolvers from './resolvers'

const PORT = 3000;
var app = express();

const executableSchema = makeExecutableSchema({
    typeDefs: schema,
    resolvers: resolvers,
})

app.use('/graphql', bodyParser.json(), graphqlExpress({ schema: executableSchema }));

app.use('/graphiql', graphiqlExpress({
    endpointURL: '/graphql',
}));

app.listen(PORT);