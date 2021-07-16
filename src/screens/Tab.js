/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {Header, Tab, TabView, Text, colors} from 'react-native-elements';

//TODO: localizar bug da screen errada no index (erro da lib que deve ser localizado)
export default ({navigation}) => {
  const [index, setIndex] = useState(0);

  return (
    <View style={styles.container}>
      <Header
        leftComponent={{
          onPress: () => navigation.goBack(),
        }}
        centerComponent={{
          text: 'TAB',
        }}
      />
      <Tab
        value={index}
        onChange={i => setIndex(i)}
        indicatorStyle={{
          backgroundColor: colors.white,
          height: 3,
        }}
        variant="primary">
        <Tab.Item
          title="Recent"
          titleStyle={{fontSize: 12}}
          icon={{name: 'timer', type: 'ionicon', color: colors.white}}
        />
        <Tab.Item
          title="favorite"
          titleStyle={{fontSize: 12}}
          icon={{name: 'heart', type: 'ionicon', color: colors.white}}
        />
        <Tab.Item
          title="cart"
          titleStyle={{fontSize: 12}}
          icon={{name: 'cart', type: 'ionicon', color: colors.white}}
        />
      </Tab>
      <TabView value={index} onChange={i => setIndex(i)} animationType="spring">
        <TabView.Item style={{backgroundColor: colors.error, width: '100%'}}>
          <Text h1>Recent</Text>
        </TabView.Item>
        <TabView.Item style={{backgroundColor: colors.success, width: '100%'}}>
          <Text h1>Favorite</Text>
        </TabView.Item>
        <TabView.Item style={{backgroundColor: colors.warning, width: '100%'}}>
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
