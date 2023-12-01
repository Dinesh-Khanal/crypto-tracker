import React from "react";
import { Button, StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import CoinItem from "../components/CoinItem";

export default function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <CoinItem />
      {/* <Button
        title="Go to detail"
        onPress={() => navigation.navigate("Detail")}
      /> */}
      <StatusBar style="light" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    backgroundColor: "#121212",
    justifyContent: "flex-start",
  },
});
