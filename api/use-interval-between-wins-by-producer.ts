import axios from "axios";
import useSWR from "swr";

export default function useIntervalBetweenWinsByProducer() {
  const { data, error, isLoading } = useSWR(
    "/dashboard/years-with-multiple-winner",
    async () => {
      const response = await axios.get(
        "https://tools.texoit.com/backend-java/api/movies",
        {
          params: {
            projection: "max-min-win-interval-for-producers",
          },
        }
      );

      return response?.data as {
        min: {
          producer: string;
          interval: number;
          previousWin: number;
          followingWin: number;
        }[];
        max: {
          producer: string;
          interval: number;
          previousWin: number;
          followingWin: number;
        }[];
      };
    }
  );

  const min = {
    producer: data?.min?.[0]?.producer,
    interval: data?.min?.[0]?.interval,
    previousWinYear: data?.min?.[0]?.previousWin,
    followingWinYear: data?.min?.[0]?.followingWin,
  };
  const max = {
    producer: data?.max?.[0]?.producer,
    interval: data?.max?.[0]?.interval,
    previousWinYear: data?.max?.[0]?.previousWin,
    followingWinYear: data?.max?.[0]?.followingWin,
  };

  return {
    data: { min, max },
    error,
    isLoading,
  };
}
