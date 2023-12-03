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
  },
});
export default styles;
