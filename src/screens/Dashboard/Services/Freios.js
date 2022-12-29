import React, { useState, useEffect } from 'react'
import { StyleSheet, ScrollView, Text, View, Image, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import ScheduleModal from '../../../componentes/ScheduleModal';
import AppointmentModal from '../../../componentes/AppointmentModal';
import Api from '../../../service/Api';
const image = require('../../../assets/image/slide/007_image.jpg')
const icon = require('../../../assets/icons/brake.png')


const Freios = ({ navigation, route }) => {
  const [favorited, setFavorited] = useState(false);
  const [service, setService] = useState('');
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handlefavorited = () => setFavorited(() => !favorited);
  const handleisModalVisible = () => setIsModalVisible(() => !isModalVisible);

  useEffect(() => {
    getServices();
  }, [])

  const getServices = async () => {
    let res = await Api.getServices();
    if (res) {
      res.map((item, key) => (
        setService(item)
      ));
    } else {
      console.warn('Ops! Estamos com problema para acessar suas informação. Pro Favor Tente mais tarde', `Error ${res.status}`)
    }
  }

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
            As pastilhas de freio devem ser revisadas a cada 10 mil km rodados. Apesar de que muitas pastilhas têm algum tipo de aviso de desgaste, as pastilhas do seu carro podem acabar sem aviso prévio. Dessa maneira, o melhor é fazer a revisão periódica e evitar ser pego desprevenido.
          </Text>
          <Text style={{ marginBottom: 10, letterSpacing: 1 }}>
            Por outro lado, o freio de seu carro não é somente de pastilhas de freio. Ele é um sistema composto por várias peças. Mas não se preocupe nossos mecânicos estão preparados para todo tipo de serviço de freios.
          </Text>
          <Text style={{ marginBottom: 10, letterSpacing: 1 }}>
            Por isso, ao trocar as pastilhas de freio do seu carro, checamos todo o sistema de freio: cilindro mestre, cilindros de roda, discos de freio, flexíveis, etc. Este procedimento é muito importante porque pode evitar imprevistos futuros.
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
        serviceId={service.id}
        onPress={() => setIsModalVisible(false)}
      />
    </View>
  )
}

export default Freios

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 200,
  },
  button: { justifyContent: 'center', alignItems: 'center', padding: 10, marginBottom: 20, borderRadius: 10, borderWidth: 0.5, marginLeft: 14, marginRight: 14, backgroundColor: 'green' }
})