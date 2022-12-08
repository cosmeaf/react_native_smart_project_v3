import React, { useContext } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  KeyboardAvoidingView,
  View, Text, StyleSheet,
  ScrollView, TouchableOpacity,
  Alert, ImageBackground,
  TextInput,
  FlatList,
  Image,
  Dimensions
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
import GlobalContext from '../../Contexts/Context';
import styles from './styles';

const Home = ({ navigation }) => {
  const { isLogged, signout } = useContext(GlobalContext);

  const handlerSignOut = () => {
    signout();
  }
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <View style={styles.header}>
            <View style={styles.headerMenu}>
              <Icon name="ios-menu" size={30} color="#38A69D" onPress={() => Alert.alert('Menu Smart Mecânico')} />
            </View>
            <Text style={styles.headerText}> Jamerson </Text>
            <View tyle={styles.headerProfile}>
              <ImageBackground
                source={require('../../assets/image/avatar.png')}
                style={styles.headerImage}
                imageStyle={{ borderRadius: 25 }}
              />
            </View>
          </View>
          <View>
            <ScrollView scrollEventThrottle={16} horizontal={true} showsHorizontalScrollIndicator={false}>
              <TouchableOpacity style={styles.bannerImage} activeOpacity={0.8}>
                <Image source={require('../../assets/image/slide/001_image.jpg')} resizeMode='stretch' style={{ flex: 1, width: null, height: null }} />
              </TouchableOpacity>
              <TouchableOpacity style={styles.bannerImage} activeOpacity={0.8} >
                <Image source={require('../../assets/image/slide/002_image.jpg')} resizeMode='cover' style={{ flex: 1, width: null, height: null }} />
              </TouchableOpacity>
              <TouchableOpacity style={styles.bannerImage} activeOpacity={0.8} >
                <Image source={require('../../assets/image/slide/003_image.jpg')} resizeMode='cover' style={{ flex: 1, width: null, height: null }} />
              </TouchableOpacity>
              <TouchableOpacity style={styles.bannerImage} activeOpacity={0.8} >
                <Image source={require('../../assets/image/slide/004_image.jpg')} resizeMode='cover' style={{ flex: 1, width: null, height: null }} />
              </TouchableOpacity>
              <TouchableOpacity style={styles.bannerImage} activeOpacity={0.8}>
                <Image source={require('../../assets/image/slide/005_image.jpg')} resizeMode='cover' style={{ flex: 1, width: null, height: null }} />
              </TouchableOpacity>
              <TouchableOpacity style={styles.bannerImage} activeOpacity={0.8}>
                <Image source={require('../../assets/image/slide/006_image.jpg')} resizeMode='cover' style={{ flex: 1, width: null, height: null }} />
              </TouchableOpacity>
              <TouchableOpacity style={styles.bannerImage} activeOpacity={0.8}>
                <Image source={require('../../assets/image/slide/007_image.jpg')} resizeMode='cover' style={{ flex: 1, width: null, height: null }} />
              </TouchableOpacity>
            </ScrollView>
          </View>
          <View style={styles.categoryView}>
            <Text style={styles.categoryViewText}>
              Categorias
            </Text>
          </View>
          <TouchableOpacity activeOpacity={0.8}
            style={{ flexDirection: 'row', height: 80, backgroundColor: '#cbe6e2', justifyContent: 'space-around', alignItems: 'center', marginLeft: 10, marginRight: 10, borderRadius: 15, marginTop: 20 }}>
            <View style={{ width: 60, height: 60 }} >
              <Image source={require('../../assets/icons/bills.png')} resizeMode='cover' style={{ flex: 1, width: null, height: null }} />
            </View>
            <Text style={{ fontSize: 18 }}>Controle de Gastos</Text>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.8}
            style={{ flexDirection: 'row', height: 80, backgroundColor: '#cbe6e2', justifyContent: 'space-around', alignItems: 'center', marginLeft: 10, marginRight: 10, borderRadius: 15, marginTop: 20 }}>
            <View style={{ width: 60, height: 60 }} >
              <Image source={require('../../assets/icons/alert.png')} resizeMode='cover' style={{ flex: 1, width: null, height: null }} />
            </View>
            <Text style={{ fontSize: 18 }}>Alerta de Serviço</Text>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.8}
            style={{ flexDirection: 'row', height: 80, backgroundColor: '#cbe6e2', justifyContent: 'space-around', alignItems: 'center', marginLeft: 10, marginRight: 10, borderRadius: 15, marginTop: 20 }}>
            <View style={{ width: 60, height: 60 }} >
              <Image source={require('../../assets/icons/resume.png')} resizeMode='cover' style={{ flex: 1, width: null, height: null }} />
            </View>
            <Text style={{ fontSize: 18 }}>Historico de Serviços</Text>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.8}
            style={{ flexDirection: 'row', height: 80, backgroundColor: '#cbe6e2', justifyContent: 'space-around', alignItems: 'center', marginLeft: 10, marginRight: 10, borderRadius: 15, marginTop: 20 }}>
            <View style={{ width: 60, height: 60 }} >
              <Image source={require('../../assets/icons/schedule.png')} resizeMode='cover' style={{ flex: 1, width: null, height: null }} />
            </View>
            <Text style={{ fontSize: 18 }}>Agendamentos</Text>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.8}
            style={{ flexDirection: 'row', height: 80, backgroundColor: '#cbe6e2', justifyContent: 'space-around', alignItems: 'center', marginLeft: 10, marginRight: 10, borderRadius: 15, marginTop: 20 }}>
            <View style={{ width: 60, height: 60 }} >
              <Image source={require('../../assets/icons/map.png')} resizeMode='cover' style={{ flex: 1, width: null, height: null }} />
            </View>
            <Text style={{ fontSize: 18 }}>Rastreamento</Text>
          </TouchableOpacity>
        </ScrollView>
      </SafeAreaView>
    </KeyboardAvoidingView>
  )
}

export default Home;


