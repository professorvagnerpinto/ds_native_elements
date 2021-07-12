/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Header, Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

const RaisedButton = props => <Button raised {...props} />;

export default ({navigation}) => {
  return (
    <View style={styles.container}>
      <Header
        leftComponent={{
          onPress: () => navigation.goBack(),
        }}
        centerComponent={{
          text: 'BUTTON',
        }}
      />
      <Button
        icon={<Icon name="arrow-right" size={25} color="white" />}
        title="Button with icon"
      />
      <Button
        icon={<Icon name="check-circle" size={25} color="white" />}
        iconRight
        title="Button with icon"
      />
      <Button title="My 2nd Button" loading />
      <Button
        title="Clear button"
        type="clear"
        buttonStyle={{backgroundColor: 'trasparent'}}
        titleStyle={{
          color: 'blue',
        }}
      />
      <RaisedButton
        title="Outline"
        type="outline"
        buttonStyle={{backgroundColor: 'transparent'}}
        titleStyle={{color: 'blue'}}
      />
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
