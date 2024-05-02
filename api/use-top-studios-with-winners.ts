import axios from "axios";
import useSWR from "swr";

export default function useTopStudiosWithWinners() {
  const { data, error, isLoading } = useSWR(
    "/dashboard/studios-with-win-count",
    async () => {
      const response = await axios.get(
        "https://tools.texoit.com/backend-java/api/movies",
        {
          params: {
            projection: "studios-with-win-count",
          },
        }
      );

      return response?.data as {
        studios: {
          name: string;
          winCount: number;
        }[];
      };
    }
  );

  return {
    data: data?.studios,
    error,
    isLoading,
  };
}
