import React from 'react';
import {View , Text ,StyleSheet ,TouchableOpacity} from 'react-native'
import Style from '../../utility/appStyle'

const OverviewScreen=(props)=>{


    return( 
    
        <View style={Style.container}>
            <Text>Overview</Text>
        </View>
    
    )

}

export const screenOptions = (navData)=>{
    return{
        headerTitle: 'Overview'
    }
}
export default OverviewScreen;