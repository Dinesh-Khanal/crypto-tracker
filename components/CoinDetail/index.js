import { View, Text, Image, TextInput } from "react-native";
import { Ionicons, EvilIcons, AntDesign } from "@expo/vector-icons";
import React, { useState, useEffect } from "react";
import styles from "./styles";
export default function Index({ coin }) {
  const {
    market_data: {
      market_cap_rank: rank,
      current_price: { usd: cprice },
      price_change_percentage_24h: changeP,
    },
    name,
  } = coin;
  const [coinVal, setCoinVal] = useState("1");
  const [usdVal, setUsdVal] = useState(cprice.toString());
  const coinToUsd = (value) => {
    setCoinVal(value);
    setUsdVal((parseFloat(value) * cprice).toString());
  };
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
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
        }}
      >
        <Text style={styles.cPrice}>{cprice} US$</Text>
        <View style={styles.priceChange}>
          <AntDesign
            name={changeP < 0 ? "caretdown" : "caretup"}
            size={16}
            color="white"
          />
          <Text style={{ color: "white", fontSize: 18 }}>
            {changeP.toFixed(2)}%
          </Text>
        </View>
      </View>
      <View style={{ flexDirection: "row", marginBottom: 8 }}>
        <View style={{ flexDirection: "row", flex: 1 }}>
          <Text style={{ color: "white", alignSelf: "center" }}>
            {coin.symbol.toUpperCase()}
          </Text>
          <TextInput
            style={styles.input}
            value={coinVal}
            keyboardType="numeric"
            onChangeText={coinToUsd}
          />
        </View>
        <View style={{ flexDirection: "row", flex: 1 }}>
          <Text style={{ color: "white", alignSelf: "center" }}>USD</Text>
          <TextInput
            style={styles.input}
            value={usdVal}
            keyboardType="numeric"
          />
        </View>
      </View>
    </>
  );
}
