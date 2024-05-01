import React from "react";
import { Switch as RNSwitch, StyleSheet, Text, View } from "react-native";

type SwitchProps = {
  value: any;
  onChange: (value: any) => void;
  label?: string;
};

export default function Switch({ label, value, onChange }: SwitchProps) {
  return (
    <View style={styles.container}>
      {Boolean(label) && <Text>{label}</Text>}
      <RNSwitch
        value={value}
        onValueChange={onChange}
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={value ? "#f5dd4b" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
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
