import React from 'react';
import {View , Text ,StyleSheet ,TouchableOpacity} from 'react-native'
import Style from '../../utility/appStyle'

const ProductsScreen=(props)=>{


    return( 
    
        <View style={Style.container}>
            <Text>Products</Text>
        </View>
    
    )

}

export const screenOptions = (navData)=>{
    return{
        headerTitle: 'Products'
    }
}
export default ProductsScreen;