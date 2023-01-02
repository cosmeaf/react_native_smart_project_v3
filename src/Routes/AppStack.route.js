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
import Freios from '../screens/Dashboard/Services/Freios';
import OutrosServicos from '../screens/Dashboard/Services/OutrosServicos';
import RevisaoBasica from '../screens/Dashboard/Services/RevisaoBasica';
import ListaRevisaoBasica from '../screens/Dashboard/Services/ListaRevisaoBasica';
import ListaRevisaoCompleta from '../screens/Dashboard/Services/ListaRevisaoCompleta';
import RevisaoCompleta from '../screens/Dashboard/Services/RevisaoCompleta';
import TrocaDeOleo from '../screens/Dashboard/Services/TrocaDeOleo';
import ListaTrocaDeOleo from '../screens/Dashboard/Services/ListaTrocaDeOleo';
import TrocaDeOleoRevisaoBasica from '../screens/Dashboard/Services/TrocaDeOleoRevisaoBasica';
import ListaTrocaDeOleoRevisaoBasica from '../screens/Dashboard/Services/ListaTrocaDeOleoRevisaoBasica';
import TrocaDeOleoRevisaoCompleta from '../screens/Dashboard/Services/TrocaDeOleoRevisaoCompleta';
import ListaTrocaDeOleoRevisaoCompleta from '../screens/Dashboard/Services/ListaTrocaDeOleoRevisaoCompleta';


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
      <Stack.Screen name='Freios' component={Freios} options={{ title: 'Serviço de Freios', headerShown: true, }} />
      <Stack.Screen name='OutrosServicos' component={OutrosServicos} options={{ title: 'Outros serviços / Orçamento', headerShown: true, }} />
      <Stack.Screen name='RevisaoBasica' component={RevisaoBasica} options={{ title: 'Revisão Básica', headerShown: true, }} />
      <Stack.Screen name='ListaRevisaoBasica' component={ListaRevisaoBasica} options={{ title: 'Categoria de Serviços', headerShown: true, }} />
      <Stack.Screen name='ListaRevisaoCompleta' component={ListaRevisaoCompleta} options={{ title: 'Categoria de Serviços', headerShown: true, }} />
      <Stack.Screen name='RevisaoCompleta' component={RevisaoCompleta} options={{ title: 'Revisão Completa', headerShown: true, }} />
      <Stack.Screen name='TrocaDeOleo' component={TrocaDeOleo} options={{ title: 'Troca de Óleo', headerShown: true, }} />
      <Stack.Screen name='ListaTrocaDeOleo' component={ListaTrocaDeOleo} options={{ title: 'Categoria de Serviços', headerShown: true, }} />
      <Stack.Screen name='TrocaDeOleoRevisaoBasica' component={TrocaDeOleoRevisaoBasica}
        options={{ title: 'Troca de Óleo Revisao Básica', headerShown: true, }} />
      <Stack.Screen name='ListaTrocaDeOleoRevisaoBasica' component={ListaTrocaDeOleoRevisaoBasica}
        options={{ title: 'Categoria de Serviços', headerShown: true, }} />
      <Stack.Screen name='TrocaDeOleoRevisaoCompleta' component={TrocaDeOleoRevisaoCompleta}
        options={{ title: 'Troca de Oleo Revisao Completa', headerShown: true, }} />
      <Stack.Screen name='ListaTrocaDeOleoRevisaoCompleta' component={ListaTrocaDeOleoRevisaoCompleta}
        options={{ title: 'Categoria de Serviços', headerShown: true, }} />

    </Stack.Navigator>

  );
}

export default AppStack;