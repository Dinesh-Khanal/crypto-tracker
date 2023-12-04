import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  tickerContainer: {
    flexDirection: "row",
    gap: 5,
    alignItems: "center",
  },
  rankContainer: {
    padding: 3,
    backgroundColor: "#585858",
    borderRadius: 3,
  },
  cname: {
    color: "white",
    fontSize: 18,
  },
  cPrice: {
    color: "white",
    fontSize: 30,
    letterSpacing: 1,
  },
  priceChange: {
    flexDirection: "row",
    padding: 8,
    borderRadius: 8,
    backgroundColor: "grey",
    gap: 5,
  },
  input: {
    color: "white",
    height: 40,
    margin: 12,
    borderBottomWidth: 1,
    borderBottomColor: "white",
    padding: 10,
    fontSize: 16,
  },
});
export default styles;
