import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {CheckBox, Divider} from 'react-native-elements';
import Header from '../components/Header';

export default ({navigation}) => {
  const [checked1, setChecked1] = useState(false);
  const [checked2, setChecked2] = useState(false);
  const [checked3, setChecked3] = useState(false);
  const [checked4, setChecked4] = useState(false);
  const [checked5, setChecked5] = useState(false);

  return (
    <View style={styles.container}>
      <Header title="CHECKBOX" leftPress={() => navigation.goBack()} />
      <CheckBox
        title="Click Here"
        checked={checked1}
        onPress={() => setChecked1(!checked1)}
      />
      <Divider orientation="vertical" width={5} />
      <CheckBox
        center
        title="Click Here"
        checked={checked2}
        onPress={() => setChecked2(!checked2)}
      />
      <Divider orientation="vertical" width={5} />
      <CheckBox
        center
        title="Click Here"
        checked={checked3}
        checkedIcon="dot-circle-o"
        uncheckedIcon="circle-o"
        onPress={() => setChecked3(!checked3)}
      />
      <Divider orientation="vertical" width={5} />
      <CheckBox
        center
        title="Click Here to Remove This Item"
        iconRight
        iconType="material"
        checkedIcon="clear"
        uncheckedIcon="add"
        checkedColor="red"
        checked={checked4}
        onPress={() => setChecked4(!checked4)}
      />
      <Divider orientation="vertical" width={5} />
      <CheckBox
        center
        title="Add Phone"
        iconRight={false}
        iconType="material"
        checkedIcon="add"
        uncheckedIcon="add"
        checkedColor="green"
        checked={checked5}
        onPress={() => setChecked5(!checked5)}
      />
      <Divider orientation="vertical" width={5} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    marginTop: 10,
  },
});
