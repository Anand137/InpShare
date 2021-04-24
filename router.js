import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Launcher from './src/Screens/launcher';
import ShareModeSelection from './src/Screens/ShareModeSelection';
import SendFiles from './src/Screens/SendFiles';
import ReceiveFiles from './src/Screens/ReceiveFiles';

const Stack = createStackNavigator();

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="launcher"
          component={Launcher}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="shareModeSelection"
          component={ShareModeSelection}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="sendFiles"
          component={SendFiles}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="receiveFiles"
          component={ReceiveFiles}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
