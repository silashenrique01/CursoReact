import React, { Component, useState, useEffect } from 'react'
import {View, Text, StyleSheet, Alert} from 'react-native'
import params from './src/Params'
import MinesField from './src/components/MineField'
import Header from './src/components/Header'
import LevelSelection from './src/screens/LevelSelection'
import {
  createBoardMined,
  cloneBoard, 
  openField,
  showMine,
  hadExplosion,
  wonGame,
  invertFlag,
  flagUsed
} from './src/components/Functions'

export default class App extends Component {

  
constructor(props){
  super(props)
  this.state = this.createState()
}

amountMined = () =>{
  const rows = params.getRowsAmount()
  const columns = params.getColumnsAmount()
  return Math.ceil((rows * columns) * params.difficultLevel )
}

onSelectField = (row, column) =>{
  const board = cloneBoard(this.state.board)
  invertFlag(board, row, column)
  const won = wonGame(board)
  if(won){
    Alert.alert('Ganhou Parabens!!!')
  }
  this.setState({board, won})
}

createState = () =>{
  const rows = params.getRowsAmount()
  const columns = params.getColumnsAmount()

  return {
    board: createBoardMined(this.amountMined(), rows, columns),
    won: false,
    lost: false,
    showLevelSelection: false
  }
}

OnOpenField = (row, column) => {
  const board = cloneBoard(this.state.board)
  openField(board, row, column)
  const lost = hadExplosion(board)
  const won = wonGame(board)

  if(lost){
    showMine(board)
    Alert.alert('Peeeeeeeerdeu', 'Tente de novo!')
  }
  if(won){
    Alert.alert('Ganhou Parabens!!!')
  }

  this.setState({board, lost, won})
}

onLevelSelected = nivel =>{
  params.difficultLevel = nivel
  this.setState(this.createState())
}

  render(){
    return(
       <View style={styles.container}>
         <LevelSelection onLevelSelected={this.onLevelSelected} isVisible={this.state.showLevelSelection}
         onCancel={() => this.setState({showLevelSelection: false})} />
         <Header onFlagsLeft={ this.amountMined() - flagUsed(this.state.board)} //- flagUsed(this.state.board)}
         onNewGame={() => this.setState(this.createState())} onFlagPress={() => this.setState({showLevelSelection: true})}/>
        <View style={styles.board}>
          <MinesField board={this.state.board} onSelectField={this.onSelectField} OnOpenField={this.OnOpenField}/>
        </View>
       </View>
    )
  }
}
const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:"flex-end"
  },
  board:{
    alignItems:"center",
    backgroundColor: '#AAA'
  }
})
