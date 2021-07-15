import { createStackNavigator } from "react-navigation-stack"
import SinglePost from "../components/SinglePost"
import Feed from "../components/Feed"
import Profile from "../components/Profile"
import About from "../components/About"
import React from "react"
import Header from "../components/shared/Header"
const screens = {
    About: {
        screen: About,
        navigationOptions: ({ navigation }) => {
            return {
                headerTitle: () => <Header navigation={navigation} />,
            }
        },
    },
    // Profile: {
    //     screen: Profile,
    // },
}

const AboutStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerTintColor: "#444",
        headerStyle: { backgroundColor: "#ddd", height: 60 },
    },
})
export default AboutStack
