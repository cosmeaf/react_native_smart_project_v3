import React, { useState, useEffect } from 'react'
import { StyleSheet, ScrollView, Text, View, Image, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import ScheduleModal from '../../../componentes/ScheduleModal';
import AppointmentModal from '../../../componentes/AppointmentModal';
import Api from '../../../service/Api';
const image = require('../../../assets/image/slide/007_image.jpg')
const icon = require('../../../assets/icons/brake.png')


const TrocaDeOleoRevisaoCompleta = ({ navigation, route }) => {
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
          <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 10 }}>Troca de Óleo</Text>
          <Text style={{ marginBottom: 10, letterSpacing: 1 }}>
            Recomendamos esse serviço a cada 06 meses de utilização do automóvel ou 6.000 km rodados. Tal função irá manter seu veículo em 3 excelentes condições, e muito provavelmente irá eliminar surpresas indesejáveis. Trocas de óleo regulares estendem a vida útil do seu carro e também contribuem para eventuais vendas.
          </Text>
          <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 10 }}>Revisão Completa</Text>
          <Text style={{ marginBottom: 10, letterSpacing: 1 }}>
            Serviço de revisão automotiva preventiva de funcionamento e estado de conservação de 50 itens do seu veículo. Serão verificados itens relacionados à óleo e fluídos, filtros, faróis e luzes, pneus, segurança, sistema de freios, bateria, entre outros. Ademais inclui indicação, sempre que necessário, da substituição de itens que possam comprometer a segurança e dirigibilidade do seu automóvel.
          </Text>
          {/* Details about Services */}
          <TouchableOpacity
            onPress={() => navigation.navigate('ListaTrocaDeOleoRevisaoCompleta')}
            style={{ alignItems: 'flex-end', marginTop: 10, marginBottom: 10 }}>
            <Text style={{ fontWeight: 'bold', fontSize: 16, color: 'green' }}> Veja Mais... </Text>
          </TouchableOpacity>
          {/* Pre requ */}
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
        serviceId="13843b1a-da54-44fa-8155-75b7bc0876a8"
        serviceTitle="Troca de Óleo + Revisão Básica"
        onPress={() => setIsModalVisible(false)}
      />
    </View>
  )
}

export default TrocaDeOleoRevisaoCompleta;

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 200,
  },
  button: { justifyContent: 'center', alignItems: 'center', padding: 10, marginBottom: 20, borderRadius: 10, borderWidth: 0.5, marginLeft: 14, marginRight: 14, backgroundColor: 'green' }
})