import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';
import { makeExecutableSchema } from 'graphql-tools';
import schema from './schema'
import resolvers from './resolvers'

const PORT = 4000;
var app = express();

const executableSchema = makeExecutableSchema({
    typeDefs: schema,
    resolvers: resolvers,
})

const corsOptions = {
    origin(origin, callback) {
        callback(null, true);
    },
    credentials: true
};
var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
}
app.use(allowCrossDomain);
app.use(cors(corsOptions))

app.use('/graphql', bodyParser.json(), graphqlExpress({ schema: executableSchema }));

app.use('/graphiql', graphiqlExpress({
    endpointURL: '/graphql',
}));

app.listen(PORT);