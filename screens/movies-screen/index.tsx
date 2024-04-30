import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import useMovies, { UseMoviesPageable } from "../../api/use-movies";
import FiltersSection from "./filters-section";
import MovieItem from "./movie-item";

type MoviesScreenProps = {};

export default function MoviesScreen(props: MoviesScreenProps) {
  const [pageable, setPageable] = useState<UseMoviesPageable>({
    page: 1,
    size: 9,
  });
  const { data: movies, isLoading } = useMovies(pageable);
  return (
    <ScrollView>
      <StatusBar style="auto" />
      <FiltersSection pageable={pageable} onChange={setPageable} />
      <View style={styles.container}>
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
    gap: 24,
    padding: 16,
  },
});
