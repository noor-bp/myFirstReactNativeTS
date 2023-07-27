import React from "react";
import styles from "./styles";
import { View, Text, ImageBackground, Pressable } from "react-native";
// import { ICartItemsProps } from "../../CartItems";

export interface IButtonProps {
  type: string;
  context: string;
  onPress: () => void;
}

const StyledButton: React.FC<IButtonProps> = ({ type, context, onPress }) => {
  const btnType = type;
  //   console.warn(type);

  const backgroundColor = btnType === "primary" ? "#171A20CC" : "#ffffffA6";
  const textColor = type === "primary" ? "#ffffff" : "#171A20";

  return (
    <>
      <View style={styles.container}>
        <Pressable
          style={[styles.button, { backgroundColor: backgroundColor }]}
          onPress={() => {
            onPress();
          }}
        >
          <Text style={[styles.text, { color: textColor }]}>{context} </Text>
        </Pressable>
      </View>
    </>
  );
};

export default StyledButton;
