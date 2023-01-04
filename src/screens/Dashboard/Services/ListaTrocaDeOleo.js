import React, { useState, useEffect } from 'react'
import { StyleSheet, ScrollView, Text, View, Image, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import data from '../../../model/data/trocaDeOleoData';

const ListaTrocaDeOleo = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <Text style={{ fontSize: 22, fontWeight: 'bold', marginBottom: 20, marginLeft: 14 }}>Serviços inclusos</Text>
        {data.map((item, index) => (
          <View key={index}
            style={{ marginBottom: 10, marginLeft: 14 }}>
            <Text style={{ fontSize: 18 }}>
              {item.id} - {item.name}
            </Text>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  )
}

export default ListaTrocaDeOleo

const styles = StyleSheet.create({})