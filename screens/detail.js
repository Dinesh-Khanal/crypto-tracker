import React from "react";
import { StyleSheet, Text, Button } from "react-native";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";

export default function DetailScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={{ color: "white" }}>Crypto details</Text>
      <Button title="Go to home" onPress={() => navigation.goBack()} />
      <StatusBar style="light" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    flex: 1,
    backgroundColor: "#121212",
    justifyContent: "flex-start",
    alignItems: "center",
  },
});
