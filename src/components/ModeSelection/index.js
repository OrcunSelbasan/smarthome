import { Component } from "react";
import { StyleSheet, View,Text } from "react-native";

import { SelectList } from "react-native-dropdown-select-list";

const roomName = [
    { key: 1, value: "BEDROOM" },
    { key: 2, value: "LIVING ROOM" }
];

class ModeSelection extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.modeContainer}>
                <Text style={styles.modeContainerText}>{this.props.headerDevice}</Text>
                <View style={styles.selectList}>
                <SelectList 
                    data={roomName}
                    setSelected={(type) => this.props.onTypeChange(roomName.find(t => t.key === type).value)}
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
    modeContainer: {
        paddingVertical: 30,
        width: 330,
        borderBottomWidth: 1,
    },
    modeContainerText: {
        fontSize: 20,
        color: '#FFF',
        paddingBottom: 15
    }
})
export default ModeSelection;



