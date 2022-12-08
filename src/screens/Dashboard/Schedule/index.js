import React, { useContext } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, Image, Alert, ScrollView } from 'react-native';

import styles from './styles';

const Schedule = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <View style={styles.headerMenu}>
            {/* <Icon name="ios-arrow-back-outline" size={30} color="#38A69D" onPress={() => Alert.alert('Menu Smart Mecânico')} /> */}
            <Icon name="ios-menu" size={30} color="#38A69D" onPress={() => Alert.alert('Menu Smart Mecânico')} />
          </View>
          <Text style={styles.headerText}> Meus Agendamentos </Text>
          <View tyle={styles.headerProfile}>

          </View>
        </View>
        <View>
          <TouchableOpacity activeOpacity={0.8}
            style={{ flexDirection: 'row', height: 80, backgroundColor: '#cbe6e2', justifyContent: 'space-around', alignItems: 'center', marginLeft: 10, marginRight: 10, borderRadius: 15, marginTop: 20 }}>
            <View style={{ width: 60, height: 60 }} >
              <Image source={require('../../../assets/icons/schedule.png')} resizeMode='cover' style={{ flex: 1, width: null, height: null }} />
            </View>
            <Text style={{ fontSize: 18 }}>Rastreamento</Text>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.8}
            style={{ flexDirection: 'row', height: 80, backgroundColor: '#cbe6e2', justifyContent: 'space-around', alignItems: 'center', marginLeft: 10, marginRight: 10, borderRadius: 15, marginTop: 20 }}>
            <View style={{ width: 60, height: 60 }} >
              <Image source={require('../../../assets/icons/schedule.png')} resizeMode='cover' style={{ flex: 1, width: null, height: null }} />
            </View>
            <Text style={{ fontSize: 18 }}>Rastreamento</Text>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.8}
            style={{ flexDirection: 'row', height: 80, backgroundColor: '#cbe6e2', justifyContent: 'space-around', alignItems: 'center', marginLeft: 10, marginRight: 10, borderRadius: 15, marginTop: 20 }}>
            <View style={{ width: 60, height: 60 }} >
              <Image source={require('../../../assets/icons/schedule.png')} resizeMode='cover' style={{ flex: 1, width: null, height: null }} />
            </View>
            <Text style={{ fontSize: 18 }}>Rastreamento</Text>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.8}
            style={{ flexDirection: 'row', height: 80, backgroundColor: '#cbe6e2', justifyContent: 'space-around', alignItems: 'center', marginLeft: 10, marginRight: 10, borderRadius: 15, marginTop: 20 }}>
            <View style={{ width: 60, height: 60 }} >
              <Image source={require('../../../assets/icons/schedule.png')} resizeMode='cover' style={{ flex: 1, width: null, height: null }} />
            </View>
            <Text style={{ fontSize: 18 }}>Rastreamento</Text>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.8}
            style={{ flexDirection: 'row', height: 80, backgroundColor: '#cbe6e2', justifyContent: 'space-around', alignItems: 'center', marginLeft: 10, marginRight: 10, borderRadius: 15, marginTop: 20 }}>
            <View style={{ width: 60, height: 60 }} >
              <Image source={require('../../../assets/icons/schedule.png')} resizeMode='cover' style={{ flex: 1, width: null, height: null }} />
            </View>
            <Text style={{ fontSize: 18 }}>Rastreamento</Text>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.8}
            style={{ flexDirection: 'row', height: 80, backgroundColor: '#cbe6e2', justifyContent: 'space-around', alignItems: 'center', marginLeft: 10, marginRight: 10, borderRadius: 15, marginTop: 20 }}>
            <View style={{ width: 60, height: 60 }} >
              <Image source={require('../../../assets/icons/schedule.png')} resizeMode='cover' style={{ flex: 1, width: null, height: null }} />
            </View>
            <Text style={{ fontSize: 18 }}>Rastreamento</Text>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.8}
            style={{ flexDirection: 'row', height: 80, backgroundColor: '#cbe6e2', justifyContent: 'space-around', alignItems: 'center', marginLeft: 10, marginRight: 10, borderRadius: 15, marginTop: 20 }}>
            <View style={{ width: 60, height: 60 }} >
              <Image source={require('../../../assets/icons/schedule.png')} resizeMode='cover' style={{ flex: 1, width: null, height: null }} />
            </View>
            <Text style={{ fontSize: 18 }}>Rastreamento</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Schedule;