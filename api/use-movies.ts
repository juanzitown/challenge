import axios from "axios";
import useSWR from "swr";
import MovieType from "../types/movie-type";

export type UseMoviesPageable = {
  page?: number;
  size?: number;
  filters?: {
    winner?: boolean;
    year?: string;
    projection?:
      | "years-with-multiple-winners"
      | "studios-with-win-count"
      | "max-min-win-interval-for-producers";
  };
};

export default function useMovies(pageable: UseMoviesPageable) {
  const { data, error, isLoading } = useSWR(
    ["/api/movies", pageable],
    async () => {
      const response = await axios.get(
        "https://tools.texoit.com/backend-java/api/movies",
        {
          params: {
            page: pageable?.page,
            size: pageable?.size,
            year: pageable?.filters?.year,
            projection: pageable?.filters?.projection,
          },
        }
      );

      return response?.data as MoviesPayloadResponse;
    }
  );

  return {
    data: data?.content,
    error,
    isLoading,
  };
}

type MoviesPayloadResponse = {
  content: MovieType[];
  pageable: {
    sort: { sorted: boolean; unsorted: boolean };
    pageSize: number;
    pageNumber: number;
    offset: number;
    paged: boolean;
    unpaged: boolean;
  };
  totalElements: number;
  last: boolean;
  totalPages: number;
  first: boolean;
  sort: { sorted: boolean; unsorted: boolean };
  number: number;
  numberOfElements: number;
  size: number;
};
