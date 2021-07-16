/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Header, Button, colors, useTheme} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

const RaisedButton = props => <Button raised {...props} />;

export default ({navigation}) => {
  const {theme} = useTheme();

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
        icon={<Icon name="arrow-right" size={25} color={colors.white} />}
        title="Button with icon"
      />
      <Button
        icon={<Icon name="check-circle" size={25} color={colors.white} />}
        iconRight
        title="Button with icon"
      />
      <Button title="My 2nd Button" loading />
      <Button
        title="Clear button"
        type="clear"
        buttonStyle={{backgroundColor: 'trasparent'}}
        titleStyle={{
          color: theme.colors.blue1,
        }}
      />
      <RaisedButton
        title="Outline"
        type="outline"
        buttonStyle={{backgroundColor: 'transparent'}}
        titleStyle={{color: theme.colors.blue1}}
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
