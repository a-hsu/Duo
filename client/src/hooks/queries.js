import { gql } from "@apollo/client"

export const GET_POSTS = gql`
    query {
        getPosts {
            id
            username
            body
            createdAt
        }
    }
`
export const GET_LOGGEDIN_USER = gql`
    query {
        getPosts {
            username
            body
            createdAt
        }
    }
`
export const GET_USER = gql`
    query ($userId: ID!) {
        getLoggedInUser(userId: $userId) {
            id
            username
            email
        }
    }
`
//($postId: postId)
export const GET_POST = gql`
    query ($postId: ID!) {
        getPost(postId: $postId) {
            id
            body
            username
            assignedUser {
                id
                username
                email
            }
            likes {
                id
                username
            }
        }
    }
`
