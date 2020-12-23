import React from 'react'
import { createBottomTabNavigator, createDrawerNavigator } from '@react-navigation/drawer'
import TelaA from '../../Views/TelaA';
import TelaB from '../../Views/TelaB';
import TelaC from '../../Views/TelaC';
import TelaD from '../../Views/TelaD';

const Drawer = createDrawerNavigator()

export default props => (

    <Drawer.Navigator initialRouteName="TelaB">

        <Drawer.Screen name="TelaA" component={TelaA} />
        <Drawer.Screen name="TelaB" component={TelaB} />
        <Drawer.Screen name="TelaC" component={TelaC} />
        <Drawer.Screen name="TelaD" component={TelaD} />

    </Drawer.Navigator>
)