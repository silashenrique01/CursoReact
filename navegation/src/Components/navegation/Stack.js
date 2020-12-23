import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import TelaA from '../../Views/TelaA';
import TelaB from '../../Views/TelaB';
import TelaC from '../../Views/TelaC';
import PassoStack from '../PassoStack';

const Stack = createStackNavigator();

export default () => (
  <Stack.Navigator initialRouteName="TelaA">
    <Stack.Screen name="TelaA" options={{title: 'Informações iniciais'}}>
      {(props) => (
        <PassoStack {...props} avancar="TelaB">
          <TelaA />
        </PassoStack>
      )}
    </Stack.Screen>

    <Stack.Screen name="TelaB">
      {(props) => (
        <PassoStack {...props} voltar avancar="TelaC">
          <TelaB />
        </PassoStack>
      )}
    </Stack.Screen>
    <Stack.Screen name="TelaC">
      {(props) => (
        <PassoStack {...props} voltar avancar="TelaC">
          <TelaC {...props} />
        </PassoStack>
      )}
    </Stack.Screen>
  </Stack.Navigator>
);
