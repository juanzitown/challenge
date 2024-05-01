import { StyleSheet, Text, View } from "react-native";
import useYearsWithMultipleWinners from "../../api/use-years-with-multiple-winners";

export default function YearsWithMultipleWinnersSection() {
  const { data, error, isLoading } = useYearsWithMultipleWinners();
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 18, fontWeight: "500" }}>
        Years with multiple winners
      </Text>
      {data?.map?.((item) => (
        <View key={item?.year} style={{ flexDirection: "row", gap: 12 }}>
          <Text>{item?.year}</Text>
          <Text>{item?.winnerCount}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { height: 80, width: "100%", padding: 8 },
});
