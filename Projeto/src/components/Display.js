import React from 'react'
import {View, StyleSheet, Text} from 'react-native'

const style = StyleSheet.create({
    display:{
        flex: 1,
        justifyContent:'center',
        alignItems:'flex-end',
        padding: 20,
        backgroundColor: 'rgba(0,0,0,0.6)',

    },
    displayValue:{
        fontSize: 60,
        color: '#fff'

    }
})

export default props => {
    return (
        <View style={style.display}>
            <Text style={style.displayValue} numberOfLines={1}>{props.value}</Text>
        </View>
    )
}