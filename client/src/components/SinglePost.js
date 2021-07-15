import { StatusBar } from "expo-status-bar"
import React from "react"
import { NavigationContainer } from "@react-navigation/native"
import { Text, View, Button } from "react-native"
import { gql, useQuery } from "@apollo/client"
import { createStackNavigator } from "react-navigation-stack"
import { styles } from "../styles/global"
//TODO Test authentication
//TODO Test login
// const GET_LOGGEDIN_USER = gql``
export default function SinglePost({ navigation }) {
    //If user is logged in, show this page. Otherwise, show login page or signup
    console.log(navigation.getParam("body"))

    const backHandler = () => {
        navigation.goBack()
    }

    const pressHandler = () => {}
    // TODO Determining how long ago the post was made
    // const myDate = new Date(navigation.getParam("createdAt"))
    // let time = 0
    // const today = new Date()
    // const difference = (today - myDate) / 1000 / 60 / 60 / 24
    // if (difference < 24) {
    //     time = Math.floor(difference)
    //     console.log(time)
    // } else if (difference / 7 > 7) {
    //     console.log("1 week")
    // }
    return (
        <View style={styles.container}>
            <View style={styles.singleItem}>
                <Text>User: {`${navigation.getParam("username")}`}</Text>
                <Text>Request: {`${navigation.getParam("body")}`}</Text>
                <Text>Created: {`${navigation.getParam("createdAt")}`}</Text>
            </View>
            <Button onPress={pressHandler} title="Assign Me" />
            <Button onPress={backHandler} title="Back to Feed" />

            <StatusBar style="auto" />
        </View>
    )
}
