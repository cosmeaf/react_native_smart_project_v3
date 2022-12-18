import React, { useContext } from 'react';
import { View, ActivityIndicator } from "react-native";
import GlobalContext from '../Contexts/Context';

import AppStack from './AppStack.route';
import AuthStack from './AuthStack.route';
import AppTabStack from './TabSatck.route';


const Route = () => {
  const { authentication, isLoading } = useContext(GlobalContext);

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size='large' color="#38A69D" />
      </View>
    );
  }
  return authentication ? <AppStack /> : <AuthStack />
}

export default Route;