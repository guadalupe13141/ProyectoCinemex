import {Modal,FlatList, Text, SafeAreaView,StyleSheet,TouchableOpacity,View,TextInput, Alert, Dimensions, Image, ScrollView} from 'react-native'
import {MaterialIcons, MaterialCommunityIcons, Ionicons, FontAwesome, Entypo} from '@expo/vector-icons'; 
import { useState } from 'react';

function Cultura(){
 const [ShowMision, setShowMision] = useState(false);
 const [ShowVision, setShowVision] = useState(false);
 const [ShowMotores, setShowMotores] = useState(false);
 const [ShowValores, setShowValores] = useState(false);
 const [ShowJuramento, setShowJuramento] = useState(false);

  return(
    <ScrollView>
    <SafeAreaView style={{flex:1, alignItems: 'center', marginTop:24}}>
      <View style={styles.cont} backgroundColor="#76D0F3">
          <Text style={{fontWeight:700, fontSize:17, marginLeft:20}}>Mision</Text>
          <Text onPress={() => setShowMision(!ShowMision)} style={{marginLeft:185}}>
            {ShowMision ? (
                <FontAwesome name="minus-circle" size={28}/>
              ) : 
              <FontAwesome name="plus-circle" size={28}/>
            }
          </Text>
      </View>

      {
        ShowMision ? (
          <Text style={styles.text}>Dar a nuestros invitados la mejor experiencia de entretenimiento, 
            basada en el esfuerzo, talento y compromiso de todos, generando 
            valor, innovación y mucha diversión.</Text>
          
        ): null
      }


      <View style={styles.cont} backgroundColor="#55A884">
          <Text style={{fontWeight:700, fontSize:17, marginLeft:20}}>Visión</Text>
          <Text onPress={() => setShowVision(!ShowVision)} style={{marginLeft:189}}>
            {ShowVision ? (
                <FontAwesome name="minus-circle" size={28}/>
              ) : 
              <FontAwesome name="plus-circle" size={28}/>
            }
          </Text>
      </View>

      {
        ShowVision ? (
          <Text style={styles.text}>Ser la opción de entretenimiento preferida por nuestros 
          invitados en los países en donde operamos; reconocida por la ubicación, diseño y 
          confort de las instalaciones, la calidad y variedad de los productos y servicios
          que ofrecemos, la continua innovación tecnológica y la satisfacción de todos 
          nuestros invitados.</Text>
          
        ): null
      }


      <View style={styles.cont} backgroundColor="#FEF87B">
          <Text style={{fontWeight:700, fontSize:17, marginLeft:20}}>Motores</Text>
          <Text onPress={() => setShowMotores(!ShowMotores)} style={{marginLeft:172.5}}>
            {ShowMotores ? (
                <FontAwesome name="minus-circle" size={28}/>
              ) : 
              <FontAwesome name="plus-circle" size={28}/>
            }
          </Text>
      </View>

      {
        ShowMotores ? (
          <View>
            <Text style={styles.text}>
              {`\u25CF 𝗟𝗮𝘀 𝗽𝗲𝗿𝘀𝗼𝗻𝗮𝘀: Cinemex es su gente. Lo más valioso de la empresa son las personas por lo que nos comprometemos a propiciar su desarrollo  y capacitación, apoyarnos en la consecución de los resultados que cada uno debe obtener, a lograr satisfacción por el trabajo realizado y a generar el orgullo de pertenecer a Cinemex.\n\n`}
              {`\u25CF 𝗩𝗼𝗰𝗮𝗰𝗶𝗼́𝗻 𝗱𝗲 𝘀𝗲𝗿𝘃𝗶𝗰𝗶𝗼: Nuestra razón de ser son nuestros invitados. Dirigimos todas nuestras acciones y decisiones para lograr la satisfacción de las necesidades de nuestros clientes internos y externos, demostrando y fomentando una actitud de servicio, esfuerzo y responsabilidad en todo momento. Realizamos nuestro trabajo con entusiasmo para contribuir a fortalecer la imagen de liderazgo, profesionalismo y confiabilidad de la empresa.\n\n`}
              {`\u25CF 𝗧𝗿𝗮𝗯𝗮𝗷𝗼 𝗲𝗻 𝗘𝗾𝘂𝗶𝗽𝗼: Participamos de manera coordinada y entusiasta en la realización de nuestro trabajo como equipo que somos, colaboramos con actitud positiva aportando lo mejor de nuestra experiencia, conocimiento y capacidades con el propósito de lograr los objetivos y apoyar en la formación de los compañeros. Juntos conseguimos construir soluciones y logramos maximizar los resultados, porque nuestros éxitos son el reflejo de todo el equipo.`}
            </Text>
          </View>
        ): null
      }
      

      <View style={styles.cont} backgroundColor="#C27CAE">
          <Text style={{fontWeight:700, fontSize:17, marginLeft:20}}>Valores</Text>
          <Text onPress={() => setShowValores(!ShowValores)} style={{marginLeft:181}}>
            {ShowValores ? (
                <FontAwesome name="minus-circle" size={28}/>
              ) : 
              <FontAwesome name="plus-circle" size={28}/>
            }
          </Text>
      </View>

      {
        ShowValores ? (
          <View>
            <Text style={styles.text}>
              {`\u25CF 𝗜𝗻𝘁𝗲𝗴𝗿𝗶𝗱𝗮𝗱: Actuamos con rectitud, haciendo lo correcto conforme a las normas y reglas de la empresa y del país. Atendiendo siempre a la verdad, cumpliendo con lo que ofrecemos y esmerándonos en lograrlo. Hacemos un uso cuidadoso y con transparencia de la información y de los recursos que nos son asignados.\n\n`}
              {`\u25CF 𝗖𝗼𝗺𝗽𝗿𝗼𝗺𝗶𝘀𝗼: Somos ejemplo en todo lo que hacemos. Nos enfocamos en lograr altos estándares de desempeño, demostrando y fomentando una actitud de esfuerzo y responsabilidad; cada quien pone lo mejor de sí por convicción para lograr las metas y cumplir lo comprometido. \n\n`}
              {`\u25CF 𝗥𝗲𝘀𝗽𝗲𝘁𝗼: Damos a las personas un trato digno, cordial y tolerante. Reconocemos en todo momento los derechos, libertades y cualidades inherentes a la condición humana y su dignidad. Nos comunicamos con claridad y con fundamentos, siempre en un tono de respeto hacia los demás. Nos expresamos positivamente de las personas, evitando cualquier tipo de comentarios ofensivos o despectivos, sin distingo alguno por sus características individuales o nivel jerárquico. `}
            </Text>
          </View>
          
        ): null
      }


      <View style={styles.cont} backgroundColor="#A487BB">
          <Text style={{fontWeight:700, fontSize:17, marginLeft:20}}>Juramento</Text>
          <Text onPress={() => setShowJuramento(!ShowJuramento)} style={{marginLeft:152.5}}>
            {ShowJuramento ? (
                <FontAwesome name="minus-circle" size={28}/>
              ) : 
              <FontAwesome name="plus-circle" size={28}/>
            }
          </Text>
      </View>

      {
        ShowJuramento ? (
          <View>
            <Text style={styles.text}>
              1. Te prometemos una experiencia inolvidable de entretenimiento, 
              con el mejor servicio, comodidad y seguridad en nuestras instalaciones.{"\n\n"}
              2. Siempre serás bienvenido con una sonrisa.{"\n\n"}
              3. Nuestro servicio superará tus expectativas.{"\n\n"}
              4. Nuestro personal te brindará la amabilidad y el respeto que te mereces como nuestro invitado.{"\n\n"}
              5. Nuestras películas serán las mejores disponibles y serán exhibidas tal y como fueron concebidas 
              por sus realizadores, sin intermedios improvisados, con la tecnología más avanzada en proyección 
              y con un sistema de sonido sin paralelo.{"\n\n"}
              6. Nuestras dulcerías te ofrecerán los productos de la mejor calidad y siempre frescos; con 
              un servicio rápido, eficiente y amable.{"\n\n"}
              7. Nuestras instalaciones siempre lucirán impecables.{"\n\n"}
              8. Si te fallamos en alguna de nuestras promesas, por favor, háznoslo saber de inmediato.
            </Text>
          </View>
          
        ): null
      }
      <Text styles={{width:100}}></Text>
    </SafeAreaView>
    </ScrollView>
  );
}

const windowWidth = Dimensions.get('window').width;
 const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  cont: {
      height:53,
      width: windowWidth-60,
      flexDirection: 'row', 
      alignItems: "center",
      borderRadius:10,
      shadowColor: "#000",
      shadowRadius: 6.68,
      elevation: 10,
      marginTop:17,
  },
  text:{
      backgroundColor:"#DAD9D9",
      width: windowWidth-60,
      borderRadius:10,
      shadowColor: "#000",
      shadowRadius: 6.68,
      elevation: 5,
      textAlign:"justify",
      padding:12,
      fontSize:15,
      marginTop:8,
      lineHeight:23,
      
  }
})

export default Cultura;