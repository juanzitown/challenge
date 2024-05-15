import { StyleSheet, View } from "react-native";
import { UseMoviesPageableType } from "../../api/use-movies";
import WinnerPicker from "../../components/winner-picker";
import YearPicker from "../../components/year-picker";

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
      <YearPicker
        placeholder="Filter by year"
        value={pageable?.filters?.year}
        onChange={(value) => {
          onChange?.({
            ...pageable,
            filters: { ...pageable?.filters, year: value },
          });
        }}
      />
      <WinnerPicker
        placeholder="Filter by winner"
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
