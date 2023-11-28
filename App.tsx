/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type { PropsWithChildren } from 'react';
import {
  Alert,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';


function App(): JSX.Element {
  const onpress = () => Alert.alert('tiklandi');
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <TouchableOpacity onPress={onpress}>
          <Image
            source={{ uri: 'https://picsum.photos/200/300' }}
            style={{ width: 100, height: 150 }}
            blurRadius={10}
            fadeDuration={100}
          />
        </TouchableOpacity>
        <TouchableWithoutFeedback onPress={()=>console.log("2.resme tiklandi")} >
        <Image
            source={{ uri: 'https://picsum.photos/200/300' }}
            style={{ width: 100, height: 150 }}
            blurRadius={10}
            fadeDuration={100}
          />
        </TouchableWithoutFeedback>
        <Text>Image from url</Text>
        <TouchableHighlight activeOpacity={0.3}
          underlayColor="red" onPress={onpress} >
          <Image source={require('./images/tree.jpg')} style={{ width: 50, height: 50 }} blurRadius={2} />
        </TouchableHighlight>
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
    alignItems: 'center',
    justifyContent: 'center'
  },
});

export default App;
