import React, { useState, useContext } from 'react';
import { KeyboardAvoidingView, ScrollView, View, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, Platform, Keyboard, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import GlobalContext from '../../../Contexts/Context';

export default ({ navigation }) => {
  const { signout } = useContext(GlobalContext)

  const handleDeleteAccount = () => {
    Alert.alert('Excluir Conta', 'Você esta prestes a excluir sua conta do sistema, você tem certeza que deseja fazer isso?', [
      {
        text: 'Sim',
        onPress() {
          console.warn('Conta deletada')
          signout()
        }
      },
      {
        text: 'Não',
      }
    ])
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <ScrollView>
            <Text style={{ marginLeft: 14, marginRight: 14, marginBottom: 10, fontSize: 16 }}>Dados do Perfil</Text>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#FFF', marginBottom: 10 }}>
              <Text style={{ marginLeft: 14, marginRight: 14, fontWeight: 'bold' }}>Aniversário</Text>
              <TextInput
                style={{ marginLeft: 14, marginRight: 14 }}
                placeholder='25/09/1978'
              />
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#FFF', marginBottom: 10 }}>
              <Text style={{ marginLeft: 14, marginRight: 14, fontWeight: 'bold' }}>Telefone</Text>
              <TextInput
                style={{ marginLeft: 14, marginRight: 14 }}
                placeholder='21996458033'
              />
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#FFF', marginBottom: 10 }}>
              <Text style={{ marginLeft: 14, marginRight: 14, fontWeight: 'bold' }}>Usuário</Text>
              <TextInput
                style={{ marginLeft: 14, marginRight: 14 }}
                placeholder='cosmeaf'
              />
            </View>

            {/*             
            //-----------------------------------------------------------------------------------------
            // DADOS DO SISTEMA
            //----------------------------------------------------------------------------------------- 
            */}
            <Text style={{ marginLeft: 14, marginRight: 14, marginBottom: 10, fontSize: 16, marginTop: 20 }}>Dados do Sistema</Text>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#FFF', marginBottom: 5 }}>
              <Text style={{ marginLeft: 14, marginRight: 14, fontWeight: 'bold' }}>Nome</Text>
              <TextInput
                style={{ marginLeft: 14, marginRight: 14 }}
                placeholder='Cosme'
              />
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#FFF', marginBottom: 5 }}>
              <Text style={{ marginLeft: 14, marginRight: 14, fontWeight: 'bold' }}>Sobrenome</Text>
              <TextInput
                style={{ marginLeft: 14, marginRight: 14 }}
                placeholder='Alves'
              />
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#FFF', marginBottom: 5 }}>
              <Text style={{ marginLeft: 14, marginRight: 14, fontWeight: 'bold' }}>E-mail</Text>
              <TextInput
                style={{ marginLeft: 14, marginRight: 14 }}
                placeholder='cosme.alex@gmail.com'
              />
            </View>
          </ScrollView>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
      <View style={{ flex: 1, justifyContent: 'flex-end', alignItems: 'center', marginBottom: 20 }}>
        <TouchableOpacity onPress={() => handleDeleteAccount()}>
          <Text style={{ fontSize: 16, fontWeight: 'bold', color: 'red' }}>Excluir Conta</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}