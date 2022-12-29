import React, { useState, useEffect } from 'react';
import { StyleSheet, ScrollView, Text, View, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Modal from "react-native-modal";
import Api from '../service/Api';


const month = ['janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto',
  'Setembro', 'Outubro', 'Novembro', 'Dezembro'
];
const days = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'];

const ScheduleModal = ({ navigation, route, isVisible, onPress, image }) => {
  const [service, setService] = useState('');
  const [address, setAddress] = useState({});
  const [vehicle, setVehicle] = useState('');
  const [hour, setHour] = useState('');
  const [date, setdate] = useState('');
  const [serviceHour, setServiceHour] = useState([]);
  const [availabilityHour, setAvailabilityHour] = useState([]);
  const [selectedYear, setSelectedYear] = useState(0);
  const [selectedMonth, setSelectedMonth] = useState(0);
  const [selectedDays, setSelectedDays] = useState(0);
  const [selectedHour, setSelectedHour] = useState(null);
  const [listDays, setListDays] = useState([]);
  const [listHours, setListHours] = useState([]);
  const [isSelected, setIsSelected] = useState(false);

  const handleIsSelected = () => setIsSelected(() => !isSelected);

  // UseEffect get Data Calendar
  useEffect(() => {
    let daysInMonth = new Date(selectedYear, selectedMonth + 1, 0).getDate();
    //console.log(`Total de dias no mês ${month[selectedMonth]} = ${daysInMonth}`)
    const newListDays = [];

    for (let i = 1; i < daysInMonth + 1; i++) {
      let d = new Date(selectedYear, selectedMonth, i);
      let year = d.getFullYear();
      let month = d.getMonth() + 1;
      let day = d.getDate();
      // Format Month and Day 'day 9 to 09 | month 1 to 01  '
      month = month < 10 ? '0' + month : month;
      day = day < 10 ? '0' + day : day;
      // Create new format date 'YYYY-MM-DD'
      let selDate = `${year}-${month}-${day}`;
      // Map verify if date exist in calendater API

      // Push data on Array and get result fo calendar screen
      newListDays.push({
        // status: availability.length > 0 ? false : true,
        weekday: days[d.getDay()],
        number: i
      })
    }
    setListDays(newListDays);
    setSelectedDays(0);
    setListHours([]);
    setSelectedHour(0);
  }, [selectedYear, selectedMonth, availabilityHour])

  useEffect(() => {
    getHourService();
  }, [selectedDays])

  useEffect(() => {
    let today = new Date();
    setSelectedYear(today.getFullYear());
    setSelectedMonth(today.getMonth());
    setSelectedDays(today.getDay());
    getAddress();
    getVehicle();
    getHourAvailibility();
  }, [])

  const handleLeftDateClick = () => {
    let mountDate = new Date(selectedYear, selectedMonth, 1);
    mountDate.setMonth(mountDate.getMonth() - 1);
    setSelectedYear(mountDate.getFullYear());
    setSelectedMonth(mountDate.getMonth());
    setSelectedDays(mountDate.getDay(0))
  }

  const handleRightDateClick = () => {
    let mountDate = new Date(selectedYear, selectedMonth, 1);
    mountDate.setMonth(mountDate.getMonth() + 1);
    setSelectedYear(mountDate.getFullYear());
    setSelectedMonth(mountDate.getMonth());
    setSelectedDays(mountDate.getDay(0))
  }


  const getAddress = async () => {
    let res = await Api.getAddress();
    if (res) {
      res.map((item, key) => (
        setAddress(item)
      ));

    } else {
      console.log('Ops! Estamos com problema para carregar dados do CEP. Pro Favor Tente mais tarde', `Error ${res.status}`)
      signout();
    }
  }

  const getVehicle = async () => {
    let res = await Api.getVehicle();
    if (res) {
      res.map((item, key) => (
        setVehicle(item)
      ));
    } else {
      console.warn('Ops! Estamos com problema para acessar suas informação. Pro Favor Tente mais tarde', `Error ${res.status}`)
    }
  }

  const getHourService = async () => {
    //setServiceHour([])
    let res = await Api.getHourService();
    if (res) {
      setServiceHour(res)
    } else {
      console.log('Ops! Erro ao Carregar Hora Disponível', `Error ${res.status}`)
      signout();
    }
  }

  const getHourAvailibility = async () => {
    //setFreeHour([])
    let res = await Api.getHourAvailibility();
    if (res) {
      setAvailabilityHour(res)
    } else {
      console.log('Ops! Erro ao Carregar Hora Disponível', `Error ${res.status}`)
    }
  }



  return (
    <Modal
      isVisible={isVisible}
      animationIn='slideInUp'
      animationOut='slideOutDown'
      style={{ flex: 1, justifyContent: 'flex-start', backgroundColor: '#FFF', borderRadius: 20 }}
    >
      <TouchableOpacity
        onPress={onPress}
        style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 20, marginTop: 20, marginBottom: 10 }}
      >
        <Ionicons name="chevron-down" size={30} color="green" />
        <Text>Fechar</Text>
      </TouchableOpacity>
      {/* Service Title Area */}
      <View style={styles.areaTitle}>
        <Image source={image} resizeMode="stretch" style={{ width: 60, height: 60 }} />
        <Text style={{ fontSize: 22, fontWeight: 'bold' }}>Serviço de Freios</Text>
      </View>
      {/* Vehícle Area */}
      <View style={styles.areaVehicle}>
        <Text style={styles.areaVehicleText}>Veículo:</Text>
        <Text style={styles.areaVehicleText}>{vehicle.brand}</Text>
        <Text style={styles.areaVehicleText}>{vehicle.plate}</Text>
      </View>
      {/* Year / Month Area */}
      <View style={styles.calendarArea}>
        <TouchableOpacity onPress={handleLeftDateClick} style={{ marginLeft: 20 }}>
          <Ionicons name="ios-chevron-back-circle" size={30} color="green" />
        </TouchableOpacity>
        <View>
          <Text style={{ fontSize: 18 }}>{month[selectedMonth]} {selectedYear}</Text>
        </View>
        <TouchableOpacity onPress={handleRightDateClick} style={{ marginRight: 20 }}>
          <Ionicons name="ios-chevron-forward-circle" size={30} color="green" />
        </TouchableOpacity>
      </View>
      {/* Days Area */}
      <View style={{
        justifyContent: 'center', alignItems: 'center', height: 80,
        backgroundColor: '#F1F1F1', marginLeft: 14, marginRight: 14,
        borderRadius: 10, marginBottom: 10
      }}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {listDays.map((item, key) => (
            <TouchableOpacity key={key}
              style={{
                width: 50,
                height: 80,
                justifyContent: 'center',
                alignItems: 'center',
                paddingLeft: 10,
                paddingRight: 10,
                marginLeft: 5,
                marginRight: 5,
                borderRadius: 10,
                backgroundColor: item.number === selectedDays ? 'green' : null
              }}
              onPress={() => item.number ? setSelectedDays(item.number) : null}
            >
              <Text
                style={{ fontSize: 14, fontWeight: '500', color: item.number === selectedDays ? 'white' : null }}
              >
                {item.weekday}
              </Text>
              <Text
                style={{ fontSize: 14, fontWeight: '500', color: item.number === selectedDays ? 'white' : null }}
              >
                {item.number}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
      {
        listHours.length > 0 &&
        <View style={{
          justifyContent: 'center', alignItems: 'center', height: 80,
          backgroundColor: '#F1F1F1', marginLeft: 14, marginRight: 14,
          borderRadius: 10, marginBottom: 10
        }}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            {listHours.map((item, key) => (
              <Text style={{ fontSize: 14, fontWeight: '500' }} >
                {item.hour}
              </Text>

            ))}
          </ScrollView>
        </View>
      }

      {/* Button Schedule Save */}
      <View style={{ flex: 1, justifyContent: 'flex-end', alignItems: 'center', marginBottom: 50 }}>
        <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: 'green', width: '90%', padding: 10, borderRadius: 10 }}>
          <Text style={{ color: '#FFF', fontSize: 18 }}>
            Finalizar Agendamento
          </Text>
        </TouchableOpacity>
      </View>
    </Modal>
  )
}

export default ScheduleModal

const styles = StyleSheet.create({
  areaTitle: {
    flexDirection: 'row', alignItems: 'center', height: 80, justifyContent: 'space-around', backgroundColor: '#F1F1F1',
    marginLeft: 14, marginRight: 14, borderRadius: 15, marginBottom: 10
  },
  areaVehicle: {
    flexDirection: 'row', alignItems: 'center', height: 50, justifyContent: 'space-around', backgroundColor: '#F1F1F1',
    marginLeft: 14, marginRight: 14, borderRadius: 15, marginBottom: 10
  },
  areaVehicleText: { fontSize: 18, fontWeight: '300' },
  calendarArea: {
    flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', height: 50, backgroundColor: '#F1F1F1',
    marginLeft: 14, marginRight: 14, borderRadius: 15, marginBottom: 10
  }
})