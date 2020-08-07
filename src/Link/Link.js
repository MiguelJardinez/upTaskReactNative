import React from 'react'
import { Text, View } from 'react-native'; 
import { createStackNavigator } from '@react-navigation/stack';

//importando todas las vistas de la aplicacion
import HomeScreen from '../Views/HomeScreen'; 
import LoginScreen from '../Views/LoginScreen'; 
import RegisterScreen from '../Views/RegisterScreen'; 
import NuevaTarea from '../Views/NuevaTarea';

//Inicializando la navegacion de stack
const Stack = createStackNavigator(); 

const Link = () => {


  return (
    <Stack.Navigator>

      <Stack.Screen 
        name='Login'
        component={LoginScreen}
        options={{
          headerShown: false
        }}
      />

      <Stack.Screen 
        name='Registro'
        component={RegisterScreen}
        options={{
          headerShown: false
        }}
      />

      <Stack.Screen 
        name='Home'
        component={HomeScreen}
      />

      <Stack.Screen 
        name='Nueva'
        component={NuevaTarea}
      />

    </Stack.Navigator>
  )
}

export default Link