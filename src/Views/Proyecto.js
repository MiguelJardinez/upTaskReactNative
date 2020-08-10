import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, TextInput } from 'react-native-paper';

//Componentes
import SnackError from '../components/SnackError';

//Estilos globales
import globalStyles from '../Styles/globlaStyles';

const Proyecto = ({ route }) => {

  // console.log(route.params)
  const [ tarea, setTarea ] = useState('')
  const [ visible, setVisible ] = useState(false);
  const [ mensaje, setMensaje ] = useState(''); 

  const agregarTarea = async () => {
    if( !tarea ){
      setVisible(true); 
      setMensaje('Este campo es obligatorio')
      return;
    }
    if( tarea.length < 5){
      setVisible(true);
      setMensaje('EL campo debe tener mas de 3 caracteres');
      return; 
    }
  }

  return (
    <>
      <View style={globalStyles.contenedor}>
        <View>
          <TextInput 
            style={styles.input}
            mode='outlined'
            label='Nueva Tarea'
            placeholder='Agrega una nueva tarea'
            value={tarea}
            onChangeText={ texto => setTarea(texto)}
          />
          <Button
            style={styles.input}
            mode='contained'
            onPress={ agregarTarea }
          >Agregar Tarea</Button>
        </View>

        <SnackError 
          visible={ visible }
          setVisible = { setVisible }
          mensaje = { mensaje }
        />
      </View>
    </>
  )
}

export default Proyecto

const styles = StyleSheet.create({
  input: {
    marginBottom: 20
  }
})
