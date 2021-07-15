/* eslint-disable no-alert */
import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {Header, SpeedDial, colors} from 'react-native-elements';

export default ({navigation}) => {
  const [open, setOpen] = useState(false);

  return (
    <View style={styles.container}>
      <Header
        leftComponent={{
          onPress: () => navigation.goBack(),
        }}
        centerComponent={{
          text: 'SPEED DIAL',
        }}
      />
      <SpeedDial
        isOpen={open}
        icon={{name: 'edit', color: colors.white}}
        openIcon={{name: 'close', color: colors.white}}
        onOpen={() => setOpen(!open)}
        onClose={() => setOpen(!open)}>
        <SpeedDial.Action
          icon={{name: 'add', color: colors.white}}
          title="Add"
          onPress={() => alert('Add Something')}
        />
        <SpeedDial.Action
          icon={{name: 'delete', color: colors.white}}
          title="Delete"
          onPress={() => alert('Delete Something')}
        />
      </SpeedDial>
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
