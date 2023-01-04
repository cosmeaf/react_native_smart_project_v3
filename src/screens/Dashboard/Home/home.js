import React, { useState, useEffect, useContext } from 'react';
import { View, Text, ScrollView, Image, Animated, FlatList, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import iconData from '../../../model/data/iconData';
import resourceData from '../../../model/data/resourceData';


export default ({ navigation }) => {
  const { authentication, isLoading, signout } = useContext(GlobalContext);

  if (!authentication) {
    signout();
  }

  useEffect(() => {
  }, [authentication])

  function handleService(service) {
  }

  function getServiceItem({ item: service }) {

    return (
      <View>
        <TouchableOpacity onPress={() => handleService(service.id)}
          style={{ justifyContent: 'center', alignItems: 'center', marginRight: 10, backgroundColor: '#DFDFDF', padding: 10, borderRadius: 20, elevation: 5 }}>
          <Image source={service.image} resizeMode='cover'
            style={{ width: 60, height: 60 }}
          />
        </TouchableOpacity>
        <Text
          style={{ justifyContent: 'center', alignItems: 'center', marginRight: 10, fontWeight: '500', marginTop: 10, fontSize: 12, textAlign: 'center' }}>{service.title}
        </Text>
      </View>
    );
  }

  function getResource({ item: resource }) {
    return (
      <TouchableOpacity
        style={{ flexDirection: 'row', backgroundColor: '#CCC', justifyContent: 'space-between', alignItems: 'center', paddingEnd: 20, paddingStart: 20, marginBottom: 10, borderRadius: 20 }}>
        <View>
          <Image source={resource.image} resizeMode='cover' style={{ width: 60, height: 60, marginTop: 10, marginBottom: 10 }} />
        </View>
        <Text>{resource.title}</Text>
      </TouchableOpacity>
    );
  }

  return (
    <SafeAreaView style={{ flex: 1, marginLeft: 14, marginRight: 14 }}>
      <Text style={{ fontSize: 22, fontWeight: 'bold', marginTop: 20 }}>Bem Vindo</Text>
      <View style={{ flex: 1, overflow: 'hidden', marginBottom: 10 }}>
        <Image source={require('../../../assets/image/slide/002_image.jpg')} resizeMode='cover'
          style={{ width: '100%', height: '100%', borderRadius: 15 }}
        />
      </View>

      <View style={{ flex: 1, justifyContent: 'center' }}>
        <Text style={{ fontSize: 18, fontWeight: 'bold', marginTop: 20 }}>Serviços</Text>
        <View style={{ flexDirection: 'row', marginTop: 10 }}>
          <FlatList
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            keyExtractor={service => service.id.toString()}
            data={iconData}
            renderItem={getServiceItem}
          />
        </View>
      </View>

      <View style={{ flex: 2, backgroundColor: 'center', marginBottom: 50 }}>
        <Text style={{ fontSize: 18, fontWeight: 'bold', marginTop: 20 }}>Recursos</Text>
        <View style={{ marginTop: 10 }}>
          <FlatList
            horizontal={false}
            showsHorizontalScrollIndicator={false}
            keyExtractor={resource => resource.id.toString()}
            data={resourceData}
            renderItem={getResource}
          />
        </View>
      </View>
    </SafeAreaView>
  )
}