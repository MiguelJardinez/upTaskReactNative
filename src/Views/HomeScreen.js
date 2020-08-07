import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { FAB } from 'react-native-paper'; 
import { useNavigation } from '@react-navigation/native'

//importando los estilos globales
import globalStyles from '../Styles/globlaStyles';

const HomeScreen = () => {

  const navigation = useNavigation();

  return (
    <>
      <FAB 
        icon="plus"
        style={styles.fab}
        onPress={ () => navigation.navigate('Nueva')}
      />
      <View style={globalStyles.contenedor}>
        <Text>Hola mundo soy el home</Text>
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
