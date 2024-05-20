import { StyleSheet, Text, View } from "react-native";
import MovieType from "../../../types/movie-type";
import Badge from "../../movies-screen/movie-item/badge";

type MovieItemProps = {
  movie: MovieType;
};

export default function MovieItem({ movie }: MovieItemProps) {
  return (
    <View style={styles.card} testID={`movie-item-${movie?.id}`}>
      <View style={styles.imagePlaceholder}>
        <View style={styles.badgeId}>
          <Text style={styles.badgeIdText}>{movie?.id}</Text>
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
    flexDirection: "row",
    gap: 8,
    alignContent: "flex-start",
    justifyContent: "flex-start",
    backgroundColor: "#ffffff",
    borderRadius: 10,
    paddingVertical: 8,
    paddingHorizontal: 10,
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
    width: 64,
    height: 48,
    borderRadius: 8,
    justifyContent: "center",
  },
  titleContainer: {
    gap: 4,
  },
  title: {
    fontWeight: "500",
    fontSize: 16,
  },
});
