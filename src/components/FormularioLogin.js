import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

//async storage
import AsyncStorage from '@react-native-community/async-storage'; 

//Apollo
import { gql, useMutation } from '@apollo/client'; 
const AUTENTICAR_CUENTA = gql`
  mutation autenticarUsuario($input: autenticarInput ) {
    autenticarUsuario( input: $input ) {
      token
    }
}`;


const FormularioLogin = ({ setMensaje, setVisible }) => {

  const navigation = useNavigation();

  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');

  const [ autenticarUsuario ] = useMutation(AUTENTICAR_CUENTA);

  const ingresarCuenta = async () => {

    if( !email || !password ) {
      //Comprobando que todos los campos tengan informacion
      setVisible(true);
      setMensaje('Todos los campos son obligatorios');
      return;
    }

    if( password.length < 6 ) {
      //Comprobando que la contraseña se mayor a 6 caracteres
      setVisible(true);
      setMensaje('La contraseña debe de ser mayor a 6 caracteres');
      return;
    }

    try {
      const { data } = await autenticarUsuario({
        variables: {
          input: {
            email,
            password
          }
        }
      }); 
      const { token } = data.autenticarUsuario;

      //Colocar token en stoage
      await AsyncStorage.setItem('token', token); 

      //Redireccionar a los proyectos 
      navigation.navigate('Home')

    } catch (error) {
      setVisible(true);
      setMensaje(error.message);
    }

  }

  return (
    <>
      <TextInput
        mode="outlined"
        label="Correo electronico"
        value = { email }
        style={styles.input}
        onChangeText = { texto => setEmail(texto) }
      />

      <TextInput 
        mode="outlined" 
        label="Contraseña" 
        secureTextEntry={true}
        value = { password }
        style={styles.input} 
        onChangeText = { texto => setPassword(texto) }
      />
      <Button
        mode="contained"
        style={styles.input}
        onPress={ ingresarCuenta }>
        Iniciar Sesión
      </Button>
    </>
  );
};

export default FormularioLogin;

const styles = StyleSheet.create({
  input: {
    marginBottom: 20
  }
});
