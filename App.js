import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Slider from './Component/Slider';
import AddWallet from './Component/Add_wallet';
import CreatAccount from './Component/Creat_account';
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Slider"
          component={Slider}
          options={{
            headerShown: null,
          }}
        />
        <Stack.Screen
          name="Add Wallet"
          component={AddWallet}
        />
        <Stack.Screen
        name="Creat Acount"
        component={CreatAccount}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
