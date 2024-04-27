import { NavigationContainer } from "@react-navigation/native";
import * as React from "react";
import HomeScreen from "./screens/home/home-screen";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AccountScreen from "./screens/account/account-screen";

const Tab = createBottomTabNavigator();

export default function Router() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Settings" component={AccountScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
