import React from "react";
import styles from "./styles";
import { View, Text, FlatList, Dimensions } from "react-native";
import cars from "./cars";
import CarItem from "../CartItems/CarItem";

const CarsList: React.FC = (props) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={cars}
        renderItem={({ item }) => <CarItem data={item} />}
        snapToAlignment={"start"}
        decelerationRate={"fast"}
        snapToInterval={Dimensions.get("window").height + 80}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default CarsList;
