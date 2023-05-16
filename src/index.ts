import { ApolloServer } from "apollo-server-express";
import express from "express";
import { resolvers } from "./schema";
import { readFileSync } from "fs";

async function startApolloServer() {
  const app = express();

  const server = new ApolloServer({
    typeDefs: readFileSync("./src/schema.graphql", "utf8"),
    resolvers,
  });

  await server.start();

  server.applyMiddleware({ app });

  const port = process.env.PORT || 4000;
  app.listen({ port }, () =>
    console.log(`Server ready at http://localhost:${port}${server.graphqlPath}`)
  );
}

startApolloServer();
