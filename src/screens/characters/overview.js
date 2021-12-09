import React from 'react';
import {View , Text ,Image} from 'react-native'
import Style from '../../utility/appStyle'

const OverviewScreen=(props)=>{

    const detail=props.route.params.char
    const bgcolor=props.route.params.color
    return( 
    
        <View style={{flex: 1 , justifyContent: 'center'}}>
                <View  style={{alignItems:'center' , justifyContent: 'center' ,marginTop:50}}>
                    <Image style={{width:400 , height:510 }} source={{uri:detail.img}}/>
                    <Text style={{backgroundColor:bgcolor , width:'100%' , textAlign: 'center' ,padding:10 , fontSize:20,color:'#F8F8FF' }}>{detail.status}</Text> 
                </View>
                <View style={{justifyContent:'center' ,padding:20}}>
                    <Text style={{fontSize:22}}><Text style={{fontWeight:'bold' ,fontSize:24 ,color:'#006400'}}>Name : </Text>{detail.name}</Text>
                    <Text style={{fontSize:22}}><Text style={{fontWeight:'bold' ,fontSize:24,color:'#006400'}}>Nickname : </Text>{detail.nickname}</Text>
                    <Text style={{fontSize:22}}><Text style={{fontWeight:'bold' ,fontSize:24,color:'#006400'}}>Portrayed : </Text>{detail.portrayed}</Text>
                    <Text style={{fontSize:22}}><Text style={{fontWeight:'bold' ,fontSize:24,color:'#006400'}}>Appearance : </Text>{detail.appearance+" "}</Text>
                </View>        
        </View>
    
    )

}

export const screenOptions = (navData)=>{
    return{
        headerTitle: 'Overview'
    }
}
export default OverviewScreen;