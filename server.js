const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const { ApolloServer } = require('@apollo/server');
const { expressMiddleware } = require('@apollo/server/express4');

const { makeExecutableSchema } = require('@graphql-tools/schema');
const { loadFilesSync } = require('@graphql-tools/load-files');

const typesArray = loadFilesSync('**/*', {
    extensions: ['graphql']
});

const resolversArray = loadFilesSync('**/*', { 
    extensions: ['resolvers.js'] 
});

async function startApolloServer(){
    const app = express();

    const schema = makeExecutableSchema({
        typeDefs: typesArray,
        resolvers: resolversArray
    });

    const server  = new ApolloServer({
        schema: schema
    });

    await server.start();

    app.use(cors());
    app.use(express.json());
    app.use(morgan("combined"));

    app.use('/graphql', expressMiddleware(server));
    
    app.listen(3000, () => {
        console.log('Server listening on port 3000');
    });
};

startApolloServer();
