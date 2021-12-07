import React from 'react';
import {View , Text ,StyleSheet ,TouchableOpacity} from 'react-native'
import Style from '../../utility/appStyle'

const DashboardScreen=(props)=>{


    return( 
    
        <View style={Style.container}>
            <Text>Dashboard</Text>
        </View>
    
    )

}

export const screenOptions = (navData)=>{
    return{
        headerTitle: 'Dashboard'
    }
}
export default DashboardScreen;