import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#eee",
        paddingTop: 20,
        paddingHorizontal: 5,
    },
    item: {
        marginTop: 10,
        flexDirection: "row",
        padding: 25,
        justifyContent: "space-between",
        backgroundColor: "#ffe",
        marginHorizontal: 10,
        borderWidth: 2,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        borderBottomRightRadius: 20,
        borderBottomLeftRadius: 20,
    },
    singleItem: {
        marginTop: 10,
        padding: 25,
        justifyContent: "space-between",
        backgroundColor: "#ffe",
        marginHorizontal: 10,
        borderWidth: 2,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        borderBottomRightRadius: 20,
        borderBottomLeftRadius: 20,
    },
    itemText: {
        width: 250,
        fontSize: 16,
    },
    mapIcon: {
        width: 30,
        height: 30,
        resizeMode: "contain",
    },
    input: {
        borderColor: "gray",
        borderWidth: 1,
        padding: 10,
        marginLeft: 15,
        marginRight: 15,
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
        borderBottomRightRadius: 5,
        borderBottomLeftRadius: 5,
    },
})
