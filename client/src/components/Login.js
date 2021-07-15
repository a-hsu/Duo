import { StatusBar } from "expo-status-bar"
import React from "react"
import { NavigationContainer } from "@react-navigation/native"
import { Text, View, TextInput, Button } from "react-native"
import { gql, useQuery, useMutation } from "@apollo/client"
import { createStackNavigator } from "react-navigation-stack"
import { styles } from "../styles/global"
import { LOGIN } from "../hooks/mutations"
import AsyncStorage from "@react-native-async-storage/async-storage"
//TODO Test authentication
//TODO Test login
// const GET_LOGGEDIN_USER = gql``
export default function Login({ navigation }) {
    //If user is logged in, show this page. Otherwise, show login page or signup
    const [username, onChangeUsername] = React.useState("")
    const [password, onChangePassword] = React.useState("")
    const pressHandler = () => {
        navigation.goBack()
    }
    const loginHandler = async () => {
        try {
            const user = useMutation(LOGIN, {
                variables: {
                    username,
                    password,
                },
            })
            if (loginAttempt) {
                console.log("im here>>>>>", user)
                console.log("token<<<<", user.token)
            } else {
            }
        } catch (error) {}
    }
    return (
        <View style={styles.container}>
            <View>
                <TextInput
                    placeholder="username"
                    onChangeText={onChangeUsername}
                    value={username}
                    style={styles.input}
                />
                <TextInput
                    placeholder="password"
                    onChangeText={onChangePassword}
                    value={password}
                    style={styles.input}
                />
            </View>
            <Button title="Login" onPress={loginHandler} />
            {/* <Button title="Sign Up" onPress={signUpHandler} /> */}
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
