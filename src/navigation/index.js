import React from 'react';
import {createStackNavigator} from '@react-navigation/stack'
import {createMaterialBottomTabNavigator}from '@react-navigation/material-bottom-tabs'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

//Step 2 - import all screens
//Dashboard
import DashboardScreen ,{screenOptions as DashboardScreenOptions} from '../screens/dashboard'
import OverviewScreen ,{screenOptions as OverviewScreenOptions} from '../screens/dashboard/overview'
import SalesScreen ,{screenOptions as SalesScreenOptions} from '../screens/dashboard/sales'

//Catalog
import CatalogScreen ,{screenOptions as CatalogScreenOptions} from '../screens/catalog'
import ProductScreen ,{screenOptions as ProductScreenOptions} from '../screens/catalog/products'
import ProductDetailsScreen ,{screenOptions as  ProductDetailsScreenOptions} from '../screens/catalog/productDetails'

//Cart
import CartScreen ,{screenOptions as CartScreenOptions} from '../screens/cart'
import BasketScreen ,{screenOptions as BasketScreenOptions} from '../screens/cart/basket'
import PaymentScreen ,{screenOptions as PaymentScreenOptions} from '../screens/cart/payment'



//Step 3 - Create const for each stack 
const DashboardStackNavigator =createStackNavigator();
export const DashboardStack=()=>{
    return(
        <DashboardStackNavigator.Navigator>
                <DashboardStackNavigator.Screen name="dashboard" component={DashboardScreen} options={DashboardScreenOptions}/>
                <DashboardStackNavigator.Screen name="Overview" component={OverviewScreen} options={OverviewScreenOptions}/>
                <DashboardStackNavigator.Screen name="Sale" component={SalesScreen} options={SalesScreenOptions}/>
        </DashboardStackNavigator.Navigator>
    )
}



const CatalogStackNavigator =createStackNavigator();
export const CatalogStack=()=>{
    return(
        <CatalogStackNavigator.Navigator>
                <CatalogStackNavigator.Screen name="catalog" component={CatalogScreen} options={CatalogScreenOptions}/>
                <CatalogStackNavigator.Screen name="product" component={ProductScreen} options={ProductScreenOptions}/>
                <CatalogStackNavigator.Screen name="productDetails" component={ProductDetailsScreen} options={ProductDetailsScreenOptions}/>
        </CatalogStackNavigator.Navigator>
    )
}

const CartStackNavigator =createStackNavigator();
export const CartStack=()=>{
    return(
        <CartStackNavigator.Navigator>
                <CartStackNavigator.Screen name="cart" component={CartScreen} options={CartScreenOptions}/>
                <CartStackNavigator.Screen name="basket" component={BasketScreen} options={BasketScreenOptions}/>
                <CartStackNavigator.Screen name="payment" component={PaymentScreen} options={PaymentScreenOptions}/>
        </CartStackNavigator.Navigator>
    )
}

//Step 4 Create Bottom Bar

const AppBottomBarNavigator=createMaterialBottomTabNavigator();
export const AppBottomBar=()=>{

    return(
        <AppBottomBarNavigator.Navigator>
            <AppBottomBarNavigator.Screen 
                    options={{tabBarLabel : 'Main' , tabBarIcon:({}) => ( <MaterialCommunityIcons name="home" color="#FFFAF0" size={26}/>) }}
                    name="Dashboard" component={DashboardStack} />       
            <AppBottomBarNavigator.Screen 
                    options={{tabBarLabel : 'Catalog' , tabBarIcon:({}) => ( <MaterialCommunityIcons name="menu" color="#FFFAF0" size={26}/>) }}
                    name="Catalog" component={CatalogStack}/>
            
            <AppBottomBarNavigator.Screen 
                       options={{tabBarLabel : 'Cart' , tabBarIcon:({}) => ( <MaterialCommunityIcons name="cart" color="#FFFAF0" size={26}/>) }}
                       name="Cart" component={CartStack}/>


        </AppBottomBarNavigator.Navigator>
    )

}

