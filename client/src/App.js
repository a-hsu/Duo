import React from "react"
import { client } from "./index.js"
import { ApolloProvider } from "@apollo/client"
import Navigator from "./routes/drawer"
import { NavigationContainer } from "@react-navigation/native"
export default function App() {
    return (
        <ApolloProvider client={client}>
            <NavigationContainer>
                <Navigator />
            </NavigationContainer>
        </ApolloProvider>
    )
}
