import { StatusBar } from "expo-status-bar";
import { ScrollView, StyleSheet, View } from "react-native";
import YearsWithMultipleWinnersSection from "./years-with-multiple-winners-section";

export default function DashboardScreen() {
  return (
    <ScrollView>
      <StatusBar style="auto" />
      <View style={styles.container}>
        <YearsWithMultipleWinnersSection />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 24,
    padding: 16,
  },
});
