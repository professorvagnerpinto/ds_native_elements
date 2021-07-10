import React from 'react';
import {Header} from 'react-native-elements';

export default ({title, leftPress, componentRight}) => {
  return (
    <Header
      barStyle={'dark-content'}
      leftComponent={{
        icon: 'arrow-back',
        type: 'material',
        color: '#fff',
        iconStyle: {color: '#fff', height: 25},
        onPress: leftPress,
      }}
      centerComponent={{
        text: title,
        style: {color: '#fff'},
      }}
      rightComponent={componentRight}
    />
  );
};
