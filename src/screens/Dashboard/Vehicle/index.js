import React, { useEffect, useState, useContext } from 'react';
import { StyleSheet, View, Text, ScrollView, TouchableOpacity, Image, FlatList } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { SafeAreaView } from 'react-native-safe-area-context';

import GlobalContext from '../../../Contexts/Context';
import Api from '../../../service/Api';


export default ({ navigation }) => {
  const { authentication, isLoading, signout } = useContext(GlobalContext);
  const [vehicles, setVehicles] = useState([]);

  if (!authentication) {
    signout();
  }

  useEffect(() => {
    getVehicle();
  }, [authentication])

  const getVehicle = async () => {
    let res = await Api.getVehicle();
    if (res) {
      setVehicles(res)
    } else {
      signout();
    }
  }

  function getVehicleItem({ item: vehicle }) {
    return (
      <TouchableOpacity style={styles.TouchableOpacityRender} onPress={() => navigation.navigate('VehicleDetails', vehicle)}>
        <Image source={require('../../../assets/icons/car.png')} style={{ width: 50, height: 50 }} />
        <Text style={{ fontSize: 14, fontWeight: 'bold' }}>{vehicle.brand}</Text>
        <Text style={{ fontSize: 14, fontWeight: 'bold' }}>{vehicle.plate}</Text>
        <Ionicons name='chevron-forward' size={30} />
      </TouchableOpacity>
    )
  }

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        keyExtractor={(vehicle) => vehicle.id}
        renderItem={getVehicleItem}
        data={vehicles}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  TouchableOpacityRender: {
    flexDirection: 'row',
    backgroundColor: '#FFF',
    justifyContent: 'space-between',
    borderWidth: 0.1,
    alignItems: 'center',
    paddingEnd: 20,
    paddingStart: 20,
    marginBottom: 10,
    borderRadius: 25,
    marginLeft: 14,
    marginRight: 14,
  },
  renderImage: { width: 35, height: 35, marginTop: 10, marginBottom: 10 }
})