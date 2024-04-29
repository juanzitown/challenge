import { useState } from "react";
import { Text, View } from "react-native";
import Picker from "../../components/picker";
import Switch from "../../components/switch";

export default function FiltersSection() {
  const [yearSelected, setYearSelected] = useState();
  const [winner, setWinner] = useState();
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "flex-end",
        alignItems: "center",
        gap: 16,
        padding: 12,
      }}
    >
      <Picker
        value={yearSelected}
        onChange={setYearSelected}
        placeholder="Filter by Year"
      />
      <View style={{ flexDirection: "row", alignItems: "center", gap: 6 }}>
        <Text>Award?</Text>
        <Switch value={winner} onChange={setWinner} />
      </View>
    </View>
  );
}
