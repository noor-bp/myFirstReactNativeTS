// import React from "react";
// import styles from "./styles";
// import { View, Text, ImageBackground, FlatList } from "react-native";
// import StyledButton from "../StyledComponents/StyledButton";
// import { cars } from "../CarsList/cars";
// // import { ICartItemsProps } from "../../App";

// // export interface IButtonProps {
// //   type: string;
// // }

// // const ButtonType: IButtonProps = {
// //   type: "primary",
// // };

// export interface ICartItemsProps {
//   // type: string;
//   data: {
//     title: string;
//     subTitle: string;
//     subTitleCTA: string;
//     image: any;
//   }[];
// }
// // const CarItems: React.FC<{ dataArr: ICartItemsProps[] }> = (props) => {

// const CarItems: React.FC<ICartItemsProps> = (props: ICartItemsProps) => {
//   console.warn(props.data);

//   return (
//     <>
//       <View style={styles.carContainer}>
//         {/* {props.data.flatMap((item, index) => {
//           return (
//             <>
//               <ImageBackground
//                 // source={require("../../assets/images/ModelX.jpeg")}
//                 source={item.image}
//                 style={styles.image}
//               />
//               <View style={styles.titles}>
//                 <View key={index}>
//                   <Text style={styles.title}>{item.title}</Text>
//                   <Text style={styles.subTitle}>
//                     {item.subTitle}&nbsp;
//                     <Text style={styles.subTitleCTA}>{item.subTitleCTA}</Text>
//                   </Text>
//                 </View>
//               </View>
//             </>
//           );
//         })} */}

//         <View>
//           <FlatList
//             data={cars}
//             renderItem={({ item }) => (
//               <>
//                 <ImageBackground
//                   // source={require("../../assets/images/ModelX.jpeg")}
//                   source={item.image}
//                   style={styles.image}
//                 />
//                 <View style={styles.titles}>
//                   <View key={item.title}>
//                     <Text style={styles.title}>{item.title}</Text>
//                     <Text style={styles.subTitle}>
//                       {item.subTitle}&nbsp;
//                       <Text style={styles.subTitleCTA}>{item.subTitleCTA}</Text>
//                     </Text>
//                   </View>
//                 </View>
//               </>
//             )}
//           />
//         </View>

//         <View style={styles.btnContainer}>
//           <StyledButton
//             type={"primary"}
//             context="Custom Order"
//             onPress={() => {
//               console.warn("Custom Order");
//             }}
//           />

//           <StyledButton
//             type={"secondary"}
//             context="Existing inventory"
//             onPress={() => {
//               console.warn("Existing inventory");
//             }}
//           />
//         </View>
//       </View>
//     </>
//   );
// };

// export default CarItems;
