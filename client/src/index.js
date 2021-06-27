import { ApolloClient, InMemoryCache } from "@apollo/client"
// import { MONGODB } from "../config.js"
export const client = new ApolloClient({
    // options go here
    uri: "http://localhost:5000",
    cache: new InMemoryCache(),
})
