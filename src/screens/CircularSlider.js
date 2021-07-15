import React, {useState} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {Header} from 'react-native-elements';
import {CircularSlider} from 'react-native-elements-universe';
import {ScrollView} from 'react-native-gesture-handler';

/*
  Nota Técnica: instale essa dependência separadamente, execute o comando:
  yarn add https://github.com/react-native-elements/react-native-elements-universe#dist
  e yarn add react-native-svg (pois ela tem essa peerDependencies)
  A versão que está no NPM vem vazia, sem o CircularSlider.
*/

export default ({navigation}) => {
  const [value1, setValue1] = useState(15);
  const [value2, setValue2] = useState(30);
  const [value3, setValue3] = useState(90);

  return (
    <>
      <Header
        leftComponent={{
          onPress: () => navigation.goBack(),
        }}
        centerComponent={{
          text: 'CIRCULAR SLIDER',
        }}
      />
      <ScrollView>
        <View style={styles.container}>
          <Text>
            Esta lib requer uma inslação a parte. Veja o comentário no cebeçalho
            do arquivo.
          </Text>
          <CircularSlider
            value={value1}
            onChange={setValue1}
            showThumbText={true}
            trackColor="green"
          />
          <CircularSlider
            value={value2}
            onChange={setValue2}
            showThumbText={true}
            thumbColor="red"
            showText
          />
          <CircularSlider
            value={value3}
            onChange={setValue3}
            maxAngle={90}
            noThumb
            showText
            trackColor="orange"
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
