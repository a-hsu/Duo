import { StatusBar } from "expo-status-bar"
import React from "react"
import { NavigationContainer } from "@react-navigation/native"
import { Text, View, Button } from "react-native"
import { gql, useQuery } from "@apollo/client"
import { createStackNavigator } from "react-navigation-stack"
import { styles } from "../styles/global"
import { GET_USER } from "../hooks/queries"

//TODO Test authentication
//TODO Test login
// const GET_LOGGEDIN_USER = gql``
export default function Profile({ navigation }) {
    //If user is logged in, show this page. Otherwise, show login page or signup
    const pressHandler = () => {
        navigation.goBack()
    }
    console.log(navigation)
    return (
        <View style={styles.container}>
            <View style={styles.singleItem}>
                <Text>Profile Page</Text>
            </View>
            {/* <Button
                // onPress={() => navigation.navigate("MyModal")}
                title="Open Modal"
            /> */}
            <Button onPress={pressHandler} title="Back to Feed" />

            <StatusBar style="auto" />
        </View>
    )
}
// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: "#fff",
//         paddingTop: 40,
//         paddingHorizontal: 20,
//     },
//     item: {
//         marginTop: 24,
//         padding: 30,
//         backgroundColor: "pink",
//         fontSize: 24,
//         marginHorizontal: 10,
//         marginTop: 24,
//     },
// })
