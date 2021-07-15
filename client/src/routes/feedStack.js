import { createStackNavigator } from "react-navigation-stack"
import React from "react"
import SinglePost from "../components/SinglePost"
import Feed from "../components/Feed"
import Login from "../components/Login"
import Profile from "../components/Profile"
import Header from "../components/shared/Header"
const screens = {
    Feed: {
        screen: Feed,
        navigationOptions: ({ navigation }) => {
            return {
                headerTitle: () => <Header navigation={navigation} />,
            }
        },
    },
    Profile: {
        screen: Profile,
    },
    Login: {
        screen: Login,
    },
    SinglePost: {
        screen: SinglePost,
    },
}

const HomeStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerTintColor: "#444",
        headerStyle: { backgroundColor: "#ddd", height: 60 },
    },
})
export default HomeStack
