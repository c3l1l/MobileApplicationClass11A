/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {StyleSheet,View,Text} from 'react-native';

const Faktoriyel=(value: number)=>{
  let sonuc=1;
  for(let i=1;i<=value;i++){
    sonuc=sonuc*1
;  }

  return sonuc;
 }
 let sayi=Math.floor(Math.random()*10);

function App(): JSX.Element {
  return (
    <View style={{ flex: 1 }}>
      <Text>{sayi}!={Faktoriyel(sayi)}</Text>
  </View>
  );
}


export default App;
