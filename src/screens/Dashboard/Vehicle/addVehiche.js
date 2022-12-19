import React, { useContext, useState, useEffect } from 'react';
import { ScrollView, View, Text, StyleSheet, TouchableOpacity, Image, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { TextInput, RadioButton } from "react-native-paper";
import { Dropdown } from 'react-native-element-dropdown';
import Modal from "react-native-modal";
import TabOneLine from '../../../componentes/TabOneLine';
import GlobalContext from '../../../Contexts/Context';
import styles from './styles';
import Api from '../../../service/Api';


//https://parallelum.com.br/fipe/api/v2/{vehicleType}/brands/{brandId}/models/{modelId}/years/{yearId}
//http://parallelum.com.br/fipe/api/v2/{vehicleType}/brands/{brandId}/models/{modelId}/years/{yearId}
//https://parallelum.com.br/fipe/api/v2/cars/brands/25/models/4010/years/2007-1

const FIPE_API = 'http://parallelum.com.br/fipe/api/v2'
//const FIPE_API = 'https://parallelum.com.br/fipe/api/v2'

const data = [
  { label: 'item data ...', value: '1' },
  { label: 'item data ...', value: '2' },
];


const AddVehicle = ({ navigation }) => {
  const { isLogged, signout } = useContext(GlobalContext);
  const [isFocus, setIsFocus] = useState(false);
  // useState API FIPE
  const [vehicleType, setVehicleType] = useState(null);
  const [brandId, setBrandId] = useState(null);
  const [modelId, setModelId] = useState(null);
  const [yearId, setYearId] = useState(null);
  // useState ArrayData
  const [brandsData, setBrandsData] = useState([]);
  const [modelsData, setModelsData] = useState([]);
  const [yearData, setYearData] = useState([]);
  // useState FormData
  const [brands, setBrands] = useState('');
  const [model, setModel] = useState('');
  const [year, setYear] = useState('');
  const [fuel, setFuel] = useState('');
  const [odomitter, setOdomitter] = useState('');
  const [plate, setPlate] = useState('');
  const [isModalVisibleOdomiter, setIsModalVisibleOdomiter] = useState(false);
  const [isModalVisiblePlate, setIsModalVisiblePlate] = useState(false);

  const handleModalOdomiter = () => setIsModalVisibleOdomiter(() => !isModalVisibleOdomiter);
  const handleModalPlate = () => setIsModalVisiblePlate(() => !isModalVisiblePlate);


  useEffect(() => {
    handleBrandId(vehicleType)
    handleModelId(vehicleType, brandId);
    handleFuel(vehicleType, brandId, modelId);
  }, [vehicleType, brandId, modelId]);

  // Gent Vehicle Brands 
  const handleBrandId = async (vehicleType) => {
    let brandsArray = [];
    if (vehicleType == null || vehicleType == undefined || vehicleType == '') {
      brandsArray.length == 0;
      return null;
    } else {
      try {
        brandsArray.length == 0;
        let response = await fetch(`${FIPE_API}/${vehicleType}/brands`);
        if (!response.ok) {
          Alert.alert('Error',
            'Ops! Identificamos erro de comunicação em nossa plataforma. \
             Verifique se seu dispositivo esta com acesso a Internet', [
            {
              text: 'SAIR'
            }
          ])
        }
        let json = await response.json();
        brandsArray.length == 0;
        let obj = Object.keys(json).length;
        for (let i = 0; i < obj; i++) {
          brandsArray.push({
            value: json[i].code,
            label: json[i].name
          });
          setBrandsData(brandsArray)
        }
      } catch (error) {
        return null;
      }
    }
  }

  // Gent Vehicle Models 
  const handleModelId = async (vehicleType, brandId) => {
    let modelsArray = [];
    if (vehicleType == null || vehicleType == undefined || vehicleType == '' && brandId == null || brandId == undefined || brandId == '') {
      modelsArray.length == 0;
      return null;
    } else {
      try {
        modelsArray.length == 0;
        let response = await fetch(`${FIPE_API}/${vehicleType}/brands/${brandId}/models`);
        let json = await response.json();
        let obj = Object.keys(json).length;
        for (let i = 0; i < obj; i++) {
          modelsArray.push({
            value: json[i].code,
            label: json[i].name
          });
          setModelsData(modelsArray)
        }
      } catch (error) {
        return null;
      }
    }
  }

  // Gent Vehicle Fuel
  const handleFuel = async (vehicleType, brandId, yearId) => {
    let yearsArray = [];
    if (vehicleType == null || vehicleType == undefined || vehicleType == '' && brandId == null || brandId == undefined || brandId == '' && modelId == null || modelId == undefined || modelId == '') {
      yearsArray.length == 0;
      return null;
    } else {
      try {
        yearsArray.length == 0;
        let response = await fetch(`${FIPE_API}/${vehicleType}/brands/${brandId}/models/${modelId}/years`);
        let json = await response.json();
        let obj = Object.keys(json).length;
        for (let i = 0; i < obj; i++) {
          yearsArray.push({
            value: json[i].code,
            label: json[i].name
          });
          setYearData(yearsArray)
        }
      } catch (error) {
        return null;
      }
    }
  }

  const handlecreateVehicle = async (brand, model, fuell, year, odomitter, plate) => {
    if (brand == '' || model == '' || fuell == '' || year == '' || odomitter == '' || plate == '') {
      Alert.alert('Ops! Favor Preencher todos os campos')
    } else {
      await Api.createVehicle(brand, model, fuell, year, odomitter, plate)
      navigation.navigate('Vehicle');
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <RadioButton.Group onValueChange={newValue => setVehicleType(newValue)} value={vehicleType}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', marginBottom: 20 }}>
            <View style={{ flexDirection: 'row', }}>
              <RadioButton value="cars" />
              <FontAwesome name="car" size={30} color="#525252" status='unchecked' />
            </View>
            <View style={{ flexDirection: 'row', }}>
              <RadioButton value="trucks" status='unchecked' />
              <FontAwesome name="truck" size={30} color="#525252" />
            </View>
            <View style={{ flexDirection: 'row' }}>
              <RadioButton value="motorcycles" status='unchecked' />
              <FontAwesome name="motorcycle" size={30} color="#525252" />
            </View>
          </View>
        </RadioButton.Group>
        {/* Brand / marca */}
        <View style={{ paddingLeft: 10, paddingRight: 10, paddingTop: 10, backgroundColor: '#FFF', marginBottom: 5 }}>
          <Dropdown
            style={[styles.dropdown, isFocus && { borderColor: '#CCC' }]}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            iconStyle={styles.iconStyle}
            data={brandsData}
            search
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder={!isFocus ? 'Selecione Marca' : brands.toString()}
            searchPlaceholder="Digite aqui para Procurar sua marca"
            value={brands}
            onFocus={() => setIsFocus(false)}
            onBlur={() => setIsFocus(true)}
            onChange={item => {
              setIsFocus(false);
              setBrandId(item.value)
              setBrands(item.label)
            }}
          />
        </View>
        {/* Model / Modelo */}
        <View style={{ paddingLeft: 10, paddingRight: 10, paddingTop: 10, backgroundColor: '#FFF', marginBottom: 5 }}>
          <Dropdown
            style={[styles.dropdown, isFocus && { borderColor: '#CCC' }]}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            iconStyle={styles.iconStyle}
            data={modelsData}
            search
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder={!isFocus ? 'Selecione Modelo' : model}
            searchPlaceholder="Digite aqui para Procurar sua modelo"
            value={model}
            onFocus={() => setIsFocus(false)}
            onBlur={() => setIsFocus(true)}
            onChange={item => {
              setIsFocus(false);
              setModelId(item.value)
              setModel(item.label)
            }}
          />
        </View>
        {/* Year / Ano */}
        <View style={{ paddingLeft: 10, paddingRight: 10, paddingTop: 10, backgroundColor: '#FFF', marginBottom: 5 }}>
          <Dropdown
            style={[styles.dropdown, isFocus && { borderColor: '#CCC' }]}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            iconStyle={styles.iconStyle}
            data={yearData}
            search
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder={!isFocus ? 'Selecione Ano de Fabricação' : year}
            searchPlaceholder="Digite aqui para procurar ano"
            value={year.split(0, 5)}
            onFocus={() => setIsFocus(false)}
            onBlur={() => setIsFocus(true)}
            onChange={item => {
              setIsFocus(false);
              setYearId(item.value)
              setYear(item.label.slice(0, 5).toString())
              setFuel(item.label.slice(5, 20))
            }}
          />
        </View>
        <TabOneLine title='Combustivel:' subTitle={fuel ? fuel : '...'} />
        <TabOneLine title='Kilometragem:' subTitle={odomitter ? odomitter : '...'} onPress={handleModalOdomiter} />
        <TabOneLine title='Placa:' subTitle={plate ? plate : '...'} onPress={handleModalPlate} />
        {/* MODAL SET ODOMITER  */}
        <Modal isVisible={isModalVisibleOdomiter} style={styles.modal}>
          <View style={styles.modalContainer}>
            <TextInput
              style={{ height: 40, }}
              mode='outlined'
              keyboardType='numeric'
              placeholder={odomitter ? odomitter : 'Digite sua Kilometragem'}
              value={odomitter}
              onChangeText={text => setOdomitter(text)}
            />
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 }}>
              <TouchableOpacity
                style={styles.modalButton}
                onPress={() => setIsModalVisibleOdomiter(false)}
              >
                <Text style={styles.modalButtonText}>Salvar</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.modalButton}
                onPress={() => setIsModalVisibleOdomiter(false)}>
                <Text style={styles.modalButtonText}>Sair</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
        {/* MODAL SET PLATE  */}
        <Modal isVisible={isModalVisiblePlate} style={styles.modal}>
          <View style={styles.modalContainer}>
            <TextInput
              style={{ height: 40, }}
              mode='outlined'
              autoCapitalize='characters'
              placeholder={plate ? plate : 'Digite numero da Placa'}
              value={plate}
              onChangeText={text => setPlate(text)}
            />
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 }}>
              <TouchableOpacity
                style={styles.modalButton}
                onPress={() => setIsModalVisiblePlate(false)}
              >
                <Text style={styles.modalButtonText}>Salvar</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.modalButton}
                onPress={() => setIsModalVisiblePlate(false)}>
                <Text style={styles.modalButtonText}>Sair</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </ScrollView>
      <TouchableOpacity style={styles.button} onPress={() => handlecreateVehicle(brands, model, fuel, year, odomitter, plate)}>
        <Text style={styles.buttonText}>Cadastrar Veículo</Text>
      </TouchableOpacity>
    </SafeAreaView>

  );
};

export default AddVehicle;

