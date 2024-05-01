import { StyleSheet, Text, View } from "react-native";
import MovieType from "../../../types/movie-type";
import Badge from "../../movies-screen/movie-item/badge";

type MovieItemProps = {
  movie: MovieType;
};

export default function MovieItem({ movie }: MovieItemProps) {
  return (
    <View style={styles.card}>
      <View style={styles.imagePlaceholder} />
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
  imagePlaceholder: {
    backgroundColor: "#cccccc",
    width: 48,
    height: 48,
    borderRadius: 8,
  },
  titleContainer: {
    gap: 4,
  },
  title: {
    fontWeight: "500",
    fontSize: 16,
  },
});
