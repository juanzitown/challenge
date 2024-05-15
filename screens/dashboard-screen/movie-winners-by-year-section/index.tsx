import { useState } from "react";
import { Text, View } from "react-native";
import useMovies, { UseMoviesPageableType } from "../../../api/use-movies";
import Picker from "../../../components/picker";
import MovieItem from "./movie-item";

export default function MovieWinnersByYearSection() {
  const [pageable, setPageable] = useState<UseMoviesPageableType>({
    page: 0,
    size: 3,
    filters: {
      winner: true,
    },
  });
  const { data, error, isLoading, isNonIdealState } = useMovies(pageable);

  return (
    <View style={{ gap: 8 }}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          gap: 12,
          justifyContent: "space-between",
        }}
      >
        <Text style={{ fontSize: 18, fontWeight: "500" }}>
          List movie winners by year
        </Text>
        <Picker
          placeholder="Filter by Year"
          value={pageable?.filters?.year}
          onChange={(value) => {
            setPageable({
              ...pageable,
              filters: { ...pageable?.filters, year: value },
            });
          }}
        />
      </View>
      {data?.slice?.(0, 3)?.map?.((movie) => (
        <MovieItem key={movie.id} movie={movie} />
      ))}
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        {isNonIdealState ? (
          <Text style={{ color: "rgba(0, 0, 0, 0.56)" }}>No data!</Text>
        ) : (
          <>
            {isLoading && (
              <Text style={{ color: "rgba(0, 0, 0, 0.56)" }}>Loading...</Text>
            )}
            {!isLoading && data?.length > 3 && (
              <Text style={{ fontSize: 10, color: "rgba(0, 0, 0, 0.56)" }}>
                See more results in movies page
              </Text>
            )}
          </>
        )}
      </View>
    </View>
  );
}
