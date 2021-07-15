const { gql } = require("apollo-server")

module.exports = gql`
    type User {
        id: ID!
        email: String!
        token: String!
        username: String!
        createdAt: String!
        isAssigned:Boolean!
        posts: [Post]!
    }
    type Post {
        id: ID!
        body: String!
        createdAt: String
        username: String!
        # location: String!
        # duration: String!
        # time: String!
        # assignedUser: ID
        comments: [Comment]!
        likes: [Like]!
    }
    type Comment {
        id: ID!
        createdAt: String!
        username: String!
        body: String!
    }
    type Like {
        id: ID!
        createdAt: String!
        username: String!
    }
    input RegisterInput {
        username: String!
        password: String!
        confirmPassword: String!
        email: String!
    }
    type Query {
        getPosts: [Post]
        getPost(postId: ID!): Post
        getLikes(postId: ID!): Int!
        getUsers: [User]
        getLoggedInUser(userId: ID!): User!
    }
    type Mutation {
        register(registerInput: RegisterInput): User!
        login(username: String!, password: String!): User!
        createPost(body: String!): Post!
        deletePost(postId: ID!): String!
        createComment(postId: String!, body: String!): Post!
        deleteComment(postId: ID!, commentId: ID!): Post!
        likePost(postId: ID!): Post!
        # assignUser(postId: ID!, user: userId): Post!
    }
`
