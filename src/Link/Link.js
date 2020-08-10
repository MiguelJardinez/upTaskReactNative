import React from 'react'
import { Text, View } from 'react-native'; 
import { createStackNavigator } from '@react-navigation/stack';

//importando todas las vistas de la aplicacion
import HomeScreen from '../Views/HomeScreen'; 
import LoginScreen from '../Views/LoginScreen'; 
import RegisterScreen from '../Views/RegisterScreen'; 
import NuevaTarea from '../Views/NuevaTarea';
import NuevoProyecto from '../Views/NuevoProyecto';
import Proyecto from '../Views/Proyecto';

//Inicializando la navegacion de stack
const Stack = createStackNavigator(); 

const Link = () => {


  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#1d80ab'
        },
        headerTintColor: '#fff'
      }}
    >

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
        options={{
          title: 'Inicio',
          headerLeft: false,
        }}
      />

      <Stack.Screen 
        name='Proyecto'
        component={NuevoProyecto}
        options={{
          title: 'Nuevo Proyecto',
        }}
      />

      <Stack.Screen 
        name='Tarea'
        component={NuevaTarea}
        options={{
          title: 'Nueva Tarea',
        }}
      />

      <Stack.Screen 
        name='DetallesProyecto'
        component={Proyecto}
        options={ ({ route }) => ({
          title: route.params.nombre,
        })}
      />

    </Stack.Navigator>
  )
}

export default Link