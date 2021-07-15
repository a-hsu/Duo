import { createDrawerNavigator } from "react-navigation-drawer"
import { createAppContainer } from "react-navigation"

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
const RootDrawerNavigator = createDrawerNavigator(screenStack)

export default createAppContainer(RootDrawerNavigator)
