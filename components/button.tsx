import { Text, TouchableHighlight } from "react-native";

type ButtonProps = {
  onPress: () => void;
  label: string;
  intent: "info";
  testID?: string
};

export default function Button({ onPress, intent, label, testID }: ButtonProps) {
  return (
    <TouchableHighlight
      testID={testID}
      onPress={onPress}
      underlayColor={intentMap[intent]?.bgActiveColor}
      hitSlop={{ top: 16, left: 16, right: 16, bottom: 16 }}
    >
      <Text style={{ color: intentMap[intent]?.textColor, padding: 8 }}>
        {label}
      </Text>
    </TouchableHighlight>
  );
}

const intentMap = {
  info: {
    bgActiveColor: "#BBDEFB", //info-100
    textColor: "#2196F3", //info-500
  },
};
