import React ,{useState,useEffect}from 'react';
import {View , Text ,StyleSheet ,TouchableOpacity ,FlatList , Image} from 'react-native'
import Style from '../../utility/appStyle'

const QuoteScreen=(props)=>{

    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);
  
    const getMovies = async () => {
       try {
        const url='https://www.breakingbadapi.com/api/quotes/'
        const response = await fetch(url,{
          method: 'GET',
        });
        const json = await response.json();
        setData(json);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }
    useEffect(() => {
      getMovies();
    }, []);
  

    return( 
    
        <View style={Style.container}>
           <Image style={{width:'100%',height:230,marginTop:35, alignItems:'center' ,justifyContent: 'center'}} source={{uri:'https://i.ytimg.com/vi/ceqOTZnhgY8/maxresdefault.jpg'}}/>      
           <View style={{alignItems:'center' ,justifyContent: 'center', backgroundColor:'#006400' ,width:'100%',height:40,}}>
           <Text style={{fontSize:24,fontWeight:'bold' ,color:'#F8F8FF',fontStyle:'italic'}}>QUOTE</Text>
           </View>
               <FlatList style={{width:'100%' ,margin:15 , marginTop:40}}
                data={data}
                key={item => item.quote_id}
                renderItem={ ({item}) =>(
                    <View style={{marginTop: 15, backgroundColor: '#808080' ,borderRadius:10,padding:10 }}>
                        <Text style={{color:'#006400' ,fontWeight:'bold',fontSize:18 ,fontStyle:'italic'}}>{item.quote}</Text>
                        <Text style={{fontSize:15 , marginTop:5 ,color: '#F8F8FF' ,fontStyle:'italic'}}>{item.author}</Text>
                    </View>
                   
                )}
               />
           </View>
    
    )

}

export const screenOptions = (navData)=>{
    return{
        headerTitle: 'Quote'
    }
}
export default QuoteScreen;