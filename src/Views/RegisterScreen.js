import React from 'react'
import { StyleSheet, View, Image } from 'react-native';
import { TextInput, Paragraph, Button, Title } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

//importando los estilos globales 
import globlaStyles from '../Styles/globlaStyles';

const RegisterScreen = () => {

  const navigation = useNavigation();

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
          <TextInput
            mode='outlined'
            label='Nombre'
            value=''
            style={styles.input}
            />
          <TextInput
            mode='outlined'
            label='Correo electronico'
            value=''
            style={styles.input}
            />
          <TextInput 
            mode='outlined'
            label='Contraseña'
            style={styles.input}
            />
          <Button
            mode='contained'
            style={styles.input}
            onPress={() => navigation.navigate('Login')}
          >Registrate</Button>
        </View>

        <View style={styles.registro}>
          <Paragraph style={styles.texto}>¿Ya tienes una cuenta?</Paragraph>
          <Paragraph
            style={styles.registroButton}
            onPress={ () => navigation.navigate('Login')}
          >Inicia Sesión</Paragraph>
        </View>

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
