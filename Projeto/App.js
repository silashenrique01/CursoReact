import React, { Component } from 'react'
import { Platform, Text, StyleSheet, View } from 'react-native'
import Display from './src/components/Display'
import Botao from './src/components/Button'

const initialState = {
  displayValue: '0',
  clearDisplay: false,
  values: [0, 0],
  current: 0,
  operation: null
}

export default class App extends Component {



  state = {
    ...initialState
  }

  addDigit = n => {
    
    const clearDisplay = this.state.displayValue === '0' || this.state.clearDisplay
   
    if(n === '.' && !clearDisplay && this.state.displayValue.includes('.') ){
      return
    } 
    const currentValue = clearDisplay ? '' : this.state.displayValue
    const displayValue = currentValue + n
    this.setState({displayValue, clearDisplay: false})

    if(n !== '.'){
      const newValue = parseFloat(displayValue)
      const values = [...this.state.values]
      values[this.state.current] = newValue
      this.setState({values})
    }
  }

  ClearMemory = () => {
    this.setState({ ...initialState })
  }

  setOperation = op => {
      if(this.state.current === 0){
        this.setState({operation: op, current: 1, clearDisplay: true})
      }else{
        const equals = op === '='
        const values = [...this.state.values]
        try{
          values[0] = eval(`${values[0]} ${this.state.operation} ${values[1]}`)
        }catch{
          values[0] = this.state.values[0]
        }

          values[1] = 0
          this.setState({
            displayValue: `${values[0]}`,
            operation: equals ? null : op,
            current: equals ? 0 : 1,
            clearDisplay: !equals,
            values,
          })
      }
    }

  render() {
    return (
      <View style={style.container}>
        <Display value={this.state.displayValue} />
        <View style={style.buttons}>
          <Text>
            <Botao label="AC" buttonTriple onClick={this.ClearMemory} />
            <Botao buttonOperation label="/" onClick={this.setOperation} />
            <Botao label="7" onClick={this.addDigit} />
            <Botao label="8" onClick={this.addDigit} />
            <Botao label='9' onClick={this.addDigit} />
            <Botao buttonOperation label="*" onClick={this.setOperation} />
            <Botao label="4" onClick={this.addDigit} />
            <Botao label="5" onClick={this.addDigit} />
            <Botao label="6" onClick={this.addDigit} />
            <Botao buttonOperation label="-" onClick={this.setOperation} />
            <Botao label="1" onClick={this.addDigit} />
            <Botao label="2" onClick={this.addDigit} />
            <Botao label="3" onClick={this.addDigit} />
            <Botao buttonOperation label="+" onClick={this.setOperation}/>
            <Botao label="0" buttonDouble onClick={this.addDigit} />
            <Botao label="." onClick={this.addDigit} />
            <Botao buttonOperation label="=" onClick={this.setOperation}/>
      </Text>
        </View>
      </View>
    )
  }
}


const style = StyleSheet.create({
  container: {
    flex: 1
  },
  buttons: {
    flexDirection: "row",
    flexWrap: "wrap",


  }
})



