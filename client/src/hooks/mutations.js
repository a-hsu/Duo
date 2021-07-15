import { gql } from "@apollo/client"

// export const ASSIGN_USER = gql`
//     mutation {

//     }
// `
export const LOGIN = gql`
    mutation ($username: String!, $password: String!) {
        login(username: $username, password: $password) {
            id
            email
            token
            username
            createdAt
        }
    }
`
