import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import useMovies, { UseMoviesPageable } from "../../api/use-movies";
import Button from "../../components/button";
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
    isNonIdealState,
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
          {isNonIdealState ? (
            <Text style={{ color: "rgba(0, 0, 0, 0.56)" }}>No data!</Text>
          ) : (
            <>
              {isLoading ? (
                <Text style={{ color: "rgba(0, 0, 0, 0.56)" }}>Loading...</Text>
              ) : (
                <>
                  {isLoadingMore ? (
                    <Text style={{ color: "rgba(0, 0, 0, 0.56)" }}>
                      Loading More...
                    </Text>
                  ) : (
                    <Button
                      intent="info"
                      label="Load more"
                      onPress={fetchNextPage}
                    />
                  )}
                </>
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
