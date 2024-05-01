import { StatusBar } from "expo-status-bar";
import { ScrollView, StyleSheet, View } from "react-native";
import IntervalBetweenWinsByProducerSection from "./interval-between-wins-by-producer-section";
import TopStudiosWithWinnersSection from "./top-studios-with-winners-section";
import YearsWithMultipleWinnersSection from "./years-with-multiple-winners-section";

export default function DashboardScreen() {
  return (
    <ScrollView>
      <StatusBar style="auto" />
      <View style={styles.container}>
        <YearsWithMultipleWinnersSection />
        <TopStudiosWithWinnersSection />
        <IntervalBetweenWinsByProducerSection />
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
