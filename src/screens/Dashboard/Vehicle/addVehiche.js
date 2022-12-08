import React, { useContext, useState, setState, useEffect } from 'react';
import { KeyboardAvoidingView, View, Text, StyleSheet, ImageBackground, TouchableOpacity, Image, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { TextInput, RadioButton } from "react-native-paper";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { Dropdown } from 'react-native-element-dropdown';
import GlobalContext from '../../../Contexts/Context';
import styles from './styles';


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
  const { isLogged, signout, isLoading } = useContext(GlobalContext);
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


  useEffect(() => {
    handleBrandId(vehicleType)
    handleModelId(vehicleType, brandId);
    handleFuel(vehicleType, brandId, modelId);
  }, [vehicleType, brandId, modelId, isLoading]);

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

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <SafeAreaView style={{ flex: 1, backgroundColor: '#F0F0F0' }}>
        <KeyboardAwareScrollView>
          <View style={styles.header}>
            <View style={styles.headerMenu}>
              <Icon name="ios-arrow-back-outline" size={30} color="#38A69D" onPress={() => navigation.goBack('vehicle')} />
            </View>
            <Text style={{ alignItems: 'center', fontSize: 18, color: '#38A69D', fontWeight: 'bold' }}> Cadastrar Veículo </Text>
            <View tyle={styles.headerProfile}>
              <Icon name="ios-car-outline" size={30} color="#38A69D" />
            </View>
          </View>

          <RadioButton.Group onValueChange={newValue => setVehicleType(newValue)} value={vehicleType}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', marginTop: '5%' }}>
              <View style={{ flexDirection: 'row', }}>
                <RadioButton value="cars" />
                <FontAwesome name="car" size={30} color="#38A69D" status='unchecked' />
              </View>
              <View style={{ flexDirection: 'row', }}>
                <RadioButton value="trucks" status='unchecked' />
                <FontAwesome name="truck" size={30} color="#38A69D" />
              </View>
              <View style={{ flexDirection: 'row' }}>
                <RadioButton value="motorcycles" status='unchecked' />
                <FontAwesome name="motorcycle" size={30} color="#38A69D" />
              </View>
            </View>
          </RadioButton.Group>

          <View style={{ flex: 1, justifyContent: 'center', alignContent: 'center', marginTop: '5%' }}>
            <View style={{ flex: 1, marginLeft: 10, marginRight: 10, backgroundColor: '#38A69D', borderRadius: 15, padding: 10, }}>

              <Dropdown
                style={[styles.dropdown, isFocus && { borderColor: '#F1F1F1' }]}
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
                searchPlaceholder="Procurar..."
                value={brands}
                onFocus={() => setIsFocus(false)}
                onBlur={() => setIsFocus(true)}
                onChange={item => {
                  setIsFocus(false);
                  setBrandId(item.value)
                  setBrands(item.label)
                }}
              />
              <Dropdown
                style={[styles.dropdown, isFocus && { borderColor: '#F1F1F1' }]}
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
                searchPlaceholder="Procurar..."
                value={model}
                onFocus={() => setIsFocus(false)}
                onBlur={() => setIsFocus(true)}
                onChange={item => {
                  setIsFocus(false);
                  setModelId(item.value)
                  setModel(item.label)
                }}
              />
              <Dropdown
                style={[styles.dropdown, isFocus && { borderColor: '#F1F1F1' }]}
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
                searchPlaceholder="Procurar..."
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
              <TextInput
                style={{ backgroundColor: '#38A69D', height: 45, marginBottom: 10 }}
                label="Informe Tipo de Combustível"
                mode="outlined"
                theme={{ colors: { primary: '#F1F1F1', placeholder: '#F1F1F1', secondary: '#F1F1F1', text: '#F1F1F1', error: '#f13a59' }, }}
                borderColor={true}
                autoCorrect={false}
                autoCapitalize='none'
                value={fuel}
                onChangeText={(text) => setFuel(text)}

              />
              <TextInput
                style={{ backgroundColor: '#38A69D', height: 45, marginBottom: 10 }}
                keyboardType='numeric'
                label="Atual Km"
                mode="outlined"
                theme={{ colors: { primary: '#F1F1F1', placeholder: '#F1F1F1', secondary: '#F1F1F1', text: '#F1F1F1', error: '#f13a59' }, }}
                borderColor={false}
                autoCorrect={false}
                autoCapitalize='none'
                value={odomitter}
                onChangeText={(text) => setOdomitter(text)}
              />
              <TextInput
                style={{ backgroundColor: '#38A69D', height: 45 }}
                theme={{ colors: { primary: '#F1F1F1', placeholder: '#F1F1F1', secondary: '#F1F1F1', text: '#F1F1F1', error: '#f13a59' }, }}
                label="Placa do Veículo"
                mode="outlined"
                //underlineColorAndroid={theme.colors.primary}
                // underlineColor={theme.colors.primary}
                // labelField={theme.colors.primary}
                borderColor={false}
                autoCorrect={false}
                autoCapitalize='characters'
                value={plate}
                onChangeText={(text) => setPlate(text)}
              />
              <TouchableOpacity style={styles.button} activeOpacity={0.8}>
                <Text style={styles.buttonText}>Salvar</Text>
              </TouchableOpacity>
            </View>

          </View>

        </KeyboardAwareScrollView>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};
export default AddVehicle;

