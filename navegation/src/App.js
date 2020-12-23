import React from 'react';
import { SafeAreaView, Text} from 'react-native'
import TelaA from './Views/TelaA';
import TelaB from './Views/TelaB';
import TelaC from './Views/TelaC';

export default props => (


<SafeAreaView style={{flex: 1}}>
    <TelaA/>
    <TelaB/>
    <TelaC/>
</SafeAreaView>

)