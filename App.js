/** @format */
import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import { Provider } from "react-redux";
import HomeScreen from "./screens/HomeScreen";
import { store } from "./store";

export default function App() {
  return (
    <Provider store={store}>
        <HomeScreen />
        <StatusBar style="auto" />
    </Provider> 
  );
}

const styles = StyleSheet.create({

});
