import { StyleSheet, Text, View } from "react-native";
import MovieType from "../../../types/movie-type";
import Award from "./award";
import Badge from "./badge";

type MovieItemProps = {
  movie: MovieType;
};

export default function MovieItem({ movie }: MovieItemProps) {
  return (
    <View style={styles.card} testID={`movie-item-${movie?.id}`}>
      {movie?.winner && <Award />}
      <View style={styles.imagePlaceholder}>
        <View style={styles.badgeId}>
          <Text style={styles.badgeIdText}>ID: {movie?.id}</Text>
        </View>
      </View>
      <View style={styles.titleContainer}>
        <Badge text={movie?.year} />
        <Text style={styles.title}>{movie?.title}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    position: "relative", // Needed for absolute positioning award
    backgroundColor: "#ffffff",
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 14,
    shadowColor: "#000000",
    shadowOpacity: 0.2,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    elevation: 2, // for android
  },
  badgeId: {
    alignSelf: "center",
    alignItems: "center",
    backgroundColor: "#777777", // Dark Gray
    paddingVertical: 4,
    minWidth: 40,
    paddingHorizontal: 8,
    borderRadius: 20,
  },
  badgeIdText: {
    color: "#fff",
    fontSize: 13,
    fontWeight: "bold",
  },
  imagePlaceholder: {
    backgroundColor: "#cccccc",
    width: "100%",
    justifyContent: "center",
    height: 120,
    borderRadius: 8,
    marginBottom: 10,
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    flexWrap: "wrap-reverse",
  },
  title: {
    fontWeight: "500",
    fontSize: 18,
  },
});
