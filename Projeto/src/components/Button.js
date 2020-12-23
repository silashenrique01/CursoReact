import React from 'react'
import {View, Dimensions, StyleSheet, Button, TouchableHighlight, Text} from 'react-native'

const style = StyleSheet.create({
    button:{
        fontSize: 40,
        height: Dimensions.get("window").width / 4,
        width: Dimensions.get("window").width / 4,
        backgroundColor: "#F0F0F0",
        padding: 20,
        textAlign: "center",
        borderWidth: 1,
        borderColor: "#888"      

    },
    buttonDouble:{
        width: (Dimensions.get("window").width / 4) * 2
    },
    buttonTriple:{
        width: (Dimensions.get("window").width / 4) * 3
    },
    buttonOperation:{
        backgroundColor: "#fa8231",
        color: '#fff'
    }
})


export default props => {
    const styleButton = [style.button]
    if(props.buttonDouble) styleButton.push(style.buttonDouble)
    if(props.buttonTriple) styleButton.push(style.buttonTriple)
    if(props.buttonOperation) styleButton.push(style.buttonOperation)
   return(
       //retorna o arquivo jsx que é responsável por printar o botão na tela
   <TouchableHighlight onPress={() => props.onClick(props.label)}>
        <Text style={styleButton}>{props.label}</Text>
    </TouchableHighlight>
   )
}


