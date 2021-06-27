import { StatusBar } from "expo-status-bar"
import React from "react"
import { StyleSheet, Text, View } from "react-native"
import { client } from "./index.js"
import { ApolloProvider } from "@apollo/client"
import Root from "./components/Root"

export default function App() {
    return (
        <ApolloProvider client={client}>
            <Root />
        </ApolloProvider>
    )
}
