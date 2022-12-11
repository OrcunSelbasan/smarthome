import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { TextInput } from 'react-native-paper'
import CustomButton from '../../components/CustomButton'

export default function Password() {
  return (
    <View style={styles.container}>
        <Text style={styles.pageTitle}>Door Password Change</Text>
        <TextInput style={styles.input} secureTextEntry={true} label="Old Password" />
        <TextInput style={styles.input} secureTextEntry={true} label="New Password" />
        <TextInput style={styles.input} secureTextEntry={true} label="New Password Again" />
        <CustomButton text="Save" />
    </View>
  )
};

const styles = StyleSheet.create({
    container: {
        paddingVertical: 100,
        paddingHorizontal: 50,
        width: "100%",
        height: "100%",
        backgroundColor: "#000"
    },
    pageTitle: {
        fontSize: 24,
        textAlign: "center",
        marginVertical: 10,
        marginBottom: 50,
        color: "white"
    },
    input: {
        marginVertical: 30
    }
})
