import { StatusBar } from "expo-status-bar"
import React from "react"
import { StyleSheet, Text, View, FlatList } from "react-native"
import { gql, useQuery } from "@apollo/client"

//TODO Create User
//TODO Test authentication
//TODO Test login

const GET_POSTS = gql`
    query getPosts {
        getPosts {
            id
            body
            createdAt
            username
            comments {
                id
                body
                username
            }
            assignedUser {
                id
                email
            }
        }
    }
`
export default function Root() {
    const { loading, error, data } = useQuery(GET_POSTS)
    if (loading) return <Text>"Loading..."</Text>
    if (error) return <Text>{`Error! ${error.message}`}</Text>
    const posts = data.getPosts

    return (
        <View style={styles.container}>
            {/* <Text>Open up App.js to start working on your app!</Text> */}
            <FlatList
                keyExtractor={item => item.id}
                data={posts}
                renderItem={({ item }) => {
                    return (
                        <View style={styles.container}>
                            <Text style={styles.item}>{item.username}</Text>
                            <Text>{item.body}</Text>
                        </View>
                    )
                }}
            ></FlatList>
            <StatusBar style="auto" />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        paddingTop: 40,
        paddingHorizontal: 20,
    },
    item: {
        marginTop: 24,
        padding: 30,
        backgroundColor: "pink",
        fontSize: 24,
        marginHorizontal: 10,
        marginTop: 24,
    },
})
