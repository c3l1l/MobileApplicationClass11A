/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type { PropsWithChildren } from 'react';
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';


function App(): JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Image
        source={{ uri: 'https://picsum.photos/200/300'}}
        style={{ width: 200, height: 300 }}
        blurRadius={10}
        fadeDuration={100}
        />
        <Text>Image from url</Text>
        <Image source={require('./images/tree.jpg')} style={{ width: 200, height: 300 }} blurRadius={2}  />
        <Text>static image</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    color: '#083061',
    backgroundColor: '#2596be',
    alignItems:'center',
    justifyContent:'center'
  },
});

export default App;
