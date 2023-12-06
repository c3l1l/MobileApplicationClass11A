/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  StyleSheet,
  Text,
  Button,
  TextInput,
  View,
} from 'react-native';


function App(): JSX.Element {
  const [text, onChangeText] = React.useState();
  const [sifre, onChangeSifre] = React.useState();
  console.log(text);

  return (
    <View style={{ flex: 1 }}>
    <View style={styles.header}>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        placeholder="Kullanıcı Adı Giriniz..."
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeSifre}
        value={sifre}
        keyboardType="visible-password"
        placeholder="Şifre Giriniz..."
        secureTextEntry={true}
      />
    </View>
    <View style={styles.body}>
      <Button
        title="Giriş Yap"
        onPress={() => console.log(text + " " + sifre)}
      />
    </View>
    <View style={styles.footer}>
      <Text>Made by Ali</Text>
    </View>
  </View>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10
  },
  header: {
    flex: 0.6,
    backgroundColor: "#f5f5dc",
    borderWidth: 3,
    borderColor: "black",
    borderBottomEndRadius: 15,
    borderBottomStartRadius: 15,
    padding: 10,
    margin: 10,
    alignItems: "center",
    justifyContent: "center"
  },
  body: {
    flex: 0.2,
    backgroundColor: "azure",
    borderWidth: 3,
    borderColor: "black",
    borderRadius: 15,
    padding: 10,
    margin: 10,
    alignItems: "center",
    justifyContent: "center"
  },
  footer: {
    flex: 0.2,
    backgroundColor: "#FAEBD7",
    borderWidth: 3,
    borderColor: "black",
    borderTopStartRadius: 15,
    borderTopEndRadius: 15,
    padding: 10,
    margin: 10,
    alignItems: "center",
    justifyContent: "center"
  }
});

export default App;
