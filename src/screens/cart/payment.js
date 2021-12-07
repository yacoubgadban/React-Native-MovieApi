import React from 'react';
import {View , Text ,StyleSheet ,TouchableOpacity} from 'react-native'
import Style from '../../utility/appStyle'

const PaymentScreen=(props)=>{


    return( 
    
        <View style={Style.container}>
            <Text>Payment</Text>
        </View>
    
    )

}

export const screenOptions = (navData)=>{
    return{
        headerTitle: 'Payment'
    }
}
export default PaymentScreen;