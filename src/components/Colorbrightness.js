import { StyleSheet, Text, TouchableOpacity, View, } from "react-native";
import RadioGroup, { RadioButtonProps } from 'react-native-radio-buttons-group';
import { useState } from "react";

function Colorbrightness({ headerColorbrightness }) {
    const [color, setcolor] = useState([

        { id: 1,  value: "redd",borderColor:'red',color:'red', },
        { id: 2,  value: "greenn",borderColor:'green',color:'green' },
        { id: 3,  value: "bluee", borderColor:'blue',color:'blue'},
        { id: 4,  value: "whitee",borderColor:'white',color:'white' },
    ]);

    
    
    

    function onPressRadioButton(selectedColor){
        setcolor(selectedColor);
    }

    return (
        <View style={styles.deviceBrand}>
            <Text style={styles.deviceBrandText}> {headerColorbrightness} </Text>
            <RadioGroup 
                radioButtons={color}
                onPress={onPressRadioButton}
                layout="row"
                
            />
        </View>
    )
}

const styles = StyleSheet.create({
    deviceBrand: {
        paddingTop: 30,
        width: 330,
        borderBottomWidth: 1,
        borderBottomColor: '#5857F3',    
    },
    deviceBrandText: {
        color: '#D9D6D9',
        fontSize: 16
    },
    deviceBrandSelection: {
        color: '#D9D6D9',
        fontSize: 20,
        paddingTop: 20

    },
    radioButtonsStyle:{
        justifyContent:"flex-start",
        alignItems:"flex-start"
    }
})
export default Colorbrightness;