import React, { useState } from 'react'
import { StyleSheet, View, Image } from 'react-native';
import { Paragraph, Title, Snackbar  } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

//importando los estilos globales 
import globlaStyles from '../Styles/globlaStyles';

//Importando componentes 
import FormularioRegistro from '../components/FormularioRegistro';
import SnackError from '../components/SnackError';


const RegisterScreen = () => {

  const navigation = useNavigation();

  const [ mensaje, setMensaje ] = useState('');
  const [ visible, setVisible ] = useState(false);


  return (
    <>
      <View style={globlaStyles.contenedor}>

        <View style={styles.logo}>
          <View style={styles.imagenLogo}>
            <Image 
              source={require('../img/logo.png')}
              style={styles.imagen}
              resizeMode='contain'
            />
            <Title style={styles.tituloLogo}>Organiza Tus Tareas</Title>
          </View>
        </View>

        <View>

          <FormularioRegistro 
            setMensaje={setMensaje}
            setVisible={setVisible}
          />

        </View>

        <View style={styles.registro}>
          <Paragraph style={styles.texto}>¿Ya tienes una cuenta?</Paragraph>
          <Paragraph
            style={styles.registroButton}
            onPress={ () => navigation.navigate('Login')}
          >Inicia Sesión</Paragraph>
        </View>

        <SnackError 
          visible={visible}
          mensaje={mensaje}
          setVisible={setVisible}
        ></SnackError>

      </View>
    </>
  )
}

export default RegisterScreen

const styles = StyleSheet.create({
  logo:{
    height: '40%',
  },
  tituloLogo: {
    color: '#0179F1',
    marginTop: 16,
    fontWeight: 'bold',
    fontSize: 24
  },
  imagenLogo: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imagen: {
    height: '55%',
    width: '50%'

  },
  registro:{
    height: '10%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  texto:{
    fontSize: 14,
    marginRight: 16
  },
  registroButton: {
    fontSize: 14,
    color: 'blue',
    fontWeight: 'bold',
    marginRight: 16
  },
  input: {
    marginBottom: 20
  }
})
