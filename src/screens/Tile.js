/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Header, Tile, Text} from 'react-native-elements';
import {ScrollView} from 'react-native-gesture-handler';

export default ({navigation}) => {
  return (
    <>
      <ScrollView>
        <View style={styles.container}>
          <Header
            leftComponent={{
              onPress: () => navigation.goBack(),
            }}
            centerComponent={{
              text: 'TILE',
            }}
          />
          <Text h4 style={styles.text}>
            Featured Tile
          </Text>
          <Tile
            imageSrc={require('../assets/images/card.png')}
            title="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores dolore exercitationem"
            featured
            caption="Some Caption Text"
          />
          <Text h4 style={styles.text}>
            Featured Tile with Icon
          </Text>
          <Tile
            imageSrc={require('../assets/images/card.png')}
            icon={{name: 'play-circle', type: 'font-awesome', size: 60}}
            featured
          />
          <Text h4 style={styles.text}>
            Not featured with Icon
          </Text>
          <Tile
            imageSrc={require('../assets/images/card.png')}
            title="Lorem ipsum dolor sit amet, consectetur"
            titleStyle={{fontSize: 16, textAlign: 'justify', marginBottom: 10}}
            icon={{name: 'play-circle', type: 'font-awesome', size: 60}} // optional
            contentContainerStyle={{height: 70}}>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <Text>Caption</Text>
              <Text>Caption</Text>
            </View>
          </Tile>
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  text: {
    marginTop: 10,
    marginBottom: 5,
  },
});
