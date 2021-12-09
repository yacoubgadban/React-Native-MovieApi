import React,{useState,useEffect} from 'react';
import {View , Text ,StyleSheet ,TouchableOpacity,FlatList ,Image} from 'react-native'
import Style from '../../utility/appStyle'

const EpisodeScreen=(props)=>{
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);
  
    const getMovies = async () => {
       try {
        const url='https://www.breakingbadapi.com/api/episodes/'
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
           <Text style={{fontSize:24,fontWeight:'bold' ,color:'#F8F8FF'}}>EPISODE</Text>
             </View>
            <FlatList style={{width:'100%',marginTop: 20}}
            data={data}
            key={item=>item.episode_id}
            renderItem={({item})=>(
                <View style={{  margin: 15 , backgroundColor: '#F8F8FF'  }}>
                    
                    <TouchableOpacity style={{padding:15}} onPress={()=>{props.navigation.navigate('Details',{episode:item})}}>
                        <Text style={{fontSize:20,color:'#006400'}}>{item.title}</Text>
                        <View style={{flexDirection:'row',paddingTop:15}}>
                            <Text>Season {item.season}</Text>
                            <Text>| Episode {item.episode}</Text>
                            <Text style={{paddingLeft:60}}>Air date {item.air_date}</Text>
                        </View>
                        
                    </TouchableOpacity>

                </View>
            )}
            />
        </View>
    
    )

}

export const screenOptions = (navData)=>{
    return{
        headerTitle: 'Catalog'
    }
}
export default EpisodeScreen;