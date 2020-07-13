const graphql = require("graphql");
const { RootQuery } = require("./Query/RootQuery");
const { Mutation } = require("./Mutation/Mutation");
const { GraphQLSchema } = graphql;

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation,
});
