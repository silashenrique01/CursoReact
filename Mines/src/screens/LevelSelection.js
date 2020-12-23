import React from 'react'
import {
    View,
    StyleSheet,
    Text,
    Modal,
    TouchableOpacity
} from 'react-native'


LevelButton = props =>{
    return(
        <TouchableOpacity style={[styles.button, props.bgLevel]} 
        onPress={() => props.onLevelSelected(props.LevelSelected)}>
        <Text style={styles.buttonLabel}>{props.level}</Text>
        </TouchableOpacity>
    )
}

export default props => {
    return(
        <Modal onRequestClose={props.oncancel}
                visible={props.isVisible}
                animationType="slide"
                transparent={true}>
            <View style={styles.frame}>
                <View style={styles.container}>
                    <Text style={styles.title}>Selecione o Nível</Text>

                    <LevelButton level='Fácil'  bgLevel={styles.bgEasy} onLevelSelected={props.onLevelSelected} LevelSelected={0.1} />
                    <LevelButton level='Médio' bgLevel={styles.bgMedium} onLevelSelected={props.onLevelSelected} LevelSelected={0.2} />
                    <LevelButton level='Hard' bgLevel={styles.bgHard} onLevelSelected={props.onLevelSelected} LevelSelected={0.3}/>
                    
                </View>
            </View>

        </Modal>
    )
}


const styles = StyleSheet.create({
    frame:{
        flex: 1,
        alignItems:"center",
        justifyContent:"center",
        backgroundColor: 'rgba(0,0,0,0.6)',
    }, 
    container:{
        backgroundColor: '#EEE',
        alignItems: "center",
        justifyContent: "center", 
        padding:15
    },
    title:{
        fontSize: 30,
        fontWeight: 'bold'
    },
    button:{
        marginTop:10,
        padding:5,
        minWidth: 50
    },
    buttonLabel:{
        fontSize:10,
        textAlign: "center",
        color: '#EEE',
        fontWeight: 'bold',
    },
    bgEasy:{
        backgroundColor: '#49b65d',
    },
    bgMedium:{
        backgroundColor: '#2765f7'
    },
    bgHard:{
        backgroundColor: '#F26337'
    }
})