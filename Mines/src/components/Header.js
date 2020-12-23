import React from 'react'
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native'
import Flag from './Flag'

export default props =>{
    return(
        <View style={styles.container}>
            <View style={styles.flagContainer}>
                <TouchableOpacity  onPress={props.onFlagPress} style={styles.flagButton}>
                <Flag bigger />
                </TouchableOpacity>
                <Text style={styles.flagsLeft}>= {props.onFlagsLeft}</Text>
            </View>
            <TouchableOpacity style={styles.button} onPress={props.onNewGame}>
            <Text style={styles.buttonLabel}>Novo Jogo</Text>
            </TouchableOpacity>
        </View>
    )
}


const styles = StyleSheet.create({
    container:{
        flex: 1,
        flexDirection:"row",
        alignItems:"center",
        backgroundColor: "#EEE",
        justifyContent:"space-around",
        paddingTop: 20,
        paddingHorizontal:20,
    },
    flagContainer:{
        flexDirection: "row"
    },
    flagButton:{
        marginTop:10,
        minWidth:30
    },
    flagsLeft:{
        fontSize: 30,
        fontWeight:'bold',
        paddingTop:5,
        marginLeft:20,
    },
    button:{
        backgroundColor: '#CCC',
        padding:5,
        borderColor: '#222',
        borderWidth: 2
    },
    buttonLabel:{
        fontSize:20,
        color: '#000',
        fontWeight: 'bold'
    }
})