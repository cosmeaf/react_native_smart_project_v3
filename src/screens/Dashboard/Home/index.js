import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import SearcheArea from '../../../componentes/SearcheArea';
import Carousel from '../../../componentes/Carousel';
import ServicesTypes from '../../../componentes/ServicesTypes';

export default ({ navigation, route }) => {

  function handleClick(data) {
    navigation.navigate(data)
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#FFF' }}>
      <ScrollView>
        <StatusBar style="auto" />
        <SearcheArea />
        <Carousel />
        <Text style={{ marginTop: 20, marginLeft: 14, fontSize: 22, fontWeight: 'bold' }}>Serviços</Text>
        <ServicesTypes onPress={handleClick} />
        <Text style={{ marginTop: 20, marginLeft: 14, fontSize: 22, fontWeight: 'bold' }}>Categorias</Text>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({})