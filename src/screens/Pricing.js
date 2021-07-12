/* eslint-disable no-alert */
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Header, PricingCard} from 'react-native-elements';
import {ScrollView} from 'react-native-gesture-handler';

export default ({navigation}) => {
  return (
    <>
      <Header
        leftComponent={{
          onPress: () => navigation.goBack(),
        }}
        centerComponent={{
          text: 'PRICING',
        }}
      />
      <ScrollView>
        <View style={styles.container}>
          <PricingCard
            color="#4f9deb"
            title="Free"
            price="$0"
            info={['1 User', 'Basic Support', 'All Core Features']}
            button={{title: 'GET STARTED', icon: 'flight-takeoff'}}
            containerStyle={styles.pricing}
            onButtonPress={() => alert('foi')}
          />
          <PricingCard
            color="#a82dea"
            title="Starter"
            price="$50"
            info={['1 User', 'Basic Support', 'All Features']}
            button={{title: 'GET STARTED', icon: 'flight-takeoff'}}
            containerStyle={styles.pricing}
            onButtonPress={() => alert('foi')}
          />
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
  pricing: {
    width: '90%',
    height: 295,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
});
