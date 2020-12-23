import React from 'react'
import {View, StyleSheet} from 'react-native'
import Field from './Field'

export default props =>{
    
    const rows = props.board.map((row, i) =>{
        const columns = row.map((field, j) =>{
            return <Field onOpen={() => props.OnOpenField(i, j)} {...field} onSelect={e => props.onSelectField(i, j)} key={j}/>
        })
        return <View style={{flexDirection:'row'}} key={i}>{columns}</View>
    })

    return(<View style={styles.container}>{rows}</View>)
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#eee',
        
    }
})