import { TouchableOpacity, View, Text, StyleSheet } from "react-native";

function Addbutton({buttonName}) {
    return (

        <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.touchableButton}>
                <Text style={styles.buttonText}>Add Device</Text>
            </TouchableOpacity>
        </View>

    )
}

const styles = StyleSheet.create({
    buttonContainer: {
        flexDirection: "column",
        alignItems: "center"
    },
    touchableButton: {
        width: 250,
        height: 50,
        textAlign: "center",
        flexDirection: "row",
        justifyContent: "center",
        backgroundColor: '#5857F3',
        alignItems: "center",
        borderRadius: 40,

    },
    buttonText: {
        fontSize: 22,
        color: '#D9D6D9',
    },
})

export default Addbutton;