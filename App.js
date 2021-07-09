/**
 * Exemplo do uso da dependência react-native-elements.
 * Uma lib com componentes que passaram pelo processo de Design System.
 * https://reactnativeelements.com/docs/
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
import ButtonGroup from './src/screens/ButtonGroup';
import Cards from './src/screens/Cards';
import CheckBox from './src/screens/CheckBox';
import Chip from './src/screens/Chip';
import Divider from './src/screens/Divider';
import FloatingActionButton from './src/screens/FloatingActionButton';
import Header from './src/screens/Header';
import IconRNE from './src/screens/Icon';
import Image from './src/screens/Image';
import Input from './src/screens/Input';
import LinearProgress from './src/screens/LinearProgress';
import ListItem from './src/screens/ListItem';
import Overlay from './src/screens/Overlay';
import Pricing from './src/screens/Pricing';
import Rating from './src/screens/Rating';
import SearchBar from './src/screens/SearchBar';
import Slider from './src/screens/Slider';
import SocialIcon from './src/screens/SocialIcon';
import SpeedDial from './src/screens/SpeedDial';
import Switch from './src/screens/Switch';
import Tabs from './src/screens/Tabs';
import Text from './src/screens/Text';
import Title from './src/screens/Title';
import Tooltip from './src/screens/Tooltip';
import CircularSlider from './src/screens/CircularSlider';

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
  Card: {
    containerStyle: {
      width: '95%',
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
          <Stack.Screen name="Button Group" component={ButtonGroup} />
          <Stack.Screen name="Cards" component={Cards} />
          <Stack.Screen name="Check Box" component={CheckBox} />
          <Stack.Screen name="Chip" component={Chip} />
          <Stack.Screen name="Divider" component={Divider} />
          <Stack.Screen
            name="Floating Action Button"
            component={FloatingActionButton}
          />
          <Stack.Screen name="Header" component={Header} />
          <Stack.Screen name="Icon" component={IconRNE} />
          <Stack.Screen name="Image" component={Image} />
          <Stack.Screen name="Input" component={Input} />
          <Stack.Screen name="Linear Progress" component={LinearProgress} />
          <Stack.Screen name="ListItem" component={ListItem} />
          <Stack.Screen name="Overlay" component={Overlay} />
          <Stack.Screen name="Pricing" component={Pricing} />
          <Stack.Screen name="Rating" component={Rating} />
          <Stack.Screen name="SearchBar" component={SearchBar} />
          <Stack.Screen name="Slider" component={Slider} />
          <Stack.Screen name="SocialIcon" component={SocialIcon} />
          <Stack.Screen name="SpeedDial" component={SpeedDial} />
          <Stack.Screen name="Switch" component={Switch} />
          <Stack.Screen name="Tabs" component={Tabs} />
          <Stack.Screen name="Text" component={Text} />
          <Stack.Screen name="Title" component={Title} />
          <Stack.Screen name="Tooltip" component={Tooltip} />
          <Stack.Screen name="CircularSlider" component={CircularSlider} />
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
};

const homeStyle = {
  title: 'React Native Elements',
};
