import {Modal, Text, SafeAreaView,StyleSheet,TouchableOpacity,View,TextInput, Alert, Dimensions, Image}  from 'react-native'
import {MaterialIcons, Ionicons} from '@expo/vector-icons';
import Svg, { Ellipse } from "react-native-svg";
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from "firebase/auth"
import {initializeApp} from "firebase/app"
import { firebaseConfig } from '../firebase-config';
import { useNavigation } from '@react-navigation/native';
import React,{useState,useContext} from 'react'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


  function SvgTop(){
        return (
    <Svg
    width={windowWidth}
    height={windowHeight+150}
    xmlns="http://www.w3.org/2000/svg"
    
  >
    <Ellipse
      rx={windowHeight-390}
      ry={windowWidth+80}
      cy={windowHeight-355}
      fill="#8B1212"
    />
  </Svg>
        )
    }
  
  function Login(){

    const [email,setEmail] = React.useState('')
    const [password,setPassword] = React.useState('')
    const  navigation = useNavigation();

    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);

    const createAccount = () => {
      createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log('Account created')
        const user = userCredential.user;
        console.log(user)
      })
      .catch(error => {
        console.log(error)
      })
    }

    const signIn = () => {
      signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
      console.log('Singned in')
      const user = userCredential.user;
      console.log(user)
      navigation.navigate('Home');
      })
      .catch(error => {
      console.log(error)
      })
  }

  return (

    <SafeAreaView  style={[styles.fondo]}>
        <SafeAreaView>
        <SvgTop></SvgTop>
        </SafeAreaView>
    
        <SafeAreaView style={[styles.contenido,]}>
            <Text
            style={[styles.titulo]}
            >
            Iniciar Sesión    
            </Text>
            <Text
            style={styles.subtitulo}>
            Nos da gusto verte por aquí 
            </Text>
            
            <View style={styles.input}>
            <Ionicons name="person-circle-outline" size={28} color="white" marginLeft={10} />
              <TextInput placeholder="Numero de empleado" style={styles.inputtxt} placeholderTextColor={"#A49D9D"} onChangeText={(text) => setEmail(text)}/>
            </View>

            <View style={styles.input}>
              <MaterialIcons name="lock" size={28} color="white" marginLeft={10} />
              <TextInput secureTextEntry={true} placeholder="Contraseña" style={styles.inputtxt} placeholderTextColor={"#A49D9D"} onChangeText={(text) => setPassword(text)}/>
            </View>

            <Image source = {require('../assets/cinemex.png')} marginLeft={5} style={{opacity:.8}}/>

            <View style={styles.botones}>

            <TouchableOpacity style={styles.btnInicio} onPress={()=>signIn()} >
              <Text style={styles.btnTxt} >Iniciar sesión</Text>
            </TouchableOpacity>
            </View>
      </SafeAreaView>  
      </SafeAreaView>
  )
}


const styles = StyleSheet.create({
    contenido: {
        position:"absolute",
        marginTop:100
    },
    fondo:{
      position:'absolute',
      flex:1,
      backgroundColor:"#0E0C0C",
    },
    titulo: {
        fontSize:36,
        color:"white",
        fontWeight:'500',
        textAlign:'left',
        marginTop:60,
        marginHorizontal:25,
    },
    subtitulo: {
        fontSize:15,
        color:"white",
        fontWeight:'400',
        textAlign:'left',
        marginHorizontal:25,
        marginTop:3,
        marginBottom:50
    },
    input: {
        marginTop:20,
        flexDirection: 'row', 
        height: 40,
        width:280,
        marginLeft:'8%',
        marginRight:'8%',
        marginBottom:10,
        borderBottomWidth: .4,
        borderColor:"white",     
    },
    inputtxt:{
        width:"100%",
        marginLeft:10,
        marginBottom:10,
        color: "white",
        opacity:.9,
    },
    btnInicio: {
      backgroundColor:'#534B4B',
      padding:10,
      marginTop:30,
      marginRight:5,
      borderRadius:30,
      width:140,
    },
    btnTxt: {
      textAlign: "center",
      color:'#FFF',
      fontSize:17,
      fontWeight:'600',
  },
  botones: {
      flexDirection: 'row',
      justifyContent: 'flex-end',
      alignItems: 'center',
},
})


export default Login;