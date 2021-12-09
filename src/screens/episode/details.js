import React from 'react';
import {View , Text } from 'react-native'
import Style from '../../utility/appStyle'

const DetailsScreen=(props)=>{
    const detail = props.route.params.episode
    return( 
    
        <View style={Style.container}>
            <View style={{flex: 1 , width:'100%' ,marginTop:40}}>

            
            <View style={{backgroundColor:'#004d00' ,width:'100%' ,alignItems: 'center' ,height:250, justifyContent: 'center'}}>
                <Text style={{fontSize:28 ,color:'#F8F8FF'}}>{detail.title}</Text>
            </View>
            <View style={{alignItems:'center' ,justifyContent: 'center', backgroundColor:'#006400' ,width:'100%',height:40}}>
           <Text style={{fontSize:24,fontWeight:'bold' ,color:'#F8F8FF' }}>CHARACTERS</Text>
             </View>
             <View style={{alignItems:'center' ,justifyContent: 'center' ,marginTop:10}}>
                 {detail.characters.map((item , key) =>(
                <Text key={key} style={{fontSize:18 ,marginTop:5}}>{item}</Text>
                
                )
                )}
             </View>
        </View>
        </View>
    )

}

export const screenOptions = (navData)=>{
    return{
        headerTitle: 'ProductDetails'
    }
}
export default DetailsScreen;