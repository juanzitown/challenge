import { StyleSheet, View } from "react-native";
import { UseMoviesPageableType } from "../../api/use-movies";
import Picker from "../../components/picker";
import Switch from "../../components/switch";

type FiltersSectionProps = {
  pageable: UseMoviesPageableType;
  onChange: (pageable: UseMoviesPageableType) => void;
};

export default function FiltersSection({
  pageable,
  onChange,
}: FiltersSectionProps) {
  return (
    <View style={styles.container}>
      <Picker
        placeholder="Filter by Year"
        value={pageable?.filters?.year}
        onChange={(value) => {
          onChange?.({
            ...pageable,
            filters: { ...pageable?.filters, year: value },
          });
        }}
      />
      <Switch
        label="Award?"
        value={pageable?.filters?.winner}
        onChange={(value) => {
          onChange?.({
            ...pageable,
            filters: { ...pageable?.filters, winner: value },
          });
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    gap: 16,
    paddingHorizontal: 12,
  },
});
