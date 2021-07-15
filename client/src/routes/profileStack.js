import { createStackNavigator } from "react-navigation-stack"
import SinglePost from "../components/SinglePost"
import Feed from "../components/Feed"
import Profile from "../components/Profile"
import About from "../components/About"
const screens = {
    Profile: {
        screen: Profile,
    },
    About: {
        screen: About,
        navigationOptions: ({ navigation }) => {
            return {
                headerTitle: () => <Header navigation={navigation} />,
            }
        },
    },
}

const ProfileStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerTintColor: "#444",
        headerStyle: { backgroundColor: "#ddd", height: 60 },
    },
})
export default ProfileStack
