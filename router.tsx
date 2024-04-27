import { NavigationContainer } from "@react-navigation/native";
import * as React from "react";
import DashboardScreen from "./screens/dashboard-screen";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MoviesScreen from "./screens/movies-screen";

const Tab = createBottomTabNavigator();

export default function Router() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Dashboard" component={DashboardScreen} />
        <Tab.Screen name="Movies" component={MoviesScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
