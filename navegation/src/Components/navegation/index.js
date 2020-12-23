import React from 'react';
import {SafeAreaView, Text} from 'react-native'
import {NavigationContainer} from '@react-navigation/native'
import Tab  from './Tab'
import Stack from './Stack';
import Drawer from './Drawer';

export default props => (

    <SafeAreaView style={{flex: 1}}> 
        <NavigationContainer>
            <Tab />
      {/*       <Stack /> */}
            {/* <Drawer /> */}
        </NavigationContainer>
    </SafeAreaView>


)