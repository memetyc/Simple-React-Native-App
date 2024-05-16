import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SearchScreen from './src/screens/HomeScreen';
import Detail from './src/screens/Detail';

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
    <Stack.Navigator screenOptions={{headerTitle:'Restoran Uygulaması'}} >
      {/* <Stack.Screen name="Search" options={{headerShown:false}}  component={SearchScreen} /> */}
      <Stack.Screen name="Search"   component={SearchScreen} />
      <Stack.Screen name="Detail"   component={Detail} />
    </Stack.Navigator>
  </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
