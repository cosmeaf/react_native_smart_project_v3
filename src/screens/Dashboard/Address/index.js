import React from 'react';
import { ScrollView, View, KeyboardAvoidingView, TextInput, StyleSheet, Text, Platform, TouchableWithoutFeedback, Button, Keyboard, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { SafeAreaView } from 'react-native-safe-area-context';

export default ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/* System Information */}
      <View style={{ flex: 1 }}>
        <Text style={{ marginLeft: 14, marginRight: 14, marginBottom: 20, fontSize: 18, fontWeight: '500' }}>Informações de Endereço</Text>
        {/* First Name */}
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#FFF', marginBottom: 5 }}>
          <Text style={{ marginLeft: 14, padding: 10, fontSize: 18, fontWeight: '500' }}>Cep:</Text>
          <Text style={{ marginRight: 14, padding: 10, fontSize: 16, }}>20710130</Text>
        </View>
        {/* Last Name */}
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#FFF', marginBottom: 5 }}>
          <Text style={{ marginLeft: 14, padding: 10, fontSize: 18, fontWeight: '500' }}>Logradouro:</Text>
          <Text style={{ marginRight: 14, padding: 10, fontSize: 16 }}>Rua Lins de Vasconcelos</Text>
        </View>
        {/* E-mail */}
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#FFF', marginBottom: 5 }}>
          <Text style={{ marginLeft: 14, padding: 10, fontSize: 18, fontWeight: '500' }}>Complemento:</Text>
          <Text style={{ marginRight: 14, padding: 10, fontSize: 16, }}>Numero 542, Apt 302</Text>
        </View>
        {/* E-mail */}
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#FFF', marginBottom: 5 }}>
          <Text style={{ marginLeft: 14, padding: 10, fontSize: 18, fontWeight: '500' }}>Bairro:</Text>
          <Text style={{ marginRight: 14, padding: 10, fontSize: 16, }}>Lins de Vasconcelos</Text>
        </View>
        {/* E-mail */}
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#FFF', marginBottom: 5 }}>
          <Text style={{ marginLeft: 14, padding: 10, fontSize: 18, fontWeight: '500' }}>Localidade:</Text>
          <Text style={{ marginRight: 14, padding: 10, fontSize: 16, }}>Rio de Janeiro</Text>
        </View>
        {/* UF / state */}
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#FFF', marginBottom: 5 }}>
          <Text style={{ marginLeft: 14, padding: 10, fontSize: 18, fontWeight: '500' }}>Estado:</Text>
          <Text style={{ marginRight: 14, padding: 10, fontSize: 16, }}>RJ</Text>
        </View>

      </View>
      <View style={{ justifyContent: 'center', alignItems: 'center', marginBottom: 10 }}>
        <TouchableOpacity>
          <Text style={{ fontSize: 18, fontWeight: '500', color: 'red' }}>Excluir Conta</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}