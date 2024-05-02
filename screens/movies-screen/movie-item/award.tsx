import { FontAwesome5 } from "@expo/vector-icons";
import { StyleSheet, View } from "react-native";

type AwardProps = {};

export default function Award({}: AwardProps) {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <FontAwesome5 name="medal" size={20} color="gold" />
      </View>
      <View style={styles.awardCard}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 300,
    height: 300,
    top: 0,
    right: 0,
    position: "absolute",
    overflow: "hidden",
    borderRadius: 10,
    zIndex: 10,
  },
  iconContainer: {
    top: 12,
    right: 12,
    position: "absolute",
    overflow: "hidden",
    zIndex: 99,
  },
  awardCard: {
    width: 100,
    height: 120,
    top: -60,
    right: -30,
    position: "absolute",
    backgroundColor: "#6495ED",
    transform: [{ skewY: "45deg" }, { rotate: "11deg" }],
    overflow: "hidden",
  },
});
