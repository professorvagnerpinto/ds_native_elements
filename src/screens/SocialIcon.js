import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Header, SocialIcon} from 'react-native-elements';

export default ({navigation}) => {
  return (
    <View style={styles.container}>
      <Header
        leftComponent={{
          onPress: () => navigation.goBack(),
        }}
        centerComponent={{
          text: 'SOCIAL ICON',
        }}
      />
      {/* Icon */}
      <SocialIcon type="twitter" />
      <SocialIcon raised={false} type="github" />
      <SocialIcon light type="medium" />
      <SocialIcon light raised={false} type="medium" />
      {/* Button */}
      <SocialIcon
        title="Sign In With Facebook"
        button
        type="facebook"
        style={styles.button}
      />
      <SocialIcon
        title="Some Twitter Message"
        button
        type="twitter"
        style={styles.button}
      />
      <SocialIcon button type="medium" style={styles.button} />
      <SocialIcon button light type="instagram" style={styles.button} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  button: {
    width: '60%',
  },
});
