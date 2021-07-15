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
export default function About({ navigation }) {
    //If user is logged in, show this page. Otherwise, show login page or signup
    const pressHandler = () => {
        navigation.goBack()
    }
    return (
        <View style={styles.container}>
            <Text>About</Text>
            <Text>Duo is a social app focused around impromptu meetups between two people.</Text>

            <StatusBar style="auto" />
        </View>
    )
}
