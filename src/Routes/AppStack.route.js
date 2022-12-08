import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import AppTabStack from './TabSatck.route';
import AddVehicle from '../screens/Dashboard/Vehicle/addVehiche';
import EditVehicle from '../screens/Dashboard/Vehicle/EditVehicle';

const Stack = createNativeStackNavigator();

const AppStack = () => {
  return (
    // initialRouteName = "AddVehicle"
    <Stack.Navigator screenOptions={{ headerTitleAlign: 'center', headerShown: false }}>
      <Stack.Screen name='AppTabStack' component={AppTabStack} />
      <Stack.Screen name='AddVehicle' component={AddVehicle} options={{ title: 'Cadastrar Veículo' }} />
      <Stack.Screen name='EditVehicle' component={EditVehicle} options={{ title: 'Editar Veículo' }} />
    </Stack.Navigator>
  );
}

export default AppStack;