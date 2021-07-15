import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import React from "react"
import { NavigationContainer } from "@react-navigation/native"
// stacks
import HomeStack from "./feedStack"
import AboutStack from "./aboutStack"
import ProfileStack from "./profileStack"

// drawer navigation options
// Differs if user is logged in or not
const screenStack = {
    Feed: {
        screen: HomeStack,
    },
    Profile: {
        screen: ProfileStack,
    },
    About: {
        screen: AboutStack,
    },
}

const Tab = createBottomTabNavigator()

const BottomTabNavigator = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Feed" component={HomeStack} />
            <Tab.Screen name="Profile" component={ProfileStack} />
        </Tab.Navigator>
    )
}

export default BottomTabNavigator
