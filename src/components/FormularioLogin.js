import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { TextInput, Button } from 'react-native-paper';


const FormularioLogin = ({ setMensaje, setVisible }) => {

  const [ nombre, setNombre ] = useState('');
  const [ password, setPassword ] = useState('');

  const ingresarCuenta = () => {

    if( !nombre || !password ) {
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

  }

  return (
    <>
      <TextInput
        mode="outlined"
        label="Correo electronico"
        value = { nombre }
        style={styles.input}
        onChangeText = { texto => setNombre(texto) }
      />

      <TextInput 
        mode="outlined" 
        label="Contraseña" 
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
