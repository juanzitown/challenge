import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import useMovies from "../../api/use-movies";

type HomeScreenProps = {};

export default function HomeScreen(props: HomeScreenProps) {
  const { data, error, isLoading } = useMovies();

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text>HOME PAGE!!</Text>
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
