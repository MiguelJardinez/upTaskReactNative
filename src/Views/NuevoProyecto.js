import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'; 
import { Title, TextInput, Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

//Importando los estilo globales 
import globalStyles from '../Styles/globlaStyles';

//Importando componentes 
import SnackError from '../components/SnackError';

//Apollo 
import { gql, useMutation} from '@apollo/client'

const NUEVO_PROYECTO = gql`
  mutation nuevoProyecto($input: proyectoInput){
    nuevoProyecto( input: $input){
      nombre
    }
  }
`;

//Actualizar Chache
const OBTENER_PROYECTOS = gql`
  query obtenerProyectos {
    obtenerProyectos {
      id
      nombre
    }
  }
`;

const NuevoProyecto = () => {

  const navigation = useNavigation();

  const [ mensaje, setMensaje ] = useState('');
  const [ visible, setVisible ] = useState(false)
  const [ proyecto, setProyecto ] = useState('');

  //Apollo Hooks 
  const [ nuevoProyecto ] = useMutation(NUEVO_PROYECTO, {
    update(cache, { data: { nuevoProyecto }}) {
      const { obtenerProyectos } = cache.readQuery({ query: OBTENER_PROYECTOS });
      cache.writeQuery({
        query: OBTENER_PROYECTOS,
        data:{ obtenerProyectos: obtenerProyectos.concat([nuevoProyecto]) }
      })
    }
  })

  const agregarProyecto = async () => {

    if( !proyecto ) {
      setVisible(true);
      setMensaje('El campo no puede estar vacio');
      return
    }
    if( proyecto.length < 5 ) {
      setVisible(true);
      setMensaje('El proyecto debe tener mas de 5 caracteres');
      return
    }


    //Guardando el nuevo proyecto
    try {
      const { data } = await nuevoProyecto ({
        variables: {
          input: {
            nombre: proyecto
          }
        }
      });

      navigation.navigate('Home')
      
    } catch (error) {
      console.log(error);
    }

  }

  return (
    <>
      <View style={ globalStyles.contenedor }>
        <View style={ styles.formulario }> 
          <View>
            <Title
              style={styles.tituloFormulario}
            >Agrega un nuevo proyecto</Title>
          </View>

          <View>
            <TextInput 
              mode="outlined"
              label="Nombre del poryecto"
              placeholder='ingresa el nombre del nuevo proyecto'
              value={proyecto}
              onChangeText={ texto => setProyecto(texto)}
              style={styles.input}
            />
            <Button
              mode='contained'
              onPress={ agregarProyecto }
            >Agregar Proyecto</Button>
          </View>

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

export default NuevoProyecto

const styles = StyleSheet.create({
  formulario: {
    flex: 1, 
    justifyContent: 'center'
  },
  tituloFormulario: {
    color: '#1c81ad',
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
    textTransform: 'capitalize',
    marginBottom: 20
  },
  input: {
    marginBottom: 40
  }
})
