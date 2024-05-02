import { FontAwesome5 } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import * as React from "react";
import DashboardScreen from "./screens/dashboard-screen";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MoviesScreen from "./screens/movies-screen";

const Tab = createBottomTabNavigator();

export default function Router() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Dashboard"
        screenOptions={{
          tabBarActiveTintColor: "#6495ED",
        }}
      >
        <Tab.Screen
          name="Dashboard"
          component={DashboardScreen}
          options={{
            tabBarLabelStyle: { fontSize: 12 },
            tabBarIcon: ({ color, size }) => (
              <FontAwesome5 name="home" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Movies"
          component={MoviesScreen}
          options={{
            tabBarLabelStyle: { fontSize: 12 },
            tabBarIcon: ({ color, size }) => (
              <FontAwesome5 name="film" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
