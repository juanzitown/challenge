import axios from "axios";
import useSWRInfinite from "swr/infinite";
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
  const getPage = (pageIndex, previousPageData) => {
    if (
      !!previousPageData?.totalPages &&
      pageIndex >= previousPageData?.totalPages
    ) {
      return null;
    }
    return ["/api/movies", { ...pageable, page: pageIndex + 1 }];
  };

  const { data, error, size, setSize, isValidating, isLoading } =
    useSWRInfinite(getPage, async (keys: any) => {
      const pageable = keys[1] as UseMoviesPageable;
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
    });

  const isLoadingMore =
    isLoading || (size > 0 && data && typeof data[size - 1] === "undefined");

  return {
    data: data?.map?.((data) => data?.content).flat?.(),
    error,
    isLoading,
    isLoadingMore,
    fetchNextPage: () => setSize(size + 1),
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
