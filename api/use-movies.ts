import axios from "axios";
import useSWR from "swr";

type UseMoviesProps = {
  page: number;
  size: number;
  winner?: boolean;
  year?: string;
  projection?:
    | "years-with-multiple-winners"
    | "studios-with-win-count"
    | "max-min-win-interval-for-producers";
};

export default function useMovies(pageable: UseMoviesProps) {
  const { data, error, isLoading } = useSWR(`/api/movies`, async () => {
    const response = await axios.get(
      "https://tools.texoit.com/backend-java/api/movies",
      {
        params: {
          page: pageable?.page,
          size: pageable?.size,
          year: pageable?.year,
          projection: pageable?.projection,
        },
      }
    );

    return response?.data as MoviesPayloadResponse;
  });

  return {
    data,
    error,
    isLoading,
  };
}

type MoviesPayloadResponse = {
  content: {
    id: number;
    year: number;
    title: string;
    studios: string[];
    producers: string[];
    winner: boolean;
  }[];
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
