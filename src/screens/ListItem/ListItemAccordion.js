/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-alert */
import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {Header, ListItem, Avatar} from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default ({navigation}) => {
  const [expandedList1, setExpandedList1] = useState(false);
  const [expandedList2, setExpandedList2] = useState(false);

  const list1 = [
    {
      name: 'Amy Farha',
      avatar_url:
        'https://reactnativeelements.com/img/avatar/avatar--photo.jpg',
      subtitle: 'Vice President',
    },
    {
      name: 'Chris Jackson',
      avatar_url:
        'https://reactnativeelements.com/img/avatar/avatar--photo.jpg',
      subtitle: 'Vice Chairman',
    },
  ];

  const list2 = [
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
          text: 'ListItem Accordion',
        }}
      />
      <ListItem.Accordion
        content={
          <>
            <Icon name="group" size={30} />
            <ListItem.Content>
              <ListItem.Title style={{marginLeft: 10}}>
                Funcionários
              </ListItem.Title>
            </ListItem.Content>
          </>
        }
        isExpanded={expandedList1}
        onPress={() => {
          setExpandedList1(!expandedList1);
        }}
        icon={{
          name: 'chevron-right',
          type: 'material',
          size: 20,
          color: '#dadada',
        }}>
        <View style={styles.listItem}>
          {list1.map((l, k) => (
            <ListItem key={k} onPress={() => alert('foi')} bottomDivider>
              <Avatar title={l.name[0]} source={{uri: l.avatar_url}} />
              <ListItem.Content>
                <ListItem.Title>{l.name}</ListItem.Title>
                <ListItem.Subtitle>{l.subtitle}</ListItem.Subtitle>
              </ListItem.Content>
              <ListItem.Chevron
                onPress={() => alert('Navigate to ' + l.name)}
              />
            </ListItem>
          ))}
        </View>
      </ListItem.Accordion>
      <ListItem.Accordion
        content={
          <>
            <Icon name="add" size={30} />
            <ListItem.Content>
              <ListItem.Title style={{marginLeft: 10}}>
                Configurações
              </ListItem.Title>
            </ListItem.Content>
          </>
        }
        isExpanded={expandedList2}
        onPress={() => {
          setExpandedList2(!expandedList2);
        }}
        icon={{
          name: 'chevron-right',
          type: 'material',
          size: 20,
          color: '#dadada',
        }}>
        <View style={styles.listItem}>
          {list2.map((item, k) => (
            <ListItem key={k} bottomDivider>
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
      </ListItem.Accordion>
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
    width: '100%',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
});
