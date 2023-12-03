import { View, Text, Image } from "react-native";
import { Ionicons, EvilIcons } from "@expo/vector-icons";
import React from "react";
import styles from "./styles";
export default function Index({ coin }) {
  const {
    market_data: {
      market_cap_rank: rank,
      current_price: { usd: cprice },
    },
    name,
  } = coin;
  return (
    <>
      <View style={styles.headerContainer}>
        <Ionicons name="chevron-back-sharp" size={32} color="white" />
        <View style={styles.tickerContainer}>
          <Image
            source={require("../../assets/image/bitcoin-15510.png")}
            style={{ height: 40, width: 40 }}
          />
          <Text style={{ color: "white" }}>{coin.symbol.toUpperCase()}</Text>
          <View style={styles.rankContainer}>
            <Text style={{ color: "white" }}>#{rank}</Text>
          </View>
        </View>
        <EvilIcons name="user" size={36} color="white" />
      </View>
      <Text style={styles.cname}>{name}</Text>
      <Text style={styles.cPrice}>{cprice} US$</Text>
    </>
  );
}
