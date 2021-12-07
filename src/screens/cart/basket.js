import React from 'react';
import {View , Text ,StyleSheet ,TouchableOpacity} from 'react-native'
import Style from '../../utility/appStyle'

const BasketScreen=(props)=>{


    return( 
    
        <View style={Style.container}>
            <Text>Basket</Text>
        </View>
    
    )

}

export const screenOptions = (navData)=>{
    return{
        headerTitle: 'Basket'
    }
}
export default BasketScreen;