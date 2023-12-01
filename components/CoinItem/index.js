import { View, Text, Image } from "react-native";
import React from "react";
import styles from "./styles";
import { AntDesign } from "@expo/vector-icons";

export default function Index({ marketCoin }) {
  return (
    <View style={styles.coinContainer}>
      <Image
        // source={{
        //   uri: "https://e7.pngegg.com/pngimages/306/534/png-clipart-bitcoin-bitcoin.png",
        // }}
        source={require("../../assets/image/bitcoin-15510.png")}
        style={{ height: 60, width: 60 }}
      />
      <View>
        <Text style={styles.title}>{marketCoin.name}</Text>
        <View style={{ flexDirection: "row", minWidth: 150 }}>
          <View style={styles.rankContainer}>
            <Text style={styles.rank}>{marketCoin.market_cap_rank}</Text>
          </View>
          <Text style={styles.text}>{marketCoin.symbol}</Text>
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
