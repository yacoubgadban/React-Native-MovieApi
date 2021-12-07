import React from 'react';
import {View , Text ,StyleSheet ,TouchableOpacity} from 'react-native'
import Style from '../../utility/appStyle'

const CartScreen=(props)=>{


    return( 
    
        <View style={Style.container}>
            <Text>Cart</Text>
        </View>
    
    )

}

export const screenOptions = (navData)=>{
    return{
        headerTitle: 'Cart'
    }
}
export default CartScreen;