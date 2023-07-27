import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
// import CarItems from "./components/CartItems";
import CarsList from "./components/CarsList";
import Header from './components/Header';

const data = [
  {
    title: "Model S3",
    subTitle: "Order Online For",
    // subTitle: "Starting at $69,420",
    subTitleCTA: "Touchless Delivery",
  },
];

export default function App() {
  return (
    <View style={styles.container}>
      {/* <CarItems data={data} /> */}
      <Header />
      <CarsList />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
