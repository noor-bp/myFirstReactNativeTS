import { StyleSheet, Dimensions } from "react-native";

const Styles: any = StyleSheet.create({
  carContainer: {
    width: "100%",
    height: Dimensions.get("window").height + 80,
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
  btnContainer: {
    position: "absolute",
    bottom: 50,
    width: "100%",
  },
});

export default Styles;
