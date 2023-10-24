import React,{useState,useContext} from 'react'
import {Modal, Text, SafeAreaView,StyleSheet,TouchableOpacity,View,TextInput, Alert, Dimensions, Image, Button} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator, Header} from '@react-navigation/native-stack';
import Home from '../screens/home';
import Login from '../screens/IniciarSesion';
import Cultura from '../screens/Cultura';
import Horarios from '../screens/Horarios';
import Calendario from '../screens/Calendario';
import Preshow from '../screens/Preshow'
import Usuarios from '../screens/Usuarios';
import Icon from 'react-native-vector-icons/Feather';
import { DrawerContentScrollView, DrawerItem, DrawerItemList, createDrawerNavigator } from '@react-navigation/drawer';
import {MaterialIcons, MaterialCommunityIcons, Ionicons, FontAwesome, Entypo} from '@expo/vector-icons'; 

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

export default function SideDrawer(){
  return (
    <NavigationContainer>
    <Drawer.Navigator 
      drawerContent={
        (props) => {
          return(
            <SafeAreaView>
              <View style={{
                height:190,
                width:'100%',
                justifyContent:"center",
                alignItems:"center",
                backgroundColor:"#7E0404",
                shadowColor:"black",
                elevation:3,
                shadowRadius:50,
                marginBottom:20
              }}>
                <FontAwesome name="user-circle" size={70} color="#fff"/>
                <Text style={{marginTop:10,color:"white", fontSize:16, textAlign:"center", marginLeft:10, marginRight:10}}>Guadalupe Salazar Castillo</Text>
                <Text style={{color:"#E0D5D5", fontSize:12}}>625560</Text>
              
              </View>
                <DrawerItemList {...props}/>
            </SafeAreaView>
          )
        }
      }
      screenOptions={{
        drawerStyle:{
          backgroundColor:"#8B1212",
        },
        headerStyle:{
          backgroundColor:"#8B1212" 
        },
        headerTintColor:"white",
        headerBackVisible:false,
        headerTitleAlign:"center",
        drawerActiveTintColor:"white",
        drawerInactiveTintColor:"#E0D5D5"
      }}
       
      >
      <Drawer.Screen name="Home" component={Home} options={{
            title:"Cinemex Candiles",
            drawerIcon:()=>(
              < MaterialCommunityIcons name="home" size={21} marginLeft={8} marginRight={-15} color="white" />
            )
         }}/>
      <Drawer.Screen name="Cultura" component={Cultura} options={{
            title:"Cultura Cinemex",
            drawerIcon:()=>(
              < MaterialCommunityIcons name="movie-open" size={21} marginLeft={8} marginRight={-15} color="white" />
            )
         }}/>
      <Drawer.Screen name="Horarios" component={Horarios} options={{
            title:"Horarios",
            drawerIcon:()=>(
              <Ionicons name="time-outline" size={21} marginLeft={8} marginRight={-15} color="white"/>
            )
         }}/>
      <Drawer.Screen name="Calendario" component={Calendario} options={{
            title:"Calendario",
            drawerIcon:()=>(
              <FontAwesome name="calendar" size={21} marginLeft={8} marginRight={-15} color="white"/>
            )
         }}/>
      <Drawer.Screen name="Preshow" component={Preshow} options={{
            title:"Preshow",
            drawerIcon:()=>(
              <Entypo name="megaphone" size={21} marginLeft={8} marginRight={-15} color="white"/>
            )
         }}/>
      <Drawer.Screen name="Usuarios" component={Usuarios} options={{
            title:"Usuarios",
            drawerIcon:()=>(
              <FontAwesome name="user" size={21} marginLeft={12} marginRight={-15} color="white"/>
            )
         }}/>
    </Drawer.Navigator>
    </NavigationContainer>
  );
}