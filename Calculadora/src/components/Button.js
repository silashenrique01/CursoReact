import React from 'react'
import {StyleSheet, Text, Dimensions, TouchableHight } from 'react-native'

const style = StyleSheet.create({
    button:{
        fontSize: 40,
        height: Dimensions.get('window').width / 4,
        width: Dimensions.get("window").width / 4,
        padding: 20,
        backgroundColor: '#f0f',
        textAlign: "center",
        borderWidth: 1,
        borderColor: '#888'
    }
})


export default props => {
    return(
        <TouchableHight onPress={props.onClick}>
            <Text style={style.button}>{props.label}</Text>
        </TouchableHight>
    )
}