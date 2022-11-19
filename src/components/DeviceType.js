import { Component } from "react";
import { StyleSheet, View,Text } from "react-native";

import { SelectList } from "react-native-dropdown-select-list";

const types = [
    { key: 1, value: "LIGHT" },
    { key: 2, value: "WINDOW" },
    { key: 3, value: "AIR HUMIDIFIER" },
];

class DeviceType extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.deviceType}>
                <Text style={styles.deviceTypeText}>{this.props.headerDevice}</Text>
                <View style={styles.selectList}>
                <SelectList 
                    data={types}
                    setSelected={(type) => this.props.onTypeChange(types.find(t => t.key === type).value)}
                    dropdownStyles={{backgroundColor:"white"}}
                    dropdownTextStyles={{color:'black'}}
                    inputStyles={{color:"white"}}                    
                />
                </View>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    deviceType: {
        paddingVertical: 30,
        width: 330,
        borderBottomWidth: 1,
    },
    deviceTypeText: {
        fontSize: 20,
        color: '#FFF',
        paddingBottom: 15
    }
})
export default DeviceType;



