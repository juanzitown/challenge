import axios from "axios";
import useSWR from "swr";

export default function useYearsWithMultipleWinners() {
  const { data, error, isLoading } = useSWR(
    "/dashboard/years-with-multiple-winner",
    async () => {
      const response = await axios.get(
        "https://tools.texoit.com/backend-java/api/movies",
        {
          params: {
            projection: "years-with-multiple-winners",
          },
        }
      );

      return response?.data as {
        years: {
          year: number;
          winnerCount: number;
        }[];
      };
    }
  );

  return {
    data: data?.years,
    error,
    isLoading,
  };
}
