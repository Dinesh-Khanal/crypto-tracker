import React from "react";
import { Button, Image, StyleSheet, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.lst}>
        <Image
          // source={{
          //   uri: "https://e7.pngegg.com/pngimages/306/534/png-clipart-bitcoin-bitcoin.png",
          // }}
          source={require("../assets/image/bitcoin-15510.png")}
          style={{ height: 80, width: 80 }}
        />
        <View>
          <Text style={styles.title}>Bitcoin</Text>
          <Text style={{ color: "#ccc" }}>1 BTC 102 % ^</Text>
        </View>
      </View>
      <Button
        title="Go to detail"
        onPress={() => navigation.navigate("Detail")}
      />
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
  title: {
    fontWeight: "bold",
    color: "white",
    fontSize: 24,
  },
  lst: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 12,
    paddingBottom: 12,
  },
});
