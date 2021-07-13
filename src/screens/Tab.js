/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {Header, Tab, TabView, Text} from 'react-native-elements';

//TODO: localizar bug da screen errada no index
export default ({navigation}) => {
  const [index, setIndex] = useState(0);

  return (
    <View style={styles.container}>
      {console.log(index)}
      <Header
        leftComponent={{
          onPress: () => navigation.goBack(),
        }}
        centerComponent={{
          text: 'TAB',
        }}
      />

      <Tab value={index} onChange={setIndex}>
        <Tab.Item title="recent" />
        <Tab.Item title="favorite" />
        <Tab.Item title="cart" />
      </Tab>

      <TabView value={index} onChange={setIndex}>
        <TabView.Item
          style={{backgroundColor: 'red', width: '100%', alignItems: 'center'}}>
          <Text h1>Recent</Text>
        </TabView.Item>
        <TabView.Item
          style={{
            backgroundColor: 'blue',
            width: '100%',
            alignItems: 'center',
          }}>
          <Text h1>Favorite</Text>
        </TabView.Item>
        <TabView.Item
          style={{
            backgroundColor: 'green',
            width: '100%',
            alignItems: 'center',
          }}>
          <Text h1>Cart</Text>
        </TabView.Item>
      </TabView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
