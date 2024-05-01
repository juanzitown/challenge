import { StyleSheet, Text, View } from "react-native";

type BadgeProps = {
  text: string | number;
};

export default function Badge({ text }: BadgeProps) {
  return (
    <View style={styles.badge}>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  badge: {
    alignSelf: "flex-start",
    backgroundColor: "#6495ED", // Light Blue color
    paddingVertical: 2,
    paddingHorizontal: 6,
    borderRadius: 20,
  },
  text: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "500",
  },
});
