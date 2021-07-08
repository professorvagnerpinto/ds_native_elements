/**
 * Exemplo do uso da dependência react-native-elements.
 * Uma lib com componentes que passaram pelo processo de Design System.
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {ThemeProvider} from 'react-native-elements';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './src/screens/Home';
import Avatar from './src/screens/Avatar';
import Badge from './src/screens/Badge';
import BottomSheet from './src/screens/BottomSheet';
import Buttons from './src/screens/Buttons';
import Cards from './src/screens/Cards';

const theme = {
  Avatar: {
    overlayContainerStyle: {
      backgroundColor: 'grey',
    },
  },
  Button: {
    containerStyle: {
      width: '60%',
      margin: 5,
    },
    buttonStyle: {
      backgroundColor: 'orange',
    },
    titleStyle: {
      color: 'white',
      marginHorizontal: 10,
    },
  },
  ListItem: {
    containerStyle: {
      width: '95%',
    },
  },
};

const Stack = createStackNavigator();

export default () => {
  Icon.loadFont();
  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: 'true',
            headerStyle: {
              backgroundColor: '#dfdfdf',
            },
            headerTintColor: '#000',
          }}>
          <Stack.Screen name="Home" component={Home} options={homeStyle} />
          <Stack.Screen name="Avatar" component={Avatar} />
          <Stack.Screen name="Badge" component={Badge} />
          <Stack.Screen name="Bottom Sheet" component={BottomSheet} />
          <Stack.Screen name="Buttons" component={Buttons} />
          <Stack.Screen name="Cards" component={Cards} />
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
};

const homeStyle = {
  title: 'React Native Elements',
};
