import { useState } from "react";
import { View } from "react-native";
import Picker from "../../components/picker";

export default function FiltersSection() {
  const [selected, setSelected] = useState();
  return (
    <View style={{ padding: 12 }}>
      <Picker
        value={selected}
        onChange={setSelected}
        placeholder="Filter by Year"
      />
    </View>
  );
}
