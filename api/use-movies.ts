import axios from "axios";
import useSWRInfinite from "swr/infinite";
import MovieType from "../types/movie-type";

export type UseMoviesPageableType = {
  enabled?: boolean;
  page?: number;
  size?: number;
  filters?: {
    winner?: boolean;
    year?: string;
  };
};

export default function useMovies(pageable: UseMoviesPageableType) {
  const getPage = (pageIndex, previousPageData) => {
    if (pageable?.enabled === false) {
      return null;
    }
    if (
      !!previousPageData?.totalPages &&
      pageIndex >= previousPageData?.totalPages
    ) {
      return null;
    }
    return ["/api/movies", { ...pageable, page: pageIndex }];
  };

  const { data, error, size, setSize, isLoading } = useSWRInfinite(
    getPage,
    async (keys: any) => {
      const pageable = keys[1] as UseMoviesPageableType;
      const response = await axios.get(
        "https://tools.texoit.com/backend-java/api/movies",
        {
          params: {
            page: pageable?.page,
            size: pageable?.size,
            winner: pageable?.filters?.winner ?? undefined,
            year: pageable?.filters?.year ?? undefined,
          },
        }
      );

      return response?.data as MoviesPayloadResponse;
    }
  );

  const movies = data?.map?.((data) => data?.content).flat?.();
  const isLoadingMore =
    isLoading || (size > 0 && data && typeof data[size - 1] === "undefined");
  const isNonIdealState = !isLoading && !isLoadingMore && !movies?.length;

  return {
    data: movies,
    error,
    isNonIdealState,
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
