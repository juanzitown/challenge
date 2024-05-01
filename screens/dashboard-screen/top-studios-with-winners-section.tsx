import { FontAwesome5 } from "@expo/vector-icons";
import { Fragment } from "react";
import { StyleSheet, Text, View } from "react-native";
import useTopStudiosWithWinners from "../../api/use-top-studios-with-winners";
import Divider from "../../components/divider";

const rankingData = [
  { icon: "medal", color: "#FFD700" }, // Gold color
  { icon: "medal", color: "#C0C0C0" }, // Silver color
  { icon: "medal", color: "#CD7F32" }, // Bronze color
];

export default function TopStudiosWithWinnersSection() {
  const { data, error, isLoading } = useTopStudiosWithWinners();
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
        Top 3 Studios with winners
      </Text>
      <View style={{ gap: 8 }}>
        {data?.slice?.(0, 3)?.map?.((item, index) => (
          <Fragment key={index}>
            {index > 0 && <Divider />}
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                paddingHorizontal: 12,
                gap: 6,
              }}
            >
              <View style={{ minWidth: 26 }}>
                <View style={{ alignSelf: "center" }}>
                  <FontAwesome5
                    size={18}
                    name={rankingData[index].icon}
                    color={rankingData[index].color}
                  />
                </View>
              </View>
              <Text
                style={{
                  fontSize: 14,
                  color: "#424242",
                  fontWeight: "500",
                  flex: 1,
                }}
              >
                {item?.name}
              </Text>
              <Text style={{ fontSize: 14, color: "#424242" }}>
                {item?.winCount} movies
              </Text>
            </View>
          </Fragment>
        ))}
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
