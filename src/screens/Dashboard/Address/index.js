import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  View,
  KeyboardAvoidingView,
  ScrollView,
  TextInput,
  StyleSheet,
  Text,
  Platform,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Keyboard
} from 'react-native';



export default ({ navigation }) => {

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <ScrollView>
            <Text style={{ marginLeft: 14, marginRight: 14, fontSize: 16, marginBottom: 10 }}>Endereço</Text>
            {/* Cep */}
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#FFF', marginBottom: 10 }}>
              <Text style={{ marginLeft: 14 }}>
                Cep:
              </Text>
              <TextInput
                style={{ marginRight: 14 }}
                placeholder='20710130'
              />
            </View>
            {/* logradouro */}
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#FFF', marginBottom: 10 }}>
              <Text style={{ marginLeft: 14 }}>
                Rua / Avenida:
              </Text>
              <TextInput
                style={{ marginRight: 14 }}
                placeholder='Rua lins de Vasconcelos'
              />
            </View>
            {/* complemento */}
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#FFF', marginBottom: 10 }}>
              <Text style={{ marginLeft: 14 }}>
                Complemento:
              </Text>
              <TextInput
                style={{ marginRight: 14 }}
                placeholder='Numero 542, Apartamento 302'
              />
            </View>
            {/* Bairro */}
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#FFF', marginBottom: 10 }}>
              <Text style={{ marginLeft: 14 }}>
                Bairro:
              </Text>
              <TextInput
                style={{ marginRight: 14 }}
                placeholder='Lins de Vasconcelos'
              />
            </View>
            {/* Localidade */}
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#FFF', marginBottom: 10 }}>
              <Text style={{ marginLeft: 14 }}>
                Cidade:
              </Text>
              <TextInput
                style={{ marginRight: 14 }}
                placeholder='Rio de Janeiro'
              />
            </View>
            {/* Uf */}
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#FFF', marginBottom: 10 }}>
              <Text style={{ marginLeft: 14 }}>
                UF:
              </Text>
              <TextInput
                style={{ marginRight: 14 }}
                placeholder='RJ'
              />
            </View>
          </ScrollView>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
      <View style={{ flex: 1, justifyContent: 'flex-end' }}>
        <TouchableOpacity style={{ backgroundColor: '#FFF', justifyContent: 'center', alignItems: 'center', marginBottom: 20, padding: 10 }}>
          <Text style={{ fontSize: 16, fontWeight: '500', color: 'red' }}>Salvar</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

