import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from "react-native";
import useMovies, { UseMoviesPageable } from "../../api/use-movies";
import FiltersSection from "./filters-section";
import MovieItem from "./movie-item";

type MoviesScreenProps = {};

export default function MoviesScreen(props: MoviesScreenProps) {
  const [pageable, setPageable] = useState<UseMoviesPageable>({
    page: 1,
    size: 9,
  });
  const {
    data: movies,
    fetchNextPage,
    isLoading,
    isLoadingMore,
  } = useMovies(pageable);
  return (
    <ScrollView>
      <StatusBar style="auto" />
      <FiltersSection pageable={pageable} onChange={setPageable} />
      <View style={styles.container}>
        {movies?.map?.((movie) => (
          <MovieItem key={movie?.id} movie={movie} />
        ))}

        <View style={{ justifyContent: "center", alignItems: "center" }}>
          {isLoading ? (
            <Text style={{ color: "rgba(0, 0, 0, 0.56" }}>Loading...</Text>
          ) : (
            <>
              {isLoadingMore ? (
                <Text style={{ color: "rgba(0, 0, 0, 0.56" }}>
                  Loading More...
                </Text>
              ) : (
                <TouchableHighlight
                  onPress={fetchNextPage}
                  underlayColor="#BBDEFB"
                  hitSlop={{ top: 16, left: 16, right: 16, bottom: 16 }}
                >
                  <Text style={{ color: "#2196F3", padding: 8 }}>
                    Load more ({movies?.length})
                  </Text>
                </TouchableHighlight>
              )}
            </>
          )}
        </View>
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
