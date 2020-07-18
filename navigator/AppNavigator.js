import { NavigationContainer } from '@react-navigation/native';
import TabNavigator from "./TabNavigator";
import React from "react";

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <TabNavigator/>
    </NavigationContainer>
  );
}

export default AppNavigator;
