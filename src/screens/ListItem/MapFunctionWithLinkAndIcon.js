/* eslint-disable no-alert */
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Header, ListItem} from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default ({navigation}) => {
  const list = [
    {
      title: 'Appointments',
      icon: 'addchart',
    },
    {
      title: 'Trips',
      icon: 'flight-takeoff',
    },
  ];

  return (
    <View style={styles.container}>
      <Header
        leftComponent={{
          onPress: () => navigation.goBack(),
        }}
        centerComponent={{
          text: 'Map Function with link and icon',
        }}
      />
      <View style={styles.listItem}>
        {list.map((item, i) => (
          <ListItem key={i} bottomDivider>
            <Icon name={item.icon} size={25} />
            <ListItem.Content>
              <ListItem.Title>{item.title}</ListItem.Title>
            </ListItem.Content>
            <ListItem.Chevron
              onPress={() => alert('Navigate to ' + item.title)}
            />
          </ListItem>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  listItem: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
});
