import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import AppTabStack from './TabSatck.route';
import Vehicle from '../screens/Dashboard/Vehicle';
import AddVehicle from '../screens/Dashboard/Vehicle/addVehiche';
import EditVehicle from '../screens/Dashboard/Vehicle/EditVehicle';
import VehicleDetails from '../screens/Dashboard/Vehicle/VehicleDetails';
import Profile from '../screens/Dashboard/Profile';
import Settings from '../screens/Dashboard/Settings';
import User from '../screens/Dashboard/User';
import Address from '../screens/Dashboard/Address';

const Stack = createNativeStackNavigator();

const AppStack = ({ navigation }) => {
  return (
    // initialRouteName = "AddVehicle"
    <Stack.Navigator screenOptions={{ headerTitleAlign: 'center', headerShown: false }}>
      <Stack.Screen name='AppTabStack' component={AppTabStack} />
      <Stack.Screen name='Vehicle' component={Vehicle} options={{ title: 'Meus Veículos', headerShown: true }} />
      <Stack.Screen name='AddVehicle' component={AddVehicle} options={{ title: 'Cadastrar Veículo' }} />
      <Stack.Screen name='EditVehicle' component={EditVehicle} options={{ title: 'Editar Veículo' }} />
      <Stack.Screen name='VehicleDetails' component={VehicleDetails} options={{ title: 'Detalhes do Veículo', headerShown: true }} />
      <Stack.Screen name='Profile' component={Profile} options={{ title: 'Perfil' }} />
      <Stack.Screen name='User' component={User} options={{ title: 'Editar perfil', headerShown: true }} />
      <Stack.Screen name='Settings' component={Settings} options={{ title: 'Configurações', headerShown: true }} />
      <Stack.Screen name='Address' component={Address} options={{ title: 'Endereço', headerShown: true }} />
    </Stack.Navigator>
  );
}

export default AppStack;