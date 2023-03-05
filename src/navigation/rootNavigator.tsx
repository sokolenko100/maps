import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HelloWorldScreen from '@screens/HelloWorld';
import {navigationRef} from '@helpers/rootNavigation';

const Stack = createStackNavigator();

const RootNavigator = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator initialRouteName={HelloWorldScreen.name}>
        <Stack.Screen
          name={HelloWorldScreen.name}
          component={HelloWorldScreen}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export {RootNavigator};
