import { Text, View } from "react-native";

type YearIntervalProps = {
  start: number;
  end: number;
  interval: number;
};

export default function YearInterval({
  start,
  end,
  interval,
}: YearIntervalProps) {
  return (
    <View style={{ flexDirection: "row", alignItems: "center" }}>
      <Text
        style={{
          fontSize: 13,
          color: "#424242",
          textAlign: "center",
          minWidth: 32,
        }}
      >
        {start}
      </Text>
      <View
        style={{
          height: 4,
          width: 28,
          marginRight: -2,
          marginLeft: 4,
          borderRadius: 8,
          backgroundColor: "#6495ED",
        }}
      />
      <View
        style={{
          width: 22,
          height: 22,
          marginVertical: -6,
          borderRadius: 1000,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#6495ED",
        }}
      >
        <Text
          style={{
            fontSize: 13,
            fontWeight: "500",
            color: "white",
          }}
        >
          {interval}
        </Text>
      </View>
      <View
        style={{
          height: 4,
          width: 28,
          marginLeft: -2,
          marginRight: 4,
          borderRadius: 8,
          backgroundColor: "#6495ED",
        }}
      />
      <Text
        style={{
          fontSize: 13,
          color: "#424242",
          textAlign: "center",
          minWidth: 32,
        }}
      >
        {end}
      </Text>
    </View>
  );
}
