/* eslint-disable no-alert */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {
  Header,
  Rating,
  AirbnbRating,
  useTheme,
  colors,
} from 'react-native-elements';
import {ScrollView} from 'react-native-gesture-handler';

export default ({navigation}) => {
  const WATER_IMAGE = require('../assets/images/water.png');
  const {theme} = useTheme();

  function ratingCompleted(rating) {
    alert('Rating is: ' + rating);
  }

  return (
    <>
      <Header
        leftComponent={{
          onPress: () => navigation.goBack(),
        }}
        centerComponent={{
          text: 'RATING',
        }}
      />
      <ScrollView>
        <View style={styles.container}>
          <AirbnbRating />
          <AirbnbRating
            count={11}
            reviews={[
              'Terrible',
              'Bad',
              'Meh',
              'OK',
              'Good',
              'Hmm...',
              'Very Good',
              'Wow',
              'Amazing',
              'Unbelievable',
              'Jesus',
            ]}
            defaultRating={11}
            size={20}
          />
          <Rating
            showRating
            type="rocket"
            startingValue={3}
            onFinishRating={ratingCompleted}
            style={{
              paddingVertical: 10,
              backgroundColor: 'transparent',
              opacity: 0.8,
            }}
          />
          <Rating
            type="heart"
            startingValue={2}
            ratingCount={3}
            imageSize={60}
            showRating
            onFinishRating={ratingCompleted}
          />
          <Rating
            type="custom"
            ratingImage={WATER_IMAGE}
            ratingColor={theme.colors.blue1}
            ratingBackgroundColor={colors.grey4}
            startingValue={2}
            ratingCount={5}
            imageSize={20}
            onFinishRating={ratingCompleted}
            style={{paddingVertical: 10, margimBottom: 10}}
            showRating
          />
          <Rating
            type="bell"
            imageSize={40}
            readonly
            startingValue={1}
            style={{paddingVertical: 10}}
          />
          <Rating
            showRating
            fractions={1}
            startingValue={3.3}
            onFinishRating={ratingCompleted}
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
});
