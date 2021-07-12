import React, {useState} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {Header, Button, Overlay} from 'react-native-elements';

export default ({navigation}) => {
  const [visible, setVisible] = useState(false);

  const toggleOverlay = () => {
    setVisible(!visible);
  };

  return (
    <View style={styles.container}>
      <Header
        leftComponent={{
          onPress: () => navigation.goBack(),
        }}
        centerComponent={{
          text: 'OVERLAY',
        }}
      />
      <Button title="Open Overlay" onPress={toggleOverlay} />

      <Overlay
        isVisible={visible}
        fullScreen={true} //mude para ver o efeito
        onBackdropPress={toggleOverlay}
        overlayStyle={styles.overlay}>
        <Text style={styles.text}>Hello from Overlay!</Text>
      </Overlay>
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
    fontSize: 24,
    fontWeight: 'bold',
  },
  overlay: {
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
});
