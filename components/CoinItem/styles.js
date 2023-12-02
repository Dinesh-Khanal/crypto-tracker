import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  title: {
    fontWeight: "400",
    color: "white",
    fontSize: 18,
  },
  coinContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: "grey",
    paddingVertical: 16,
  },
  rankContainer: {
    backgroundColor: "#585858",
    paddingHorizontal: 5,
    borderRadius: 5,
    marginRight: 5,
  },
  rank: {
    fontWeight: "bold",
    color: "white",
  },
  text: {
    color: "#88c",
    marginRight: 5,
  },
  symbol: {
    color: "#88c",
    marginRight: 5,
    textTransform: "uppercase",
  },
});

export default styles;
