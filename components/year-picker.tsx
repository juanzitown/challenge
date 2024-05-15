import React from "react";
import { StyleSheet, View } from "react-native";
import RNPickerSelect from "react-native-picker-select";

const currentYear = new Date().getFullYear();
const years = Array.from({ length: 130 }, (_, index) => {
  const value = String(currentYear - index);
  return { label: value, value: value };
}); // Generate years from current to 1895

type YearPickerProps = {
  value: any;
  onChange: (value: any) => void;
  placeholder?: string;
};

export default function YearPicker({
  value,
  onChange,
  placeholder,
}: YearPickerProps) {
  return (
    <View style={styles.container}>
      <RNPickerSelect
        value={value}
        touchableWrapperProps={{ hitSlop: 16 }}
        onValueChange={(value) => {
          switch (value) {
            case placeholder:
            case "null":
            case "undefined":
              onChange?.(undefined);
              break;
            default:
              onChange?.(value);
          }
        }}
        itemKey="value"
        style={{ viewContainer: styles.picker }}
        items={years}
        placeholder={{ label: placeholder, value: null }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  picker: {
    paddingVertical: 7,
    paddingHorizontal: 12,
  },
  container: {
    alignSelf: "flex-start",
    backgroundColor: "#ffffff",
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
