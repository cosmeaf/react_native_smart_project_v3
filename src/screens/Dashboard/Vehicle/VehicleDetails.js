import React from 'react';
import { ScrollView, View, KeyboardAvoidingView, TextInput, StyleSheet, Text, Platform, TouchableWithoutFeedback, Button, Keyboard, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { SafeAreaView } from 'react-native-safe-area-context';

export default ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <Text style={{ marginLeft: 14, marginRight: 14, marginBottom: 20, fontSize: 16, fontWeight: '500' }}>Dados do Veículo</Text>
        {/* Brand */}
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#FFF', marginBottom: 5 }}>
          <Text style={{ marginLeft: 14, padding: 10, fontWeight: '500' }}>Marca:</Text>
          <Text style={{ marginRight: 14, padding: 10 }}>Honda</Text>
        </View>
        {/* Model */}
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#FFF', marginBottom: 5 }}>
          <Text style={{ marginLeft: 14, padding: 10, fontWeight: '500' }}>Modelo:</Text>
          <Text style={{ marginRight: 14, padding: 10 }}>Civic LXS 1.8 16V 4P Mec</Text>
        </View>
        {/* Fuel */}
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#FFF', marginBottom: 5 }}>
          <Text style={{ marginLeft: 14, padding: 10, fontWeight: '500' }}>Combustível:</Text>
          <Text style={{ marginRight: 14, padding: 10 }}>Gasolina</Text>
        </View>
        {/* Years */}
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#FFF', marginBottom: 5 }}>
          <Text style={{ marginLeft: 14, padding: 10, fontWeight: '500' }}>Ano Fabricação:</Text>
          <Text style={{ marginRight: 14, padding: 10 }}>2014</Text>
        </View>
        {/* Plate Id */}
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#FFF', marginBottom: 5 }}>
          <Text style={{ marginLeft: 14, padding: 10, fontWeight: '500' }}>Placa:</Text>
          <Text style={{ marginRight: 14, padding: 10 }}>LQV1965</Text>
        </View>
        {/* Odomiter */}
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#FFF', marginBottom: 5 }}>
          <Text style={{ marginLeft: 14, padding: 10, fontWeight: '500' }}>Hodomêtro / KM:</Text>
          <Text style={{ marginRight: 14, padding: 10 }}>1304291</Text>
        </View>
        {/* Table Price */}
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#FFF', marginBottom: 5 }}>
          <Text style={{ marginLeft: 14, padding: 10, fontWeight: '500' }}>Tabela Fipe:</Text>
          <Text style={{ marginRight: 14, padding: 10 }}>R$ 30.213.19</Text>
        </View>
      </View>
      <View style={{ justifyContent: 'center', alignItems: 'center', marginBottom: 10 }}>
        <TouchableOpacity>
          <Text style={{ fontSize: 16, fontWeight: '500', color: 'red' }}>Ecluir Veículo</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}