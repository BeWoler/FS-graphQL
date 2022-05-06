const { buildSchema } = require('graphql');

const schema = buildSchema(`
  type User {
    id: ID
    username: String
    name: String
    posts: [Post]
  }
  type Post {
    id: ID
    title: String
    text: String
  }

  input UserInput {
    id: ID
    username: String!
    name: String!
    posts: [PostInput]
  }
  input PostInput {
    id: ID
    title: String!
    text: String!
  }

  type Query {
    getUser(id: ID): User
    getAllUsers: [User]
  }

  type Mutation {
    createUser(input: UserInput): User
  }
`);

module.exports = schema;