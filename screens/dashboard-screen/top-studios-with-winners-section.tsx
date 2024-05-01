import { StyleSheet, Text, View } from "react-native";
import useTopStudiosWithWinners from "../../api/use-top-studios-with-winners";

export default function TopStudiosWithWinnersSection() {
  const { data, error, isLoading } = useTopStudiosWithWinners();
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 18, fontWeight: "500" }}>
        Top 3 Studios with winners
      </Text>
      {data?.slice?.(0, 3)?.map?.((item) => (
        <View key={item?.name} style={{ flexDirection: "row", gap: 12 }}>
          <Text>{item?.name}</Text>
          <Text>{item?.winCount}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { height: 80, width: "100%", padding: 8 },
});
