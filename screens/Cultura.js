import {Modal,Button, Text, SafeAreaView,StyleSheet,TouchableOpacity,View,TextInput, Alert, Dimensions, Image} from 'react-native'
import {MaterialIcons, MaterialCommunityIcons, Ionicons, FontAwesome, Entypo} from '@expo/vector-icons'; 
import { useState } from 'react';

function Cultura(){
 const [shouldShow, setshouldShow] = useState(true);


  return(
    <View style={{flex:1, alignItems: 'center', marginTop:40}}>
      {
        shouldShow ? (
          <Text>HOLA</Text>
        ): null
      }
      <Button title="Mostrar" onPress={() => setshouldShow(!shouldShow)}/>

    </View>
  );
}
const styles = StyleSheet.create({
  cont: {
      height:'8%',
      width:'82%',
      flexDirection: 'row', 
      alignItems: "center",
      backgroundColor:"#D9D9D9",
      borderRadius:10,
      shadowColor: "#000",
      shadowRadius: 6.68,
      elevation: 5,
      marginBottom:17,
  },
})

export default Cultura;