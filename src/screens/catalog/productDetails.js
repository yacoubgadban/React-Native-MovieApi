import React from 'react';
import {View , Text ,StyleSheet ,TouchableOpacity} from 'react-native'
import Style from '../../utility/appStyle'

const ProductDetailsScreen=(props)=>{


    return( 
    
        <View style={Style.container}>
            <Text>ProductDetails</Text>
        </View>
    
    )

}

export const screenOptions = (navData)=>{
    return{
        headerTitle: 'ProductDetails'
    }
}
export default ProductDetailsScreen;