import { StatusBar } from "expo-status-bar"
import { gql, useQuery } from "@apollo/client"
import React, { useState } from "react"
import {
    Text,
    View,
    FlatList,
    Image,
    TextInput,
    Button,
    TouchableOpacity,
} from "react-native"

import { GET_POSTS, GET_LOGGEDIN_USER } from "../hooks/queries"
import { styles } from "../styles/global"
import Fuse from "fuse.js"
//TODO Create User
//TODO Test authentication
//TODO Test login

export default function Feed({ navigation }) {
    // GraphQL Hook through apollo client
    const posts = useQuery(GET_POSTS)

    const [text, onChangeText] = React.useState("")

    if (posts.loading) return <Text>"Loading..."</Text>
    if (posts.error) return <Text>{`Error! ${posts.error.message}`}</Text>

    const profilePressHandler = () => {
        //Get logged in profile
        navigation.push("Profile")
    }
    const loginPressHandler = () => {
        navigation.push("Login")
    }
    const postPressHandler = item => {
        navigation.push("SinglePost", item.item)
    }




    const options = {
        keys: ["body", "username"],
    }
    // console.log(posts.data.getPosts)
    const fuse = new Fuse(posts.data.getPosts, options)

    let feed = fuse.search(text).sort((a, b) => {
        const aDate = new Date(a.item.createdAt)
        const bDate = new Date(b.item.createdAt)
        return bDate - aDate
    })
    if (text.length < 1) {
        feed = posts.data.getPosts.map(item => {
            return { item }
        })
    }

    return (
        <View style={styles.container}>
            <TextInput
                placeholder="Search Text"
                onChangeText={onChangeText}
                value={text}
                style={styles.input}
            />
            <FlatList
                keyExtractor={item => item.item.id}
                data={feed}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity
                            style={styles.item}
                            onPress={() => postPressHandler(item)}
                        >
                            <View>
                            <Text style={styles.itemText}>
                                {item.item.body}
                            </Text>
                            <Text>User: {item.item.username}</Text>
                            </View>
                            <TouchableOpacity activeOpacity={0.5}>
                                <Image
                                    source={require("../assets/mapicon.png")}
                                    style={styles.mapIcon}
                                />
                            </TouchableOpacity>
                        </TouchableOpacity>
                    )
                }}
            />
            <Button title="Go to profile" onPress={profilePressHandler} />
            <Button title="Login" onPress={loginPressHandler} />
            <StatusBar style="auto" />
        </View>
    )
}
