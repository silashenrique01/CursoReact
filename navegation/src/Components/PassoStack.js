import React from 'react';
import { View, Text, Button } from 'react-native'

export default props => (


                <View style={{ flex: 1 }}>
                        <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
                                {props.voltar ? <Button
                                        title=' Voltar '
                                        onPress={() => {
                                                props.navigation.goBack()
                                        }}
                                />
                                        : false
                                }

                                {props.avancar ? <Button
                                        title='Avançar'
                                        onPress={() => {
                                                props.navigation.navigate(props.avancar) //como o metodo navigate não é possivel chamar a mesma tela passando novos parametros
                                                /* props.navigation.push(props.avancar,
                                                        {
                                                                numero: parseInt(Math.random() * 100)
                                                        }
                                                        ) */
                                        }}
                                />
                                        : false
                                }
                        </View>

                        <View style={{ flex: 1 }}>
                                {props.children}
                        </View>
                </View>
)