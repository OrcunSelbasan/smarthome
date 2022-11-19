import { StyleSheet, View, Text, TouchableOpacity , Image } from "react-native";


function AddingBoard() {
    
    return(
    <View style={styles.addingContainer}>
        <View style={styles.roomNameContainer}>
            <View style={styles.nameContainer}>
                <Text style={styles.nameContainerText}>Press Room to Add</Text>
            </View>
            <View style={styles.ImageContainer}>
                <TouchableOpacity style={styles.images}>
                    <Image source={require('../../assets/bed-1.png')}/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.images}>
                    <Image source={require('../../assets/sofa-1.png')}/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.images}>
                    <Image source={require('../../assets/toilet-1.png')}/>
                </TouchableOpacity>
            </View>
        </View>
    </View>
    )
}

const styles = StyleSheet.create({
    addingContainer: {
        paddingTop: 36,
        flexDirection: "column",
        justifyContent: "space-evenly"
    },
    addToText: {
        color: '#D9D6D9',
        fontSize: 17,
    },
    roomNameContainer: {
        marginVertical: 25,
        width: 330,
        height: 150,
        backgroundColor: "#FFFFFF",
        borderRadius: 20
    },
    nameContainer: {
        flexDirection: "column",
        alignItems: 'center',
        marginVertical: 15
    },
    nameContainerText: {
        fontSize: 22,
        color: "black",
    },
    ImageContainer: {
        flexDirection: "row",
        justifyContent: 'space-evenly',
        paddingTop: 6

    },
    images: {
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center",
        width: 45,
        height: 45,
        backgroundColor: "#111222",
        borderRadius: 10
    },
})
export default AddingBoard;