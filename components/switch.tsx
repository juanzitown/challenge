import React from "react";
import { Switch as RNSwitch, StyleSheet, View } from "react-native";

type SwitchProps = {
  value: any;
  onChange: (value: any) => void;
};

export default function Switch({ value, onChange }: SwitchProps) {
  return (
    <View style={styles.container}>
      <RNSwitch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={value ? "#f5dd4b" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={onChange}
        value={value}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignSelf: "flex-start",
    borderRadius: 10,
    shadowColor: "#000000",
    shadowOpacity: 0.2,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    elevation: 2, // for android
  },
});
