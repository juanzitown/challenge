import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

type HomeScreenProps = {};

export default function HomeScreen(props: HomeScreenProps) {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app23!</Text>
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
