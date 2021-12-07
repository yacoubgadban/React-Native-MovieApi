import React from 'react';
import {View , Text ,StyleSheet ,TouchableOpacity} from 'react-native'
import Style from '../../utility/appStyle'

const SalesScreen=(props)=>{


    return( 
    
        <View style={Style.container}>
            <Text>Sales</Text>
        </View>
    
    )

}

export const screenOptions = (navData)=>{
    return{
        headerTitle: 'Sales'
    }
}
export default SalesScreen;