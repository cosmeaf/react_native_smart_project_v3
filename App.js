import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native'
import { GlobalProvider } from './src/Contexts/Context';
import Route from './src/Routes';

export default function App() {
  return (
    <NavigationContainer>
      <GlobalProvider>
        <Route />
      </GlobalProvider>
    </NavigationContainer>

  );
}


