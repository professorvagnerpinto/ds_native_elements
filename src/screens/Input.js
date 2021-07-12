/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-alert */
import React, {useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import {Header, Input} from 'react-native-elements';
import {ScrollView} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';

export default ({navigation}) => {
  const inputCustomIcon = React.createRef();

  useEffect(() => {
    //como começar com um campo de input focado
    inputCustomIcon.current.focus();
  }, []);

  return (
    <>
      <Header
        leftComponent={{
          onPress: () => navigation.goBack(),
        }}
        centerComponent={{
          text: 'INPUT',
        }}
      />
      <ScrollView>
        <View style={styles.container}>
          <Input placeholder="BASIC INPUT" />

          <Input
            placeholder="INPUT WITH ICON"
            leftIcon={{type: 'font-awesome', name: 'home'}}
          />

          <Input
            ref={inputCustomIcon}
            placeholder="INPUT WITH CUSTOM ICON"
            leftIcon={<Icon name="user" size={24} color="black" />}
          />

          <Input
            placeholder="Comment"
            leftIcon={{type: 'font-awesome', name: 'comment'}}
            onChangeText={value => alert(value)}
          />

          <Input
            placeholder="INPUT WITH ERROR MESSAGE"
            errorStyle={{color: 'red'}}
            errorMessage="Sua infomação sobre o erro aqui"
          />

          <Input placeholder="Password" secureTextEntry={true} />
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
    marginTop: 10,
  },
});
