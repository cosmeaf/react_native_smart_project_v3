import * as React from 'react';
// import { Button, Text, View } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Dashboard from '../screens/Dashboard';
import Vehicle from '../screens/Dashboard/Vehicle';
import Schedule from '../screens/Dashboard/Schedule';
import Tool from '../screens/Dashboard/Services';
import Setting from '../screens/Dashboard/Settings';

const Tab = createBottomTabNavigator();

const AppTabStack = () => {
  return (
    <Tab.Navigator
      screenOptions={{ headerTitleAlign: 'center', headerShown: false }}
      initialRouteName="Dashboard"
    // activeColor="#e91e63"
    // barStyle={{ backgroundColor: 'tomato' }}
    >
      <Tab.Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          tabBarLabel: 'Início',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Vehicle"
        component={Vehicle}
        options={{
          tabBarLabel: 'Carro',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="car" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Schedule"
        component={Schedule}
        options={{
          tabBarLabel: 'Agendar',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="calendar" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Tool"
        component={Tool}
        options={{
          tabBarLabel: 'Serviços',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="tools" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Setting"
        component={Setting}
        options={{
          tabBarLabel: 'Config',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="cog" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default AppTabStack;