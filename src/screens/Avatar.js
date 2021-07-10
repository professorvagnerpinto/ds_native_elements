/* eslint-disable no-alert */
import React from 'react';
import {StyleSheet, View, ScrollView, Text} from 'react-native';
import {Avatar} from 'react-native-elements';
import Header from '../components/Header';

export default ({navigation}) => {
  return (
    <>
      <Header title="AVATAR" leftPress={() => navigation.goBack()} />
      <ScrollView>
        <View style={styles.container}>
          <>
            {/* Title Avatar */}
            <Text style={styles.text}>Title xlarge</Text>
            <Avatar
              size="xlarge"
              rounded
              title="CR"
              onPress={() => alert('Foi')}
              activeOpacity={0.7}
            />
            <Text style={styles.text}>Title large</Text>
            <Avatar
              size="large"
              rounded
              title="CR"
              onPress={() => alert('Foi')}
              activeOpacity={0.7}
            />
            <Text style={styles.text}>Title medium</Text>
            <Avatar
              size="medium"
              rounded
              title="CR"
              onPress={() => alert('Foi')}
              activeOpacity={0.7}
            />
            <Text style={styles.text}>Title small</Text>
            <Avatar
              size="small"
              rounded
              title="CR"
              onPress={() => alert('Foi')}
              activeOpacity={0.7}
            />

            {/* Standard Avatar */}
            <Text style={styles.text}>Standard xlarge</Text>
            <Avatar
              size="xlarge"
              rounded
              source={{
                uri: 'https://reactnativeelements.com/img/avatar/avatar--photo.jpg',
              }}
            />
            <Text style={styles.text}>Standard large</Text>
            <Avatar
              size="large"
              rounded
              source={{
                uri: 'https://reactnativeelements.com/img/avatar/avatar--photo.jpg',
              }}
            />
            <Text style={styles.text}>Standard medium</Text>
            <Avatar
              size="medium"
              rounded
              source={{
                uri: 'https://reactnativeelements.com/img/avatar/avatar--photo.jpg',
              }}
            />
            <Text style={styles.text}>Standard small</Text>
            <Avatar
              size="small"
              rounded
              source={{
                uri: 'https://reactnativeelements.com/img/avatar/avatar--photo.jpg',
              }}
            />

            {/* Avatar with icons */}
            <Text style={styles.text}>Avatar with icons xlarge</Text>
            <Avatar
              size="xlarge"
              rounded
              icon={{name: 'user', type: 'font-awesome'}}
            />
            <Text style={styles.text}>Avatar with icons large</Text>
            <Avatar
              size="large"
              rounded
              icon={{name: 'user', type: 'font-awesome'}}
            />
            <Text style={styles.text}>Avatar with icons medium</Text>
            <Avatar
              size="medium"
              rounded
              icon={{name: 'user', type: 'font-awesome'}}
            />
            <Text style={styles.text}>Avatar with icons small</Text>
            <Avatar
              size="small"
              rounded
              icon={{name: 'user', type: 'font-awesome'}}
            />
          </>

          {/* Standard with accessory */}
          <Text style={styles.text}>Avatar with accessory</Text>
          <Avatar
            size={96}
            rounded
            source={{
              uri: 'https://reactnativeelements.com/img/avatar/avatar--photo.jpg',
            }}
            containerStyle={styles.avatarContainer}
            onPress={() => {
              alert('foi');
            }}>
            <Avatar.Accessory name="pencil" type="font-awesome" size={16} />
          </Avatar>
          <Text />
          <Text />
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
  text: {
    fontSize: 20,
    marginTop: 10,
  },
});
