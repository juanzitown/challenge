import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import useMovies from "../../api/use-movies";

type DashboardScreenProps = {};

export default function DashboardScreen(props: DashboardScreenProps) {
  const { data, error, isLoading } = useMovies();

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text>Dashboard!!</Text>
      {Boolean(error) && (
        <>
          <Text>Error fetching data:</Text>
          <Text>{JSON.stringify(error, null, 2)}</Text>
        </>
      )}
      {isLoading && <Text>Loading...</Text>}
      {Boolean(data) && <Text>{JSON.stringify(data, null, 2)}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
