import { StyleSheet, Text, View } from "react-native";
import MovieType from "../../../types/movie-type";
import Badge from "./badge";

type MovieItemProps = {
  movie: MovieType;
};

export default function MovieItem({ movie }: MovieItemProps) {
  return (
    <View style={styles.card}>
      <View style={styles.titleLayout}>
        <Text style={styles.title}>{movie?.title}</Text>
        <Badge text={movie?.year} />
        {/* <Badge text={movie?.id} /> */}
        <Text>winner: {movie?.winner ? "true" : "false"}</Text>
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
  titleLayout: {
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
