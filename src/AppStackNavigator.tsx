import * as React from 'react';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';

import Main from './Screens/Main';

const Stack: any = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator initialRouteName='Main' screenOptions={{ headerShown: false }}>
      <Stack.Screen name='Main' component={Main} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
