import React from 'react';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

//Apollo
import client from './src/config/apollo'; 
import { ApolloProvider } from '@apollo/client'; 

const uptaskApp = () => (
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
)

AppRegistry.registerComponent(appName, () => uptaskApp);
