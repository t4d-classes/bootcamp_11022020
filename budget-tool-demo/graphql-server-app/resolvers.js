const resolvers = {
  Query: {
    vendors: async (_1, _2, { dataSources }) => {
      return dataSources.vendorsAPI.all();
    },
  },
  Mutation: {
    appendVendor: async (_, { vendor }, { dataSources }) => {
      return dataSources.vendorsAPI.append(vendor);
    },
    replaceVendor: async (_, { vendor }, { dataSources }) => {
      return dataSources.vendorsAPI.replace(vendor);
    },
    removeVendor: async (_, { vendorId }, { dataSources }) => {
      return dataSources.vendorsAPI.remove(vendorId);
    },
  },
};

module.exports = resolvers;
