import { View, Text, Image } from "react-native";
import React from "react";
import styles from "./styles";
import { AntDesign } from "@expo/vector-icons";

export default function Index() {
  return (
    <View style={styles.coinContainer}>
      <Image
        // source={{
        //   uri: "https://e7.pngegg.com/pngimages/306/534/png-clipart-bitcoin-bitcoin.png",
        // }}
        source={require("../../assets/image/bitcoin-15510.png")}
        style={{ height: 80, width: 80 }}
      />
      <View>
        <Text style={styles.title}>Bitcoin</Text>
        <View style={{ flexDirection: "row" }}>
          <View style={styles.rankContainer}>
            <Text style={styles.rank}>1</Text>
          </View>
          <Text style={styles.text}>BTC</Text>
          <AntDesign
            name="caretdown"
            size={16}
            color="white"
            style={{ alignSelf: "center", marginRight: 5 }}
          />
          <Text style={styles.text}>102 %</Text>
        </View>
      </View>
    </View>
  );
}
