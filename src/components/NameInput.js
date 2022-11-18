import { StyleSheet, TextInput ,Text ,View } from "react-native";

function NameInput({headerName}) {

    return (
        <View style={styles.deviceName}>
            <Text style={styles.deviceNameText}>{headerName}</Text>
            <TextInput style={styles.TextInputText}
                placeholder='Enter Your Device Name'
                placeholderTextColor="#FFF"
            />
        </View>
    )
}

const styles = StyleSheet.create({
    deviceName: {
        width: 330,
        borderBottomWidth: 1,
        borderBottomColor: "#5857F3",
        
      },
      deviceNameText:{
        fontSize:20,
        lineHeight:34,
        color:'#D9D6D9'
      },
      TextInputText:{
        fontSize:13,
        color:'#D9D6D9',
        
      },
})

export default NameInput;
