import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Header, ListItem} from 'react-native-elements';

export default ({navigation}) => {
  const list = [
    {
      name: 'Using Map Function - Implemented with avatar',
      route: 'MapFunctionWithAvatar',
    },
    {
      name: 'Using Map Function - Implemented with link and icon',
      route: 'MapFunctionWithLinkAndIcon',
    },
    {
      name: 'Using RN FlatList - Implemented with link and avatar',
      route: 'RNFlatListWithLinkAvatar',
    },
    {
      name: 'ListItem Accordion',
      route: 'ListItemAccordion',
    },
    {
      name: 'ListItem Swipeable',
      route: 'ListItemSwipeable',
    },
  ];

  return (
    <View style={styles.container}>
      <Header
        leftComponent={{
          onPress: () => navigation.goBack(),
        }}
        centerComponent={{
          text: 'LIST ITEM',
        }}
      />
      <View style={styles.listItem}>
        {list.map((l, k) => (
          <ListItem
            key={k}
            bottomDivider
            onPress={() => navigation.navigate(l.route)}>
            <ListItem.Content>
              <ListItem.Title>{l.name}</ListItem.Title>
            </ListItem.Content>
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
