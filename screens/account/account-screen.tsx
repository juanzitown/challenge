import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

type AccountScreenProps = {};

export default function AccountScreen(props: AccountScreenProps) {
  return (
    <View style={styles.container}>
      <Text>Account Screen</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
