import React, { useContext } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, Image } from 'react-native';
import GlobalContext from '../../../Contexts/Context';
import styles from './styles';

const Vehicle = () => {
  const { signout } = useContext(GlobalContext);

  const handlerSignOut = () => {
    signout()
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerMenu}>
          <Icon name="ios-menu" size={30} color="#38A69D" onPress={() => Alert.alert('Menu Smart Mecânico')} />
        </View>
        <Text style={styles.headerText}> Configurações </Text>
        <View tyle={styles.headerProfile}>
          <ImageBackground
            source={require('../../../assets/image/avatar.png')}
            style={styles.headerImage}
            imageStyle={{ borderRadius: 25 }}
          />
        </View>
      </View>
      <View>
        <TouchableOpacity activeOpacity={0.8}
          style={{ flexDirection: 'row', height: 60, backgroundColor: '#cbe6e2', justifyContent: 'space-between', alignItems: 'center', marginLeft: 10, marginRight: 10, borderRadius: 15, marginTop: 10, paddingLeft: 10, paddingRight: 20 }}>
          <View style={{ width: 40, height: 40 }} >
            <Image source={require('../../../assets/icons/user.png')} resizeMode='cover' style={{ flex: 1, width: null, height: null }} />
          </View>
          <Text style={{ fontSize: 18, color: '#0b201f' }}>Minha Conta</Text>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.8}
          style={{ flexDirection: 'row', height: 60, backgroundColor: '#cbe6e2', justifyContent: 'space-between', alignItems: 'center', marginLeft: 10, marginRight: 10, borderRadius: 15, marginTop: 10, paddingLeft: 10, paddingRight: 20 }}>
          <View style={{ width: 40, height: 40 }} >
            <Image source={require('../../../assets/icons/location.png')} resizeMode='cover' style={{ flex: 1, width: null, height: null }} />
          </View>
          <Text style={{ fontSize: 18, color: '#0b201f' }}>Endereço</Text>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.8}
          style={{ flexDirection: 'row', height: 60, backgroundColor: '#cbe6e2', justifyContent: 'space-between', alignItems: 'center', marginLeft: 10, marginRight: 10, borderRadius: 15, marginTop: 10, paddingLeft: 10, paddingRight: 20 }}>
          <View style={{ width: 40, height: 40 }} >
            <Image source={require('../../../assets/icons/alert.png')} resizeMode='cover' style={{ flex: 1, width: null, height: null }} />
          </View>
          <Text style={{ fontSize: 18, color: '#0b201f' }}>Alrta de Manutenções</Text>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.8}
          style={{ flexDirection: 'row', height: 60, backgroundColor: '#cbe6e2', justifyContent: 'space-between', alignItems: 'center', marginLeft: 10, marginRight: 10, borderRadius: 15, marginTop: 10, paddingLeft: 10, paddingRight: 20 }}>
          <View style={{ width: 40, height: 40 }} >
            <Image source={require('../../../assets/icons/team.png')} resizeMode='cover' style={{ flex: 1, width: null, height: null }} />
          </View>
          <Text style={{ fontSize: 18, color: '#0b201f' }}>Sobre Smart Mecânico</Text>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.8}
          style={{ flexDirection: 'row', height: 60, backgroundColor: '#cbe6e2', justifyContent: 'space-between', alignItems: 'center', marginLeft: 10, marginRight: 10, borderRadius: 15, marginTop: 10, paddingLeft: 10, paddingRight: 20 }}>
          <View style={{ width: 40, height: 40 }} >
            <Image source={require('../../../assets/icons/email.png')} resizeMode='cover' style={{ flex: 1, width: null, height: null }} />
          </View>
          <Text style={{ fontSize: 18, color: '#0b201f' }}>E-mails e Sugestões</Text>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.8}
          style={{ flexDirection: 'row', height: 60, backgroundColor: '#cbe6e2', justifyContent: 'space-between', alignItems: 'center', marginLeft: 10, marginRight: 10, borderRadius: 15, marginTop: 10, paddingLeft: 10, paddingRight: 20 }}>
          <View style={{ width: 40, height: 40 }} >
            <Image source={require('../../../assets/icons/mechanic.png')} resizeMode='cover' style={{ flex: 1, width: null, height: null }} />
          </View>
          <Text style={{ fontSize: 18, color: '#0b201f' }}>Dicas e sugestões</Text>
        </TouchableOpacity>
      </View>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <TouchableOpacity activeOpacity={0.8} style={{ flexDirection: 'row', justifyContent: 'space-evenly', backgroundColor: '#38A69D', width: '50%', padding: 10, borderRadius: 25, alignItems: 'center', elevation: 5 }} onPress={() => handlerSignOut()} >
          <Text style={{ color: '#FFF', fontWeight: 'bold', fontSize: 18 }}>SAIR</Text>
          <Icon name="ios-log-out-outline" size={20} color="#FFF" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default Vehicle;