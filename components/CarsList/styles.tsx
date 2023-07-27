import { Dimensions, StyleSheet } from "react-native";

const Styles: any = StyleSheet.create({
  container: {
    width: "100%",
    resizeMode: "cover",
    // height: "100%",
    // height: Dimensions.get("window").height,
  },
  carContainer: {
    width: "100%",
    // height: Dimensions.get("window").height,
    height: "100%",
  },
  titles: {
    marginTop: "30%",
    width: "100%",
    alignItems: "center",
    textAlign: "center",
  },
  title: {
    fontSize: 40,
    fontWeight: "500",
    textAlign: "center",
  },
  subTitle: {
    fontSize: 16,
    color: "#5c5e62",
  },
  subTitleCTA: {
    textDecorationLine: "underline",
    marginLeft: 5,
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    position: "absolute",
  },
});

export default Styles;
