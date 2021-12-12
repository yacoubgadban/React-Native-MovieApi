import React ,{useState,useEffect}from 'react';
import {View , Text ,StyleSheet ,TouchableOpacity,FlatList,ActivityIndicator , Image} from 'react-native'
import Style from '../../utility/appStyle'

const CharactersScreen=(props)=>{
  
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getMovies = async () => {
     try {
      const url='https://www.breakingbadapi.com/api/characters/'
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

  const changeColor=(status)=>{
    switch (status) {
      case 'Presumed dead':
        
      return '#FFD700';  
      
      case 'Alive':
        return '#006400';

        case 'Deceased':
          return '#B22222';
      default:
      }
     

  }
    return( 
      //style={{width:10,backgroundColor: {color},height:'100%'}}
        <View style={Style.container}>
          <Image style={{width:'100%',height:230,marginTop:35, alignItems:'center' ,justifyContent: 'center'}} source={{uri:'https://i.ytimg.com/vi/ceqOTZnhgY8/maxresdefault.jpg'}}/>
           
           <View style={{alignItems:'center' ,justifyContent: 'center', backgroundColor:'#006400' ,width:'100%',height:40,}}>
           <Text style={{fontSize:24,fontWeight:'bold' ,color:'#F8F8FF',fontStyle:'italic'}}>CHARACTERS</Text>
             </View>
           <View style={{ flex: 1, padding:10 ,width: '100%' }}>
      {isLoading ? <ActivityIndicator/> : (
        <FlatList style={{width:'100%'}}
        data={data}

          keyExtractor={item=>item.char_id}
          renderItem={ ({item}) =>( 
            
            <View style={{ marginTop: 15, borderRadius:20 , backgroundColor: '#808080'  }}>
              
            <TouchableOpacity style={{flexDirection:'row' , alignItems:'center' }} onPress={()=>{props.navigation.navigate("Overview",{char : item ,color:changeColor(item.status)})}}>
            <Image style={{width:80 , height:120}} source={{uri:item.img}}/>
            <View  style={{backgroundColor:changeColor(item.status) , width:10 , height:'100%'}} >
             <Text></Text>
            </View>
            <View style={{paddingLeft:10}}>
              <Text style={{color:'#006400' ,fontWeight:'bold',fontSize:18,fontStyle:'italic'}}>{item.name}</Text>
              <Text style={{fontSize:15 ,color:'#F8F8FF',fontStyle:'italic'}}>{item.nickname}</Text>
            </View>
           
            </TouchableOpacity>
            </View>
          )}
        />
      )}
    </View>
    
        </View>
    
    )

}


export default CharactersScreen;