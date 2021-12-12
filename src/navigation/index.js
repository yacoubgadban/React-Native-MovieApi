import React from 'react';
import {createStackNavigator} from '@react-navigation/stack'
import {createMaterialBottomTabNavigator}from '@react-navigation/material-bottom-tabs'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Feather from 'react-native-vector-icons/Feather'

//Step 2 - import all screens

//Dashboard
import CharactersScreen ,{screenOptions as CharactersScreenOptions}from '../screens/characters/charactersIndex'
import OverviewScreen ,{screenOptions as OverviewScreenOptions} from '../screens/characters/overview'

//Catalog
import EpisodeScreen ,{screenOptions as EpisodeScreenOptions} from '../screens/episode/episodeIndex'
import DetailsScreen ,{screenOptions as  DetailsScreenOptions} from '../screens/episode/details'

//Cart
import QuoteScreen ,{screenOptions as QuoteScreenOptions} from '../screens/quote/quoteIndex'




//Step 3 - Create const for each stack 
const CharactersStackNavigator =createStackNavigator();
export const CharactersStack=()=>{
    return(
        <CharactersStackNavigator.Navigator screenOptions={{headerShown:false}}>
                <CharactersStackNavigator.Screen name="Characters" component={CharactersScreen} />
                <CharactersStackNavigator.Screen name="Overview" component={OverviewScreen} options={OverviewScreenOptions}/>
        </CharactersStackNavigator.Navigator>
    )
}



const  EpisodeStackNavigator =createStackNavigator();
export const  EpisodeStack=()=>{
    return(
        <EpisodeStackNavigator.Navigator screenOptions={{headerShown:false}}>
                <EpisodeStackNavigator.Screen  name="Episode" component={ EpisodeScreen} />
                <EpisodeStackNavigator.Screen name="Details" component={DetailsScreen} options={DetailsScreenOptions}/>
        </EpisodeStackNavigator.Navigator>
    )
}

const QuoteStackNavigator =createStackNavigator();
export const QuoteStack=()=>{
    return(
        <QuoteStackNavigator.Navigator screenOptions={{headerShown:false}}>
                <QuoteStackNavigator.Screen name="quote" component={QuoteScreen} options={QuoteScreenOptions} />
        </QuoteStackNavigator.Navigator>
    )
}

//Step 4 Create Bottom Bar

const AppBottomBarNavigator=createMaterialBottomTabNavigator();
export const AppBottomBar=()=>{

    return(
        <AppBottomBarNavigator.Navigator barStyle={{backgroundColor:'#006400' ,padding:3 ,fontStyle:'italic' }}>
            <AppBottomBarNavigator.Screen 
                   options={{tabBarLabel : 'Characters' , tabBarIcon:({}) => ( <MaterialCommunityIcons name="account-group" color="#FFFAF0" size={26}/>) }}
                    name="characters" component={CharactersStack} />       
            <AppBottomBarNavigator.Screen 
                    options={{tabBarLabel : 'Episodes' , tabBarIcon:({}) => ( <Feather name="tv" color="#FFFAF0" size={26}/>) }}
                    name="Episode" component={EpisodeStack}/>
            
            <AppBottomBarNavigator.Screen 
                       options={{tabBarLabel : 'Quotes' , tabBarIcon:({}) => ( <MaterialCommunityIcons name="comma" color="#FFFAF0" size={26}/>) }}
                       name="Quote" component={QuoteStack}/>


        </AppBottomBarNavigator.Navigator>
    )

}

