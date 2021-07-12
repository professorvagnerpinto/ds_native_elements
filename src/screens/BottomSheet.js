/* eslint-disable no-alert */
/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {Header, BottomSheet, ListItem, Button} from 'react-native-elements';

export default ({navigation}) => {
  const [isVisible, setIsVisible] = useState(false);
  const list = [
    {
      title: 'Opção 1',
      onPress: () => alert('Clicou em List Opção 1'),
    },
    {
      title: 'Opção 2',
      onPress: () => alert('Clicou em List Opção 2'),
    },
    {
      title: 'Cancelar',
      containerStyle: {
        backgroundColor: 'red',
        width: '100%',
      },
      titleStyle: {color: 'white'},
      onPress: () => setIsVisible(false),
    },
  ];

  return (
    <View style={styles.container}>
      <Header
        leftComponent={{
          onPress: () => navigation.goBack(),
        }}
        centerComponent={{
          text: 'BOTTOM SHEET',
        }}
      />
      <Button title="Clique para Exibir" onPress={() => setIsVisible(true)} />
      <BottomSheet
        isVisible={isVisible}
        containerStyle={{backgroundColor: 'rgba(0.5, 0.25, 0, 0.2)'}}>
        {list.map((l, k) => (
          <ListItem
            key={k}
            containerStyle={l.containerStyle}
            onPress={l.onPress}>
            <ListItem.Content>
              <ListItem.Title style={l.titleStyle}>{l.title}</ListItem.Title>
            </ListItem.Content>
          </ListItem>
        ))}
      </BottomSheet>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
});
