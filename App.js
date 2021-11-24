import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './app/views/Home';
import Profile from './app/views/Profile';
import NoteDetails from './app/views/NoteDetails';
import { Provider } from 'react-redux';
import store from './app/store/store';
import { NativeBaseProvider } from 'native-base';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NativeBaseProvider>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="Home"
              component={Home}
              options={{title: 'Home'}}
            />
            <Stack.Screen 
              name="Profile" 
              component={Profile} 
            />
            <Stack.Screen 
              name="Details"
              component={NoteDetails}
              options={{title: 'Note Details'}}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </NativeBaseProvider>
    </Provider>
  );
};

export default App;
