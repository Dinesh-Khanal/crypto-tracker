import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  title: {
    fontWeight: "bold",
    color: "white",
    fontSize: 24,
  },
  coinContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: "grey",
    gap: 12,
    paddingBottom: 12,
  },
  rankContainer: {
    backgroundColor: "#585858",
    paddingHorizontal: 5,
    borderRadius: 5,
    marginRight: 5,
  },
  rank: {
    fontWeight: "vold",
    color: "white",
  },
  text: {
    color: "white",
    marginRight: 5,
  },
});

export default styles;
