import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

type MoviesScreenProps = {};

export default function MoviesScreen(props: MoviesScreenProps) {
  return (
    <View style={styles.container}>
      <Text>Movies Screen</Text>
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
