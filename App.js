import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View } from "react-native";

const Navbar = require("../React-Expo/src/components/Navbar").default;

export default function App() {
  return (
    <View style={styles.container}>
      <Navbar/>
      <StatusBar style="auto" />
    </View>
  );
}
 const styles = StyleSheet.create({
   container: {
     flex: 1,
     backgroundColor: "#fff",
     margin: 30,
   },
 });
