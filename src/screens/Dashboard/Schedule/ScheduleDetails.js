import React from 'react';
import { ScrollView, StyleSheet, View, Text, TouchableOpacity, Alert } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { SafeAreaView } from 'react-native-safe-area-context';
import TabOneLine from '../../../componentes/TabOneLine';
import Api from '../../../service/Api';



const ScheduleDetails = ({ navigation, route }) => {

  const deleteSchdule = (id) => {
    if (id) {
      Alert.alert('Excluir Agendamento', 'Tem certeza que deseja excluir?', [
        {
          text: "Sim",
          onPress: () => {
            console.log(id)
            Api.deleteSchedule(id);
            navigation.navigate('Schedule');
          }
        },
        {
          text: "Não",
        }
      ])
    } else {
      Alert.alert('Atenção', 'Desculpe, não há registro de agendamento');
    }
  }


  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
        <Text style={{ marginLeft: 14, marginRight: 14, marginBottom: 20, fontSize: 16, fontWeight: '500' }}>Detalhes:</Text>
        {/* Brand */}
        <TabOneLine title='Serviço:' subTitle={route.params.service} />
        <TabOneLine title='Veículo:' subTitle={route.params.vehicle} />
        <TabOneLine title='Data:' subTitle={route.params.day} />
        <TabOneLine title='Hora:' subTitle={route.params.hour} />
      </ScrollView>
      <View style={{ justifyContent: 'center', alignItems: 'center', marginBottom: 20 }}>
        <TouchableOpacity onPress={() => deleteSchdule(route.params.id)}>
          <Text style={{ fontSize: 18, fontWeight: '500', color: 'red' }}>Excluir Agendamento</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default ScheduleDetails

const styles = StyleSheet.create({})