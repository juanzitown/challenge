import React from "react";
import { StyleSheet, View } from "react-native";
import RNPickerSelect from "react-native-picker-select";

type WinnerPickerProps = {
  value: any;
  onChange: (value: any) => void;
  placeholder?: string;
};

export default function WinnerPicker({
  value,
  onChange,
  placeholder,
}: WinnerPickerProps) {
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
        items={[
          { label: "Yes", value: true },
          { label: "No", value: false },
        ]}
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
