const { gql } = require('apollo-server');

const typeDefs = gql`
  type Query {
    vendors: [Vendor]
  }

  type Mutation {
    appendVendor(vendor: NewVendor): Vendor
    replaceVendor(vendor: ExistingVendor): Vendor
    removeVendor(vendorId: ID): Vendor
  }

  type Vendor {
    id: ID!
    name: String!
    archived: Boolean
  }

  input NewVendor {
    name: String!
    archived: Boolean
  }

  input ExistingVendor {
    id: ID!
    name: String!
    archived: Boolean
  }
`;

module.exports = typeDefs;
