import React from 'react';
import { Button } from 'react-native-elements'
import { TouchableOpacity, Text } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import AppTabStack from './TabSatck.route';
import Vehicle from '../screens/Dashboard/Vehicle';
import AddVehicle from '../screens/Dashboard/Vehicle/addVehiche';
import EditVehicle from '../screens/Dashboard/Vehicle/EditVehicle';
import VehicleDetails from '../screens/Dashboard/Vehicle/VehicleDetails';
import ScheduleDetails from '../screens/Dashboard/Schedule/ScheduleDetails';
import Profile from '../screens/Dashboard/Profile';
import Settings from '../screens/Dashboard/Settings';
import User from '../screens/Dashboard/User';
import Address from '../screens/Dashboard/Address';
// Pages Services SmartMecanico
import Baterias from '../screens/Dashboard/Services/Baterias';
import Pneus from '../screens/Dashboard/Services/Pneus';
import Consertos from '../screens/Dashboard/Services/Consertos';
import Freios from '../screens/Dashboard/Services/Freios';
import Manutencao from '../screens/Dashboard/Services/Manutencao';
import Mecanico from '../screens/Dashboard/Services/Mecanico';
import Revisao from '../screens/Dashboard/Services/Revisao';

const Stack = createNativeStackNavigator();

const AppStack = ({ navigation }) => {
  return (
    // initialRouteName = "AddVehicle"
    <Stack.Navigator screenOptions={{ headerTitleAlign: 'center', headerShown: false }}>
      <Stack.Screen name='AppTabStack' component={AppTabStack} />
      <Stack.Screen name='Vehicle' component={Vehicle} options={({ navigation, route }) => ({
        title: 'Meus Veículos',
        headerShown: true,
        headerRight: () => (
          <Button
            onPress={() => navigation.navigate('AddVehicle')}
            type='clear'
            title="Novo"
          />
        ),
      }

      )} />
      <Stack.Screen name='AddVehicle' component={AddVehicle} options={{ title: 'Cadastrar Veículo', headerShown: true }} />
      <Stack.Screen name='EditVehicle' component={EditVehicle} options={{ title: 'Editar Veículo' }} />
      <Stack.Screen name='VehicleDetails' component={VehicleDetails} options={{ title: 'Detalhes do Veículo', headerShown: true }} />
      <Stack.Screen name='ScheduleDetails' component={ScheduleDetails} options={{ title: 'Detalhes de Agendamento', headerShown: true }} />
      <Stack.Screen name='Profile' component={Profile} options={{ title: 'Perfil' }} />
      <Stack.Screen name='User' component={User} options={{ title: 'Editar perfil', headerShown: true }} />
      <Stack.Screen name='Settings' component={Settings} options={{ title: 'Configurações', headerShown: true }} />
      <Stack.Screen name='Address' component={Address} options={{ title: 'Endereço', headerShown: true }} />
      <Stack.Screen name='Baterias' component={Baterias} options={{ title: 'Baterias', headerShown: true }} />
      <Stack.Screen name='Pneus' component={Pneus} options={{ title: 'Pneus', headerShown: true }} />
      <Stack.Screen name='Consertos' component={Consertos} options={{ title: 'Consertos', headerShown: true }} />
      <Stack.Screen name='Freios' component={Freios}
        options={{
          title: 'Serviço de Freios',
          headerShown: true,
          // headerTransparent: true,
          // headerTintColor: '#fff',
          // headerStyle: {
          //   backgroundColor: 'transparent',
          // }
        }} />
      <Stack.Screen name='Manutencao' component={Manutencao} options={{ title: 'Manutenção', headerShown: true }} />
      <Stack.Screen name='Mecanico' component={Mecanico} options={{ title: 'Mecânico', headerShown: true }} />
      <Stack.Screen name='Revisao' component={Revisao} options={{ title: 'Revisão', headerShown: true }} />
    </Stack.Navigator>
  );
}

export default AppStack;