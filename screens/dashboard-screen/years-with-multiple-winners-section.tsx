import { Fragment } from "react";
import { StyleSheet, Text, View } from "react-native";
import useYearsWithMultipleWinners from "../../api/use-years-with-multiple-winners";
import Divider from "../../components/divider";

export default function YearsWithMultipleWinnersSection() {
  const { data, error, isLoading } = useYearsWithMultipleWinners();
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
        List years with multiple winners
      </Text>
      <View style={{ gap: 8 }}>
        {data?.map?.((item, index) => (
          <Fragment key={index}>
            {index > 0 && <Divider />}
            <View
              style={{
                flexDirection: "row",
                alignSelf: "center",
                alignItems: "center",
                paddingHorizontal: 16,
                gap: 6,
              }}
            >
              <Text
                style={{
                  fontSize: 17,
                  color: "#424242",
                  fontWeight: "500",
                  minWidth: 80,
                }}
              >
                {item?.year}
              </Text>
              <Text style={{ fontSize: 14, color: "#424242" }}>
                with {item?.winnerCount} movies
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
