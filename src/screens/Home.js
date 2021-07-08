import React from 'react';
import {StyleSheet, View} from 'react-native';
import {ListItem} from 'react-native-elements';
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
    title: 'Button Group',
    icon: 'server',
  },
  {
    title: 'Buttons',
    icon: 'check-circle',
  },
  {
    title: 'Cards',
    icon: 'list-alt',
  },
];

export default ({navigation}) => {
  return (
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
