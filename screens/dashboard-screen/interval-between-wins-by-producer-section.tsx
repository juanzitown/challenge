import { StyleSheet, Text, View } from "react-native";
import useIntervalBetweenWinsByProducer from "../../api/use-interval-between-wins-by-producer";

export default function IntervalBetweenWinsByProducerSection() {
  const { data, error, isLoading } = useIntervalBetweenWinsByProducer();
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 18, fontWeight: "500" }}>
        Interval Between wins by Producer
      </Text>
      <View>
        <Text>Minimal Interval</Text>
        <View style={{ flexDirection: "row", gap: 8 }}>
          <Text>{data?.min?.producer}</Text>
          <Text>
            {data?.min?.previousWinYear}
            {" <-- "}
            {data?.min?.interval}
            {" --> "}
            {data?.min?.followingWinYear}
          </Text>
        </View>
      </View>
      <View>
        <Text>Maximum Interval</Text>
        <View style={{ flexDirection: "row", gap: 8 }}>
          <Text>{data?.max?.producer}</Text>
          <Text>
            {data?.max?.previousWinYear}
            {" <-- "}
            {data?.max?.interval}
            {" --> "}
            {data?.max?.followingWinYear}
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { gap: 12, padding: 8 },
});
