import { StyleSheet, TextInput ,Text ,View } from "react-native";

function NameInput({headerName, placeholder, onNameChange}) {

    return (
        <View style={styles.deviceName}>
            <Text style={styles.deviceNameText}>{headerName}</Text>
            <TextInput style={styles.TextInputText}
                placeholder={placeholder}
                placeholderTextColor="#FFF"
                onChangeText={(text) => onNameChange(text)}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    deviceName: {
        width: 330,
        borderBottomWidth: 1,
        paddingBottom: 10,
        borderBottomColor: "#5857F3",
      },
      deviceNameText:{
        fontSize:20,
        lineHeight:34,
        color:'#D9D6D9'
      },
      TextInputText:{
        fontSize:18,
        color:'#D9D6D9',
        paddingTop: 15
      },
})

export default NameInput;
