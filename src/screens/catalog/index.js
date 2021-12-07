import React from 'react';
import {View , Text ,StyleSheet ,TouchableOpacity} from 'react-native'
import Style from '../../utility/appStyle'

const CatalogScreen=(props)=>{


    return( 
    
        <View style={Style.container}>
            <Text>Catalog</Text>
        </View>
    
    )

}

export const screenOptions = (navData)=>{
    return{
        headerTitle: 'Catalog'
    }
}
export default CatalogScreen;