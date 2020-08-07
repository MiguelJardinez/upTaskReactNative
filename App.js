import 'react-native-gesture-handler'
import React from 'react'
import { View, Text } from 'react-native'; 
import { Provider as PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native'; 

//importando los estilos Globales
import globlaStyles from './src/Styles/globlaStyles'; 
import theme from './src/Styles/globalThemeStyles';

//Importanto todas las pantallas de la aplicacion
import Link from './src/Link/Link';

const App = () => {
  return (
    <>
      <PaperProvider theme={theme}>
        <NavigationContainer>
          <Link />
        </NavigationContainer>
      </PaperProvider>
    </>
  )
}

export default App
