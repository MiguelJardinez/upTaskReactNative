import { ApolloClient } from '@apollo/client'; 
import { InMemoryCache } from 'apollo-cache-inmemory'; 
import { createHttpLink } from 'apollo-link-http'; 
import { setContext } from 'apollo-link-context'

import AsyncStorage from '@react-native-community/async-storage';

const httlLink = createHttpLink({
  uri: 'http://192.168.1.66:4000/',
}); 

const authLink = setContext( async (_, { headers }) => {
  //Leer el token para enviarlo via headers 
  const token = await AsyncStorage.getItem('token'); 
  return {
    headers: {
      ...headers,
      authorization: token ? `${token}` : '',
    }
  }
} );

const client = new ApolloClient({
  cache: new InMemoryCache(), 
  link: authLink.concat(httlLink)
}); 

export default client;