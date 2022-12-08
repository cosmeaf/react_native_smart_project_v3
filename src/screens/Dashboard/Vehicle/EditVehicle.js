import React, { useContext, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, Image, Alert, ScrollView, FlatList } from 'react-native';
import styles from './styles';

const EditVehicle = ({ navigation }) => {

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerMenu}>
          <Icon name="ios-menu" size={30} color="#38A69D" onPress={() => Alert.alert('Menu Smart Mecânico')} />
        </View>
        <Text style={styles.headerText}> Editar Veículo </Text>
        <View tyle={styles.headerProfile}>
          <Icon name="ios-add" size={30} color="#38A69D" onPress={() => navigation.navigate('AddVehicle')} />
        </View>
      </View>

    </SafeAreaView>
  )
}

export default EditVehicle;

