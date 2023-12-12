import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, SafeAreaView } from 'react-native';

let sayi= Math.floor(Math.random() * 10);
const Faktoriyel = (value: number) => {
  let sonuc = 1;
  for (let i = 1; i <= value; i++) {
    sonuc = sonuc * i;
  }
console.log(sonuc);
  return sonuc;
}

function App(): JSX.Element {
  return (
    <SafeAreaView style={stiller.container}>
      <TouchableOpacity style={stiller.box}>
        <Text style={stiller.yaziStil}>{sayi}!={Faktoriyel(sayi)}</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const stiller=StyleSheet.create({
container:{
   flex: 1,
   justifyContent:'center',
   alignItems:'center',
   backgroundColor:'#ecf0f1',
   padding:0,
},
box:{
  height:45,
  width:250,
  borderColor:'black',
  borderRadius:20,
  borderWidth:3,
  backgroundColor:'bisque',
  justifyContent:'center',
  alignItems:'center'
},
yaziStil:{
  fontSize:20,
  color:'orange'
}
});


export default App;
