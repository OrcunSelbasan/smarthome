import { useState } from "react";
import { StyleSheet, View,Text } from "react-native";

import { SelectList } from "react-native-dropdown-select-list";

const types = [
    { key: 1, value: "LIGHT" },
    { key: 2, value: "SECURITY" }
];

function DeviceType({headerDevice}) {

    const [type, setType] = useState("");


    return (
        <View style={styles.deviceType}>

            <Text style={styles.deviceTypeText}>{headerDevice}</Text>
            <View style={styles.selectList}>
            <SelectList 
                data={types}
                setSelected={setType}
                dropdownStyles={{backgroundColor:"white"}}
                dropdownTextStyles={{color:'black'}}
                inputStyles={{color:"white"}}
                
            />
            </View>

        </View>
    )

}

const styles = StyleSheet.create({
    deviceType: {
        paddingVertical: 30,
        width: 330,
        borderBottomWidth: 1,
        borderBottomColor: '#5857F3',

    },
    deviceTypeText: {
        fontSize: 20,
        color: '#FFF'

    },
    selectList:{
        paddingTop:10
    }
})
export default DeviceType;



