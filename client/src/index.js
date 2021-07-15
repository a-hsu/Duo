import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client"
// import { MONGODB } from "../config.js"
import AsyncStorage from "@react-native-async-storage/async-storage"
import { setContext } from "@apollo/client/link/context"

const httpLink = createHttpLink({
    uri: "http://localhost:5000",
})

const authLink = setContext(async (_, { headers }) => {
    // get the authentication token from local storage if it exists
    try {
        const token = await AsyncStorage.getItem("token")
        if (!token) {
            throw new Error("something's wrong")
        }
    } catch (error) {
        throw new Error(error)
    }

    // return the headers to the context so httpLink can read them
    return {
        headers: {
            ...headers,
            authorization: token ? `Bearer ${token}` : "",
        },
    }
})

export const client = new ApolloClient({
    // options go here
    uri: "http://localhost:5000",
    cache: new InMemoryCache(),
})
