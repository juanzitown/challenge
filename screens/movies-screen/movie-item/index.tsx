import { StyleSheet, Text, View } from "react-native";
import MovieType from "../../../types/movie-type";
import Award from "./award";
import Badge from "./badge";

type MovieItemProps = {
  movie: MovieType;
};

export default function MovieItem({ movie }: MovieItemProps) {
  return (
    <View style={styles.card}>
      {movie?.winner && <Award />}
      <View style={styles.imagePlaceholder} />
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{movie?.title}</Text>
        <Badge text={movie?.year} />
      </View>
      <View style={{ marginTop: 12, gap: 4 }}>
        <Text style={styles.producers}>
          producers: {movie?.producers?.join?.(", ")}
        </Text>
        <Text style={styles.studios}>
          Studios: {movie?.studios?.join?.(", ")}
        </Text>
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
  imagePlaceholder: {
    backgroundColor: "#cccccc",
    width: "100%",
    height: 120,
    borderRadius: 8,
    marginBottom: 10,
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    flexWrap: "wrap-reverse",
  },
  title: {
    fontWeight: "500",
    fontSize: 18,
  },
  producers: {
    fontWeight: "400",
    color: "rgba(0, 0, 0, .56)",
    fontSize: 12,
  },
  studios: {
    fontWeight: "400",
    color: "rgba(0, 0, 0, .56)",
    fontSize: 12,
  },
});
