import React from "react";
import { View } from "react-native";
import RNPickerSelect from "react-native-picker-select";

const currentYear = new Date().getFullYear();
const years = Array.from({ length: 130 }, (_, index) => {
  const value = String(currentYear - index);
  return { label: value, value: value };
}); // Generate years from current to 1895

type PickerProps = {
  value: any;
  onChange: (value: any) => void;
};

export default function Picker({ value, onChange }: PickerProps) {
  return (
    <View>
      <RNPickerSelect value={value} onValueChange={onChange} items={years} />
    </View>
  );
}
