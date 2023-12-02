import { View, Text, Image } from "react-native";
import React from "react";
import styles from "./styles";
import { AntDesign } from "@expo/vector-icons";

export default function Index({ marketCoin }) {
  const normalizeMarketCap = (marketCap) => {
    if (marketCap > 1_000_000_000_000) {
      return `${Math.floor(marketCap / 1_000_000_000_000)} T`;
    }
    if (marketCap > 1_000_000_000) {
      return `${Math.floor(marketCap / 1_000_000_000)} B`;
    }
    if (marketCap > 1_000_000) {
      return `${Math.floor(marketCap / 1_000_000)} M`;
    }
    if (marketCap > 1_000) {
      return `${Math.floor(marketCap / 1_000)} K`;
    }
    return marketCap;
  };
  return (
    <View style={styles.coinContainer}>
      <Image
        // source={{
        //   uri: "https://e7.pngegg.com/pngimages/306/534/png-clipart-bitcoin-bitcoin.png",
        // }}
        source={require("../../assets/image/bitcoin-15510.png")}
        style={{ height: 50, width: 50, marginRight: 6 }}
      />
      <View>
        <Text style={styles.title}>{marketCoin.name}</Text>
        <View style={{ flexDirection: "row" }}>
          <View style={styles.rankContainer}>
            <Text style={styles.rank}>{marketCoin.market_cap_rank}</Text>
          </View>
          <Text style={styles.symbol}>{marketCoin.symbol}</Text>
          <AntDesign
            name={
              marketCoin.price_change_percentage_24h < 0
                ? "caretdown"
                : "caretup"
            }
            size={16}
            color="white"
            style={{ alignSelf: "center", marginRight: 5 }}
          />
          <Text style={styles.text}>
            {marketCoin.price_change_percentage_24h.toFixed(2)}%
          </Text>
        </View>
      </View>
      <View style={{ marginLeft: "auto", alignItems: "flex-end" }}>
        <Text style={styles.title}>{marketCoin.current_price}</Text>
        <Text style={styles.text}>{`MCap ${normalizeMarketCap(
          marketCoin.market_cap
        )}`}</Text>
      </View>
    </View>
  );
}
