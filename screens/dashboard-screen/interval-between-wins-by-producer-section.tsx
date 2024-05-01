import { StyleSheet, Text, View } from "react-native";
import useIntervalBetweenWinsByProducer from "../../api/use-interval-between-wins-by-producer";
import Divider from "../../components/divider";

export default function IntervalBetweenWinsByProducerSection() {
  const { data, error, isLoading } = useIntervalBetweenWinsByProducer();
  return (
    <View style={styles.card}>
      <Text
        style={{
          fontSize: 18,
          textAlign: "center",
          fontWeight: "500",
          marginBottom: 16,
        }}
      >
        Interval between wins by Producer
      </Text>
      <View style={{ gap: 4 }}>
        <Text
          style={{
            fontSize: 12,
            paddingHorizontal: 12,
            color: "rgba(0, 0, 0, .56)",
          }}
        >
          Minimum
        </Text>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            paddingHorizontal: 12,
            gap: 6,
          }}
        >
          <Text
            style={{
              fontSize: 14,
              color: "#424242",
              fontWeight: "500",
              flex: 1,
            }}
          >
            {data?.min?.producer}
          </Text>
          <Text style={{ fontSize: 14, color: "#424242" }}>
            {data?.min?.previousWinYear}
            {" <-- "}
            {data?.min?.interval}
            {" --> "}
            {data?.min?.followingWinYear}
          </Text>
        </View>
      </View>
      <View style={{ marginTop: 4, marginBottom: 16 }}>
        <Divider />
      </View>
      <View style={{ gap: 4 }}>
        <Text
          style={{
            fontSize: 12,
            paddingHorizontal: 12,
            color: "rgba(0, 0, 0, .56)",
          }}
        >
          Maximum
        </Text>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            paddingHorizontal: 12,
            gap: 6,
          }}
        >
          <Text
            style={{
              fontSize: 14,
              color: "#424242",
              fontWeight: "500",
              flex: 1,
            }}
          >
            {data?.max?.producer}
          </Text>
          <Text style={{ fontSize: 14, color: "#424242" }}>
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
  card: {
    position: "relative", // Needed for absolute positioning award
    backgroundColor: "#ffffff",
    borderRadius: 10,
    paddingVertical: 8,
    paddingHorizontal: 12,
    shadowColor: "#000000",
    shadowOpacity: 0.2,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    elevation: 2, // for android
  },
});
