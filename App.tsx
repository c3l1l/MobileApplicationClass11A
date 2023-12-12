import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, SafeAreaView, TextInput } from 'react-native';

let sayi= Math.floor(Math.random() * 10);
const Faktoriyel = (value:any) => {
  let sonuc = 1;
  for (let i = 1; i <= value; i++) {
    sonuc = sonuc * i;
  }
console.log(sonuc);
  return sonuc;
}
 const Selamla=(deger:any)=>{
  if(deger!=null){
    return (<Text>Merhaba {deger}</Text>)
  }
  else
  return null;
 }

function App(): JSX.Element {
  const [text,onChangeText]=useState();
  const [isim,isimDegisken]= React.useState();
  return (
    <SafeAreaView style={stiller.container}>
      <TouchableOpacity style={stiller.box}>
        <Text style={stiller.yaziStil}>{sayi}!={Faktoriyel(sayi)}</Text>
      </TouchableOpacity>
      <View style={stiller.box}>
        <TextInput
        value={text}
        onChangeText={onChangeText}
        placeholder='Bir sayi gir'
        />
      </View>
      <TouchableOpacity style={stiller.box}>
        <Text style={stiller.yaziStil}>{text}!={Faktoriyel(text)}</Text>
      </TouchableOpacity>
      <View style={stiller.box} >
        <TextInput
        value={isim}
        onChangeText={isimDegisken}
        placeholder='Isminiz .....'
        />
        {Selamla(isim)}
      </View>
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
