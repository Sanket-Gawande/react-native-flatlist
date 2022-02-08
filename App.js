import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, FlatList, Image } from "react-native";

import movies from "./data/movies.json";
const moviesSource = movies.map((obj) => {
  return { ...obj, key: Math.random().toString() };
});

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar/>
      <Text style={styles.heading}>Parlour-k21 </Text>
      <Text style={styles.text}>Welcome to video parlour</Text>
      <FlatList
        inverted
        horizontal
        style={styles.flex}
        data={moviesSource}
        renderItem={({ item }) => {
          return (
            <View style={styles.card}>
              <Image
                source={{ uri: item.info.image_url }}
                style={styles.thumbnail}
              />
              <Text style={styles.heading_sm}>{item.title}</Text>
              <Text style={styles.text}>
                {item.info.plot.substring(0, 145) + "..."}
              </Text>
            </View>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 100,
    backgroundColor: "#eee",
    minHeight: "100vh",
  },
  heading: {
    fontSize: 40,
    color: "tomato",
    fontWeight: "700",
  },
  heading_sm: {
    fontSize: 20,
    color: "tomato",
    fontWeight: "bold",
    marginVertical: 15,
  },
  text: {
    fontSize: 15,
    color: "#555",
  },
  flex: {
    textAlign: "center",
    marginTop: 20,
  },
  card: {
    backgroundColor: "#fff",
    margin: 15,
    padding: 15,
    width: "280px",

    // boxShadow : "0 0 5px rgba(0,0,0,.2)",
    // cursor : "pointer"
  },
  thumbnail: {
    width: "95%",
    height: "280px",
    // objectFit : "cover",
    // display : "block",
    // margin : "auto",
    backgroundColor: "gray",
  },
});
