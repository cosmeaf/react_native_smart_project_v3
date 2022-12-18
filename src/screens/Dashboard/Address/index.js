import React, { useState, useEffect } from 'react';
import { ScrollView, View, TextInput, StyleSheet, Text, TouchableOpacity, Alert, ActivityIndicator } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { SafeAreaView } from 'react-native-safe-area-context';
import Modal from "react-native-modal";
import TabOneLine from '../../../componentes/TabOneLine';
import Api from '../../../service/Api';

export default ({ navigation }) => {
  const [address, setAddress] = useState({});
  const [cep, setCep] = useState('');
  const [logradouro, setLogradouro] = useState('');
  const [complemento, setComplemento] = useState('');
  const [bairro, setBairro] = useState('');
  const [localidade, setLocalidade] = useState('');
  const [uf, setUf] = useState('');
  const [isModalVisibleCep, setIsModalVisibleCep] = useState(false)
  const [isModalVisibleComplemento, setIsModalVisibleComplemento] = useState(false)
  const [isLoading, setIsLoading] = useState(false);

  const handleModalCep = () => setIsModalVisibleCep(() => !isModalVisibleCep);
  const handleModalComplemento = () => setIsModalVisibleComplemento(() => !isModalVisibleComplemento);

  useEffect(() => {
    getAddress();

  }, []);

  const viaCepApi = async (cep) => {
    let res = await Api.getCep(cep);
    if (res !== false) {
      setAddress(res);
      setIsModalVisibleCep(false);
    } else {
      console.warn('Ops! Estamos com problema para carregar dados do CEP. Pro Favor Tente mais tarde', `Error ${res.status}`)
      signout();
    }
  }

  const getAddress = async () => {
    let res = await Api.getAddress();
    if (res) {
      res.map((item, key) => (
        setAddress(item)
      ));
    } else {
      console.warn('Ops! Estamos com problema para carregar dados do CEP. Pro Favor Tente mais tarde', `Error ${res.status}`)
      signout();
    }
  }

  const saveAddress = async (cep, logradouro, complemento, bairro, localidade, uf) => {
    if (cep == '' || logradouro == '' || complemento == '' || bairro == '' || localidade == '' || uf == '') {
      Alert.alert('Ops! Favor Preencher todos os campos')
    } else {
      setIsModalVisibleComplemento(false);
      setIsModalVisibleCep(false);
      await Api.createAddress(cep, logradouro, complemento, bairro, localidade, uf);
      getAddress();
    }
  }

  const deleteAddress = async (id) => {
    if (id) {
      Alert.alert('Excluir Endereço', 'Tem certeza que deseja excluir Endereço do sistema?', [
        {
          text: "Sim",
          onPress: () => {
            Api.deleteAddress(id);
            getAddress();
            navigation.navigate('Profile');
          }
        },
        {
          text: "Não",
        }
      ])
    } else {
      Alert.alert('Atenção', 'Desculpe, não há endereço registrado para ser excluido!');
    }
  }


  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
        {/* Address Data */}
        <View>
          <Text style={{ marginLeft: 14, marginRight: 14, marginBottom: 20, fontSize: 14, fontWeight: '500' }}>Informações de Endereço</Text>
          {/* CEP */}
          <TabOneLine title='Cep:' subTitle={address.cep ? address.cep : '...'} onPress={() => handleModalCep(cep)} />
          <TabOneLine title='Logradouro:' subTitle={address.logradouro ? address.logradouro : ''} />
          <TabOneLine
            title='Complemento:'
            subTitle={address.complemento ? address.complemento : ''}
            onPress={() => handleModalComplemento(cep, logradouro, complemento, bairro, localidade, uf)}
          />
          <TabOneLine title='Bairro:' subTitle={address.bairro ? address.bairro : ''} />
          <TabOneLine title='Cidade:' subTitle={address.localidade ? address.localidade : ''} />
          <TabOneLine title='Estado:' subTitle={address.uf ? address.uf : ''} />
        </View>
        {/* MODAL SET CEP DATA  */}
        <Modal isVisible={isModalVisibleCep} style={styles.modal}>
          <View style={styles.modalContainer}>
            <TextInput
              style={styles.modaTextInput}
              placeholder={cep ? cep : 'Digite seu CEP'}
              onChangeText={text => setCep(text)}
              value={cep}
            />
            <TextInput />
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <TouchableOpacity
                style={styles.modalButton}
                onPress={() => viaCepApi(cep)}
              >
                <Text style={styles.modalButtonText}>Salvar</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.modalButton}
                onPress={() => setIsModalVisibleCep(false)}>
                <Text style={styles.modalButtonText}>Sair</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
        {/* MODAL SET COMPLEMENTO DATA*/}
        <Modal isVisible={isModalVisibleComplemento} style={styles.modal}>
          <View style={styles.modalContainer}>
            <TextInput
              style={styles.modaTextInput}
              placeholder={'Complemento'}
              onChangeText={text => setComplemento(text)}
              value={complemento}
            />
            <TextInput />
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <TouchableOpacity
                style={styles.modalButton}
                onPress={() => saveAddress(address.cep, address.logradouro, complemento, address.bairro, address.localidade, address.uf)}
              >
                <Text style={styles.modalButtonText}>Salvar</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.modalButton}
                onPress={() => setIsModalVisibleComplemento(false)}>
                <Text style={styles.modalButtonText}>Sair</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </ScrollView>
      <View style={styles.excludeButton}>
        <TouchableOpacity
          onPress={() => deleteAddress(address.id)}
        >
          <Text style={styles.excludeButtonText}>Excluir Endereço</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  modal: { justifyContent: 'center', alignItems: 'center' },
  modalContainer: { justifyContent: 'center', padding: 10, backgroundColor: '#FFF', height: 180, width: '94%', borderRadius: 10 },
  modaTextInput: { height: 40, borderColor: 'gray', borderWidth: 1, paddingLeft: 14, fontSize: 16, backgroundColor: '#F2F2F2', borderRadius: 10 },
  modalButton: { width: 100, justifyContent: 'center', alignItems: 'center', backgroundColor: '#F16529', padding: 5, borderRadius: 10 },
  modalButtonText: { fontSize: 18, color: '#FFF' },
  excludeButton: { justifyContent: 'center', alignItems: 'center', marginBottom: 10 },
  excludeButtonText: { fontSize: 18, fontWeight: '500', color: 'red' },
})