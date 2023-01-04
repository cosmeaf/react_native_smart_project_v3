import React, { useState, useEffect, useContext } from 'react';
import { ScrollView, View, TextInput, StyleSheet, Text, TouchableOpacity, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TextInputMask } from 'react-native-masked-text'
import Modal from "react-native-modal";
import Moment, { utc } from 'moment';
import moment from 'moment';
import Ionicons from 'react-native-vector-icons/Ionicons';
import GlobalContext from '../../../Contexts/Context';
import TabOneLine from '../../../componentes/TabOneLine';
import Api from '../../../service/Api';


export default ({ navigation }) => {
  const { authentication, isLoading, signout } = useContext(GlobalContext);
  const [profile, setProfile] = useState([]);
  const [user, setUser] = useState([]);
  const [birthday, setBirthday] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const [isModalVisibleFirstName, setIsModalVisibleFirstName] = useState(false);
  const [isModalVisibleLastName, setIsModalVisibleLastName] = useState(false);

  const [isModalVisiblePhone, setIsModalVisiblePhone] = useState(false);
  const [isModalVisibleBrithday, setIsModalVisibleBirthday] = useState(false);

  const handleModalFirstName = () => setIsModalVisibleFirstName(() => !isModalVisibleFirstName);
  const handleModalLastName = () => setIsModalVisibleLastName(() => !isModalVisibleLastName);
  const handleModalPhone = () => setIsModalVisiblePhone(() => !isModalVisiblePhone);
  const handleModalBrithday = () => setIsModalVisibleBirthday(() => !isModalVisibleBrithday);

  if (!authentication) {
    signout();
  }

  useEffect(() => {
    getProfile();
    getUser();
  }, [authentication]);

  const getProfile = async () => {
    let res = await Api.getProfile();
    if (res.ok != false) {
      res.map((item, key) => (
        setProfile(item)
      ));
    } else {
      signout();
    }
  }

  const getUser = async () => {
    let res = await Api.getUser();
    if (res.ok != false) {
      res.map((item, key) => (
        setUser(item)
      ));
    } else {
      signout();
    }
  }

  const updateUser = async (id, firstName, lastName) => {
    if (id !== '' && firstName !== '' && lastName !== '') {
      Api.updateUser(id, firstName, lastName)
      getUser();
      getProfile();
      setIsModalVisibleFirstName(false);
      setIsModalVisibleLastName(false);
    } else {
      Alert.alert('Ops! Favor preencher campo');
    }
  }

  const updateProfile = async (id, birthday, phoneNumber) => {
    const date = moment(birthday, 'DD-MM-YYYY')
    const newBirthday = moment(date).utc().format("YYYY-MM-DD")

    if (id !== '' && newBirthday !== '' || phoneNumber) {
      Api.updateProfile(id, newBirthday, phoneNumber)
      getProfile();
      getUser();
      setIsModalVisibleBirthday(false);
      setIsModalVisiblePhone(false);
    } else {
      Alert.alert('Ops! Favor preencher campo');
    }
  }

  const deleteUser = async (id) => {
    if (id !== '') {
      Alert.alert('EXCLUIR CONTA', 'Tem certeza que deseja excluir usuário do sistema?', [
        {
          text: "Sim",
          onPress: () => {
            Api.deleteUser(id);
            signout();
          }
        },
        {
          text: "Não",
        }
      ])
    } else {
      Alert.alert('Ops! Usuário não encontrato');
    }
  }


  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
        {/* System Information */}
        <View>
          <Text style={{ marginLeft: 14, marginRight: 14, marginBottom: 20, fontSize: 14, fontWeight: '500' }}>Sistema</Text>
          {/* Username */}
          <TabOneLine title='Usuário:' subTitle={user.username} />
          {/* E-mail */}
          <TabOneLine title='E-mail:' subTitle={user.email} />
          {/* First Name */}
          <TabOneLine title='Nome:' subTitle={user.first_name ? user.first_name : ''} onPress={() => handleModalFirstName()} />
          {/* Last Name */}
          <TabOneLine title='Sobrenome:' subTitle={user.last_name ? user.last_name : ''} onPress={() => handleModalLastName()} />
        </View>

        {/* Profile Information */}
        <View style={{ marginTop: 30 }} >
          <Text style={{ marginLeft: 14, marginRight: 14, marginBottom: 20, fontSize: 14, fontWeight: '500' }}>Perfil</Text>
          {/* Birthday */}
          <TabOneLine title='Aniversário:'
            subTitle={profile.birthday ? Moment(profile.birthday).format('DD/MM/YYYY') : ''}
            onPress={() => handleModalBrithday()}
          />
          {/* Mobile number */}
          <TabOneLine title='Contato:'
            subTitle={profile.phone_number ? profile.phone_number : ''}
            onPress={() => handleModalPhone()} />
        </View>

      </ScrollView>
      <View style={{ justifyContent: 'center', alignItems: 'center', marginBottom: 10 }}>
        <TouchableOpacity onPress={() => deleteUser(user.id)}>
          <Text style={{ fontSize: 18, fontWeight: '500', color: 'red' }}>Excluir Conta</Text>
        </TouchableOpacity>
      </View>
      {/* MODAL PART BITHDAY */}
      <Modal isVisible={isModalVisibleBrithday} style={styles.modal}>
        <View style={styles.modalContainer}>
          <TextInputMask
            style={styles.modaTextInput}
            type={'datetime'}
            options={{
              format: 'DD/MM/YYYY'
            }}
            onChangeText={text => setBirthday(text)}
            value={birthday}
          />
          <TextInput />
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <TouchableOpacity
              style={styles.modalButton}
              onPress={() => updateProfile(profile.id, birthday, profile.phone_number)}>
              <Text style={styles.modalButtonText}>Salvar</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.modalButton}
              onPress={handleModalBrithday}>
              <Text style={styles.modalButtonText}>Sair</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      {/* MODAL PART PHONE NNUMBER */}
      <Modal isVisible={isModalVisiblePhone} style={styles.modal}>
        <View style={styles.modalContainer}>
          <TextInput
            style={styles.modaTextInput}
            placeholder={profile.phone_number}
            onChangeText={text => setPhoneNumber(text)}
            value={phoneNumber}
          />
          <TextInput />
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <TouchableOpacity
              style={styles.modalButton}
              onPress={() => updateProfile(profile.id, profile.birthday, phoneNumber)}>
              <Text style={styles.modalButtonText}>Salvar</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.modalButton}
              onPress={handleModalPhone}>
              <Text style={styles.modalButtonText}>Sair</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      {/* MODAL PART FIRST_NAME */}
      <Modal isVisible={isModalVisibleFirstName} style={styles.modal}>
        <View style={styles.modalContainer}>
          <TextInput
            style={styles.modaTextInput}
            placeholder={user.first_name}
            onChangeText={text => setFirstName(text)}
            value={firstName}
          />
          <TextInput />
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <TouchableOpacity
              style={styles.modalButton}
              onPress={() => updateUser(user.id, firstName, user.lastName)}>
              <Text style={styles.modalButtonText}>Salvar</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.modalButton}
              onPress={handleModalFirstName}>
              <Text style={styles.modalButtonText}>Sair</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      {/* MODAL PART LAST_NAME */}
      <Modal isVisible={isModalVisibleLastName} style={styles.modal}>
        <View style={styles.modalContainer}>
          <TextInput
            style={styles.modaTextInput}
            placeholder={user.last_name}
            onChangeText={text => setLastName(text)}
            value={lastName}
          />
          <TextInput />
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <TouchableOpacity
              style={styles.modalButton}
              onPress={() => updateUser(user.id, user.firstName, lastName)}>
              <Text style={styles.modalButtonText}>Salvar</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.modalButton}
              onPress={handleModalLastName}>
              <Text style={styles.modalButtonText}>Sair</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  modal: { justifyContent: 'center', alignItems: 'center' },
  modalContainer: { justifyContent: 'center', padding: 10, backgroundColor: '#FFF', height: 180, width: '94%', borderRadius: 10 },
  modaTextInput: { height: 40, borderColor: 'gray', borderWidth: 1, paddingLeft: 14, fontSize: 16, backgroundColor: '#F2F2F2', borderRadius: 10 },
  modalButton: { width: 100, justifyContent: 'center', alignItems: 'center', backgroundColor: '#F16529', padding: 5, borderRadius: 10 },
  modalButtonText: { fontSize: 18, color: '#FFF' }
});