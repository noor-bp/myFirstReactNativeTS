import React from "react";
import styles from "./styles";
import { View, Text, ImageBackground, FlatList } from "react-native";
import StyledButton from "../StyledComponents/StyledButton";
// import { ICartItemsProps } from "../../App";

// export interface IButtonProps {
//   type: string;
// }

// const ButtonType: IButtonProps = {
//   type: "primary",
// };

export interface ICartItemProps {
  // type: string;
  data: {
    title: string;
    subTitle: string;
    subTitleCTA: string;
    image: any;
  };
}

const CarItem: React.FC<ICartItemProps> = (props: ICartItemProps) => {
  //   console.warn(props.data);

  const { image, title, subTitle, subTitleCTA } = props.data;

  return (
    <>
      <View style={styles.carContainer}>
        <ImageBackground
          // source={require("../../assets/images/ModelX.jpeg")}
          source={image}
          style={styles.image}
        />

        <View style={styles.titles}>
          <View>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.subTitle}>
              {subTitle}&nbsp;
              <Text style={styles.subTitleCTA}>{subTitleCTA}</Text>
            </Text>
          </View>
        </View>

        <View style={styles.btnContainer}>
          <StyledButton
            type={"primary"}
            context="Custom Order"
            onPress={() => {
              console.warn("Custom Order");
            }}
          />

          <StyledButton
            type={"secondary"}
            context="Existing inventory"
            onPress={() => {
              console.warn("Existing inventory");
            }}
          />
        </View>
      </View>
    </>
  );
};

export default CarItem;
