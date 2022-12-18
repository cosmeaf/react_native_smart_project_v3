import React, { useState, useEffect, useContext } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, Alert, ActivityIndicator, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';
import GlobalContext from '../../../Contexts/Context';
import Api from '../../../service/Api';

export default ({ navigation }) => {
  const { signout } = useContext(GlobalContext);
  const [profile, setProfile] = useState('');
  const [user, setUser] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getProfile();
    getUser();
  }, [])

  const getProfile = async () => {
    let res = await Api.getProfile();
    if (res.ok != false) {
      res.map((item, key) => (
        setProfile(item)
      ));
      setIsLoading(false)
    } else {
      console.warn('Ops! Estamos com problema para acessar suas informação. Pro Favor Tente mais tarde', `Error ${res.status}`)
      signout();
    }
  }

  const getUser = async () => {
    let res = await Api.getUser();
    if (res.ok != false) {
      res.map((item, key) => (
        setUser(item)
      ));
      setIsLoading(false)
    } else {
      console.warn('Ops! Estamos com problema para acessar suas informação. Pro Favor Tente mais tarde', `Error ${res.status}`)
      signout();
    }
  }

  return (
    <SafeAreaView style={{ flex: 1, marginLeft: 14, marginRight: 14, backgroundColor: '#FFF' }}>
      <View style={{ justifyContent: 'center', alignItems: 'center' }}>
        {
          profile.image
            ?
            <Image source={{ uri: profile.image }} resizeMode='cover' style={{ width: 100, height: 100, overflow: 'hidden', borderRadius: 50 }} />
            :
            <View style={{ backgroundColor: '#38A', width: 100, height: 100, borderRadius: 50 }}></View>
        }
      </View>
      <Text style={{ textAlign: 'center', fontSize: 22, marginTop: 20 }}> {user.first_name} {user.last_name} </Text>
      <Text style={{ textAlign: 'center', fontSize: 14, marginBottom: 20, color: '#CCC' }}> {user.email} </Text>
      <View style={{ marginStart: 10, marginEnd: 10 }}>
        {/* Acocunt Information */}
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '100%',
            backgroundColor: '#F1F1F1',
            alignItems: 'center',
            paddingLeft: 10,
            paddingRight: 10,
            paddingBottom: 5,
            paddingTop: 4,
            marginBottom: 10,
            borderRadius: 10
          }}
          onPress={() => navigation.navigate('User')}
        >
          <Ionicons name='person-circle-outline' color='#252525' size={30} />
          <Text style={{ fontSize: 18 }}>  Conta</Text>
          <Ionicons name='chevron-forward' color='#252525' size={20} />
        </TouchableOpacity>
        {/* Address Informations */}
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '100%',
            backgroundColor: '#F1F1F1',
            alignItems: 'center',
            paddingLeft: 10,
            paddingRight: 10,
            paddingBottom: 5,
            paddingTop: 4,
            marginBottom: 10,
            borderRadius: 10
          }}
          onPress={() => navigation.navigate('Address')}
        >
          <Ionicons name='business-outline' color='#252525' size={30} />
          <Text style={{ fontSize: 18 }}> Endereço</Text>
          <Ionicons name='chevron-forward' color='#252525' size={20} />
        </TouchableOpacity>
        {/* Vehicle Informations */}
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '100%',
            backgroundColor: '#F1F1F1',
            alignItems: 'center',
            paddingLeft: 10,
            paddingRight: 10,
            paddingBottom: 5,
            paddingTop: 4,
            marginBottom: 10,
            borderRadius: 10
          }}
          onPress={() => navigation.navigate('Vehicle')}
        >
          <Ionicons name='car-sport-outline' color='#252525' size={30} />
          <Text style={{ fontSize: 18 }}> Veículos</Text>
          <Ionicons name='chevron-forward' color='#252525' size={20} />
        </TouchableOpacity>
        {/* System Config */}
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '100%',
            backgroundColor: '#F1F1F1',
            alignItems: 'center',
            paddingLeft: 10,
            paddingRight: 10,
            paddingBottom: 5,
            paddingTop: 4,
            marginBottom: 10,
            borderRadius: 10
          }}
          onPress={() => navigation.navigate('Settings')}
        >
          <Ionicons name='settings-outline' color='#252525' size={30} />
          <Text style={{ fontSize: 18 }}> Ajustes </Text>
          <Ionicons name='chevron-forward' color='#252525' size={20} />
        </TouchableOpacity>
        {/* System Config */}
        {/* <TouchableOpacity
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '100%',
            backgroundColor: '#F1F1F1',
            alignItems: 'center',
            paddingLeft: 10,
            paddingRight: 10,
            paddingBottom: 5,
            paddingTop: 4,
            marginBottom: 10,
            borderRadius: 10
          }}
          onPress={() => navigation.navigate('TabOneScreen')}
        >
          <Ionicons name='cog' color='#252525' size={30} />
          <Text style={{ fontSize: 18 }}> Componentes </Text>
          <Ionicons name='chevron-forward' color='#252525' size={20} />
        </TouchableOpacity> */}
      </View>
      {/* SIGN-OUT OF SYSTEM */}
      <View style={{ marginStart: 10, marginEnd: 10, marginTop: 80 }}>
        <TouchableOpacity style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          backgroundColor: '#FFF',
          alignItems: 'center',
          padding: 8,
          marginBottom: 10,
          borderRadius: 10,
          borderWidth: 1,
        }}
          onPress={() => signout()}
        >
          <Text style={{ fontSize: 18, fontWeight: '500' }}>Sair</Text>
        </TouchableOpacity>
      </View>

    </SafeAreaView>
  )
}