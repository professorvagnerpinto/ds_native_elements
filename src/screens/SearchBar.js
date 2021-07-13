/* eslint-disable no-alert */
/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {Platform, StyleSheet, View, Text} from 'react-native';
import {Header, SearchBar} from 'react-native-elements';
import {ScrollView} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';

const MySearchBar = ({onChangeText, value, onClear}) => (
  <SearchBar
    showLoading={true}
    platform={Platform.OS}
    clearIcon={true}
    cancelIcon={false}
    cancelButtonTitle="Cancel"
    onChangeText={v => onChangeText(v)}
    value={value}
    onClear={onClear}
    placeholder="Search.."
    containerStyle={{width: '100%'}}
  />
);

export default ({navigation}) => {
  const [search1, setSearch1] = useState('');
  const [search2, setSearch2] = useState('');
  const [search3, setSearch3] = useState('');
  const [search4, setSearch4] = useState('');
  const [search5, setSearch5] = useState('');
  const [search6, setSearch6] = useState('');
  const [visible, setVisible] = useState(true);

  return (
    <>
      <Header
        leftComponent={{
          onPress: () => navigation.goBack(),
        }}
        centerComponent={
          visible
            ? {
                text: 'SEARCHBAR',
              }
            : () => (
                <MySearchBar
                  value={search6}
                  onChangeText={setSearch6}
                  onClear={() => setVisible(!visible)}
                />
              )
        }
        rightComponent={
          visible
            ? () => (
                <Icon
                  name="search"
                  color="white"
                  size={25}
                  onPress={() => setVisible(!visible)}
                />
              )
            : null
        }
      />
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.text}>Customized (Plataform.OS)</Text>
          <SearchBar
            showLoading={true}
            platform={Platform.OS}
            clearIcon={true}
            cancelButtonTitle="Cancel"
            onChangeText={v => setSearch5(v)}
            value={search5}
            onClear={() => alert('onClearText')}
            placeholder="Search.."
            containerStyle={{backgroundColor: 'transparent'}}
          />
          <Text style={styles.text}>Default</Text>
          <SearchBar
            placeholder="Pesquise aqui..."
            onChangeText={v => setSearch1(v)}
            value={search1}
          />
          <Text style={styles.text}>Customized Light Theme</Text>
          <SearchBar
            placeholder="Pesquise aqui..."
            onChangeText={v => setSearch2(v)}
            value={search2}
            containerStyle={{backgroundColor: 'transparent'}}
            lightTheme={true}
          />
          <Text style={styles.text}>Customized Dark Theme</Text>
          <SearchBar
            placeholder="Pesquise aqui..."
            onChangeText={v => setSearch3(v)}
            value={search3}
            containerStyle={{backgroundColor: 'transparent'}}
            lightTheme={false}
          />
          <Text style={styles.text}>Customized (disabled)</Text>
          <SearchBar
            placeholder="Pesquise aqui..."
            onChangeText={v => setSearch4(v)}
            value={search4}
            lightTheme={true}
            containerStyle={{backgroundColor: 'transparent'}}
            disabled
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
  text: {
    fontSize: 20,
    marginTop: 10,
  },
});
