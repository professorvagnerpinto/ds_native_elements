/* eslint-disable no-alert */
import React from 'react';
import {ScrollView} from 'react-native';
import {StyleSheet, View} from 'react-native';
import {Header, ListItem} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import IconS from 'react-native-vector-icons/SimpleLineIcons';

const list = [
  {
    title: 'Avatar',
    icon: 'smile-o',
  },
  {
    title: 'Badge',
    icon: 'badge',
  },
  {
    title: 'Bottom Sheet',
    icon: 'twitch',
  },
  {
    title: 'Button',
    icon: 'check-circle',
  },
  {
    title: 'Button Group',
    icon: 'server',
  },
  {
    title: 'Cards',
    icon: 'list-alt',
  },
  {
    title: 'Check Box',
    icon: 'check-square-o',
  },
  {
    title: 'Chip',
    icon: 'microchip',
  },
  {
    title: 'Divider',
    icon: 'minus',
  },
  {
    title: 'Floating Action Button',
    icon: 'plus-circle',
  },
  {
    title: 'Header',
    icon: 'header',
  },
  {
    title: 'Icon',
    icon: 'try',
  },
  {
    title: 'Image',
    icon: 'image',
  },
  {
    title: 'Input',
    icon: 'arrow-circle-o-up',
  },
  {
    title: 'Linear Progress',
    icon: 'spinner',
  },
  {
    title: 'ListItem',
    icon: 'list-ul',
  },
  {
    title: 'Overlay',
    icon: 'clone',
  },
  {
    title: 'Pricing',
    icon: 'dollar',
  },
  {
    title: 'Rating',
    icon: 'thumbs-o-up',
  },
  {
    title: 'SearchBar',
    icon: 'search',
  },
  {
    title: 'Slider',
    icon: 'sliders',
  },
  {
    title: 'SocialIcon',
    icon: 'github',
  },
  {
    title: 'SpeedDial',
    icon: 'bullseye',
  },
  {
    title: 'Switch',
    icon: 'exchange',
  },
  {
    title: 'Tab',
    icon: 'window-restore',
  },
  {
    title: 'Text',
    icon: 'text-height',
  },
  {
    title: 'Title',
    icon: 'indent',
  },
  {
    title: 'Tooltip',
    icon: 'twitch',
  },
  {
    title: 'CircularSlider',
    icon: 'circle-thin',
  },
];

export default ({navigation}) => {
  return (
    <>
      <Header
        leftComponent={{
          icon: 'menu',
          type: 'material',
          onPress: () => alert('foi'),
        }}
        rightComponent={{
          icon: 'exit-to-app',
          type: 'material',
          color: '#fff',
          onPress: () => alert('foi'),
        }}
      />
      <ScrollView>
        <View style={styles.container}>
          {list.map((item, k) => (
            <ListItem
              key={k}
              bottomDivider
              onPress={() => {
                navigation.navigate(item.title);
              }}>
              {item.title === 'Badge' ? (
                <IconS name={item.icon} size={30} color="black" />
              ) : (
                <Icon name={item.icon} size={30} color="black" />
              )}
              <ListItem.Content>
                <ListItem.Title>{item.title}</ListItem.Title>
              </ListItem.Content>
            </ListItem>
          ))}
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 10,
  },
});
