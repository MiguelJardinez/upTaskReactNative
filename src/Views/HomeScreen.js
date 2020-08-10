import React, {  useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { FAB, Title, List, Divider, Text } from 'react-native-paper'; 
import { useNavigation } from '@react-navigation/native'

//importando los estilos globales
import globalStyles from '../Styles/globlaStyles';

//Apollo
import { gql, useQuery } from '@apollo/client'; 

const OBTENER_PROYECTOS = gql`
  query obtenerProyectos {
    obtenerProyectos {
      id
      nombre
    }
  }
`;

const HomeScreen = () => {

  const navigation = useNavigation();   
  
  //Apollo
  const { data, loading, error } = useQuery(OBTENER_PROYECTOS);
  if( loading ) return <Text>Cargando</Text>

  return (
    <>
      <FAB 
        icon="plus"
        style={styles.fab}
        onPress={ () => navigation.navigate('Proyecto')}
      />
      <View style={ globalStyles.contenedor }>
        <Title>Selecciona tu proyecto</Title>
        
        <View>
          <List.Section>
            { data.obtenerProyectos.map( proyecto => (
              <View
                key={proyecto.id} >
                <List.Item 
                  title={proyecto.nombre}
                  left={props => <List.Icon {...props} icon="format-list-checks" />}
                  right={props => <List.Icon {...props} icon="chevron-right" />}
                  onPress={ () => navigation.navigate('DetallesProyecto', proyecto)}
                />
                <Divider />
              </View>
            ))}
          </List.Section>
        </View>

      </View>
      

    </>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    bottom: 24,
    right: 24,
  }
})
