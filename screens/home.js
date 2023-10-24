import {Modal, Text, SafeAreaView,StyleSheet,TouchableOpacity,View,TextInput, Alert, Dimensions, Image, Button} from 'react-native'
import {MaterialIcons, MaterialCommunityIcons, Ionicons, FontAwesome, Entypo} from '@expo/vector-icons'; 

const Home = ({navigation}) => {
    return(
      <View style={{flex:1, alignItems: 'center', marginTop:40}}>
        <TouchableOpacity style={styles.cont}  onPress={()=>navigation.navigate('Cultura')} >
            < MaterialCommunityIcons name="movie-open" size={28} marginLeft={10} />
            <Text style={{fontWeight:500, fontSize:16, marginLeft:10}}>Cultura Cinemex</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.cont}  onPress={()=>navigation.navigate('Horarios')} >
            <Ionicons name="time-outline" size={28} marginLeft={10} />
            <Text style={{fontWeight:500, fontSize:16, marginLeft:10}} >Horarios</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.cont}  onPress={()=>navigation.navigate('Calendario')} >
            <FontAwesome name="calendar" size={28} marginLeft={10} />
            <Text style={{fontWeight:500, fontSize:16, marginLeft:10}}>Calendario</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.cont}  onPress={()=>navigation.navigate('Preshow')} >
            <Entypo name="megaphone" size={28} marginLeft={10} />
            <Text style={{fontWeight:500, fontSize:16, marginLeft:10}}>Pre show</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.cont}  onPress={()=>navigation.navigate('Usuarios')} >
            <FontAwesome name="user" size={29} marginLeft={14} />
            <Text style={{fontWeight:500, fontSize:16, marginLeft:14}}>Usuarios</Text>
        </TouchableOpacity>

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

export default Home;
