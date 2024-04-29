import { StatusBar } from "expo-status-bar";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import useMovies from "../../api/use-movies";
import Picker from "../../components/picker";
import MovieItem from "./movie-item";

type MoviesScreenProps = {};

export default function MoviesScreen(props: MoviesScreenProps) {
  const { data: movies, isLoading } = useMovies({ page: 1, size: 9 });
  return (
    <ScrollView>
      <StatusBar style="auto" />
      <Picker value={null} onChange={() => {}} />
      <View style={styles.container}>
        <Text>Movies Screen</Text>
        {movies?.map?.((movie) => (
          <MovieItem key={movie?.id} movie={movie} />
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    gap: 24,
    padding: 16,
  },
});
