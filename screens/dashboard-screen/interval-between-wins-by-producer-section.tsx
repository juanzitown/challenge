import { StyleSheet, Text, View } from "react-native";
import useIntervalBetweenWinsByProducer from "../../api/use-interval-between-wins-by-producer";
import Divider from "../../components/divider";
import YearInterval from "../../components/year-interval";

export default function IntervalBetweenWinsByProducerSection() {
  const { data, error, isLoading } = useIntervalBetweenWinsByProducer();
  return (
    <View style={styles.card} testID="interval-between-wins-by-producer-section">
      <Text
        style={{
          fontSize: 18,
          textAlign: "center",
          fontWeight: "500",
          marginBottom: 16,
        }}
      >
        Producers with longest and shortest interval between wins
      </Text>
      <View style={{ gap: 4, paddingHorizontal: 6 }}>
        <Text
          style={{
            fontSize: 12,
            color: "rgba(0, 0, 0, .56)",
          }}
        >
          Maximum
        </Text>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
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
          <YearInterval
            start={data?.max?.previousWinYear}
            end={data?.max?.followingWinYear}
            interval={data?.max?.interval}
          />
        </View>
      </View>
      <View style={{ marginVertical: 10 }}>
        <Divider />
      </View>
      <View style={{ gap: 4, paddingHorizontal: 6 }}>
        <Text
          style={{
            fontSize: 12,
            color: "rgba(0, 0, 0, .56)",
          }}
        >
          Minimum
        </Text>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
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
          <YearInterval
            start={data?.min?.previousWinYear}
            end={data?.min?.followingWinYear}
            interval={data?.min?.interval}
          />
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
    paddingVertical: 16,
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
