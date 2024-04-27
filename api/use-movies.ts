import useSWR from "swr";

type UseMoviesProps = {};

export default function useMovies(props: UseMoviesProps = {}) {
  const { data, error, isLoading } = useSWR(`/api/movies`, async () => {
    const response = await fetch(
      "https://tools.texoit.com/backend-java/api/movies"
    );
    const data = await response.json();
    return data;
  });

  return {
    data,
    error,
    isLoading,
  };
}
