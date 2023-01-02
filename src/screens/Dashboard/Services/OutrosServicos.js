import React, { useState, useEffect } from 'react'
import { StyleSheet, ScrollView, Text, View, Image, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import ScheduleModal from '../../../componentes/ScheduleModal';
import AppointmentModal from '../../../componentes/AppointmentModal';
import Api from '../../../service/Api';
const image = require('../../../assets/image/slide/001_image.jpg')
const icon = require('../../../assets/icons/brake.png')


const OutrosServicos = ({ navigation, route }) => {
  const [favorited, setFavorited] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handlefavorited = () => setFavorited(() => !favorited);
  const handleisModalVisible = () => setIsModalVisible(() => !isModalVisible);


  return (
    <View style={{ flex: 1 }}>
      <ScrollView>
        <View style={{ marginTop: 10, marginBottom: 10, height: 200, marginLeft: 14, marginRight: 14, overflow: 'hidden', borderRadius: 20 }}>
          <Image source={image} resizeMode="stretch" style={styles.image} />
        </View>
        <View style={{ marginLeft: 14, marginRight: 14, marginBottom: 20 }}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10, alignItems: 'center' }}>
            <Text style={{ fontSize: 22, fontWeight: 'bold' }}>Descritivo do Serviço</Text>
            {favorited
              ?
              <TouchableOpacity onPress={handlefavorited}>
                <Ionicons name="heart-sharp" size={30} color="red" />
              </TouchableOpacity>
              :
              <TouchableOpacity onPress={handlefavorited}>
                <Ionicons name="heart-outline" size={30} color="red" />
              </TouchableOpacity>
            }
            <Text style={{ fontSize: 14, fontWeight: 'bold' }}>Favoritos</Text>
          </View>
          <Text style={{ marginBottom: 10, letterSpacing: 1 }}>
            Não encontrou o que desejava? Não tem problema, a Smart Mecânico quer te ouvir e irá apoiar no que for necessário, deixe-nos saber qual seria a sua necessidade e iremos orçar o melhor custo x benefício a você.
          </Text>

          <Text style={{ fontSize: 22, fontWeight: 'bold', marginBottom: 20, marginTop: 10 }}>Pré-requesitos</Text>
          <View style={{ flexDirection: 'row', justifyContent: 'flex-start', marginRight: 10 }}>
            <Ionicons name="checkmark-circle" size={24} color="green" />
            <Text style={{ marginBottom: 10, letterSpacing: 1, marginLeft: 10, marginRight: 5 }}>
              O veículo deve estar em garagem ou estacionamento com espaço maior que 0,5 metros (50 cm) ao redor.
            </Text>
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'flex-start', marginRight: 10 }}>
            <Ionicons name="checkmark-circle" size={24} color="green" />
            <Text style={{ marginBottom: 10, letterSpacing: 1, marginLeft: 10, marginRight: 5 }}>
              Ter um responsável maior de 18 anos no local, com a chave e documento do veículo.
            </Text>
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'flex-start', marginRight: 10 }}>
            <Ionicons name="checkmark-circle" size={24} color="green" />
            <Text style={{ marginBottom: 10, letterSpacing: 1, marginLeft: 10, marginRight: 5 }}>
              Oferecemos garantia de 90 dias para a mão de obra realizada
            </Text>
          </View>
        </View>
        <TouchableOpacity style={styles.button} onPress={handleisModalVisible}>
          <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#FFF' }}>
            Agendar Serviço
          </Text>
        </TouchableOpacity>
      </ScrollView>
      {/* MODAL */}
      <AppointmentModal
        isVisible={isModalVisible}
        // image={icon}
        serviceId="d4221a49-cb4e-462d-9d0a-850cd9529925"
        serviceTitle="Outros serviços / Orçamento"
        onPress={() => setIsModalVisible(false)}
      />
    </View>
  )
}

export default OutrosServicos

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 200,
  },
  button: { justifyContent: 'center', alignItems: 'center', padding: 10, marginBottom: 20, borderRadius: 10, borderWidth: 0.5, marginLeft: 14, marginRight: 14, backgroundColor: 'green' }
})