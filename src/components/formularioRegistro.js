import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { TextInput, Button } from 'react-native-paper';

const FormularioRegistro = ({ setMensaje, setVisible }) => {

  const [ nombre, setNombre ] = useState(''); 
  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');

  const registrarUsuario = () => {
    
    const usuario = { nombre, email, password }

    //Validar Formulario 
    if( !nombre || !password || !email ){
      //Mostrar error 
      setVisible(true); 
      setMensaje('Todos los campos son obligatorios'); 
      return; 
    }
    
    //Contraseña de al menos 6 caracteres 
    if( password.length < 6 ){
      //Mostrar error
      setVisible(true)
      setMensaje('La contraseña debe ser al menos de 6 caracteres')
      return;
    }

    //Guargar al usuario
    console.log(usuario)
  }

  return (
    <>
      <TextInput
            mode='outlined'
            label='Nombre'
            style={styles.input}
            onChangeText={ texto => setNombre(texto)}
            value={nombre}
          />

          <TextInput
            mode='outlined'
            label='Correo electronico'
            style={styles.input}
            onChangeText={ texto => setEmail(texto)}
            value={email}
          />

          <TextInput 
            mode='outlined'
            label='Contraseña'
            style={styles.input}
            onChangeText={ texto => setPassword(texto)}
            value={password}
          />

          <Button
            mode='contained'
            style={styles.input}
            onPress={ () => registrarUsuario() }
          >Registrate</Button>
          
    </>
  )
}

export default FormularioRegistro

const styles = StyleSheet.create({
  input: {
    marginBottom: 20
  }
})
