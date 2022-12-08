import React, { useContext, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, Image, Alert, ScrollView, FlatList } from 'react-native';
import vehicles from '../../../model/data/vehicleData';
import styles from './styles';

const Vehicle = ({ navigation }) => {
  const [isTrue, setIstrue] = useState(false);

  function confirmVehicleDelete(vehicle) {
    Alert.alert('Excluir Veículo', 'Deseja excluir veículo cadastrado?', [
      {
        text: 'Sim',
        onPress() {
          console.log('Deletar ' + vehicle)
        }
      },
      {
        text: 'Não',
      }
    ]);
  }

  function getVehicleItem({ item: vehicle }) {
    return (
      <View>
        <TouchableOpacity activeOpacity={0.8}
          style={localStyle.renderButton}
        // onPress={() => navigation.navigate('EditVehicle', vehicle)}
        >
          <View style={localStyle.buttonImage} >
            <Image source={require('../../../assets/icons/car.png')} resizeMode='cover' style={{ flex: 1, width: null, height: null }} />
          </View>
          <View style={{ flex: 3, marginStart: 20, marginEnd: 10 }}>
            <Text style={{ fontSize: 16, fontWeight: 'bold' }}>{vehicle.brand}</Text>
            <Text style={{ fontSize: 14, }}>{vehicle.plate}</Text>
          </View>
          <View style={{ flex: 1, marginStart: 20, paddingStart: 10 }}>
            <Icon name="ios-trash" size={30} color="#AF4500" onPress={() => confirmVehicleDelete(vehicle.id)} />
          </View>
        </TouchableOpacity>
      </View>
    );
  }
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerMenu}>
          <Icon name="ios-menu" size={30} color="#38A69D" onPress={() => Alert.alert('Menu Smart Mecânico')} />
        </View>
        <Text style={styles.headerText}> Meus Veículos </Text>
        <View tyle={styles.headerProfile}>
          <Icon name="ios-add" size={40} color="#38A69D" onPress={() => navigation.navigate('AddVehicle')} />
        </View>
      </View>

      {isTrue ?
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Nenhum Veículo Cadastrado</Text>
        </View>
        :
        <View>
          <FlatList
            keyExtractor={vehicles => vehicles.id.toString()}
            data={vehicles}
            renderItem={getVehicleItem}

          />
        </View>
      }
    </SafeAreaView>
  )
}

export default Vehicle;

const localStyle = StyleSheet.create({
  renderButton: {
    flexDirection: 'row', height: 60, backgroundColor: '#cbe6e2', justifyContent: 'space-between', alignItems: 'center', borderRadius: 10, margin: 10, shadowColor: '#000',
    shadowOffset: { width: 1, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 5,
    elevation: 10,
  },
  buttonImage: { width: 50, height: 50, marginStart: 20 }
})