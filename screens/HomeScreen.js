/** @format */
import React from "react";
import { StyleSheet, Text, View, SafeAreaView, Image } from "react-native";
import NavOptions from "../components/NavOptions";
import tw from "tailwind-react-native-classnames";
import { useNavigation } from "@react-navigation/native";

export default function HomeScreen() {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={tw`h-full bg-white`}>
      <View style={tw`p-5`}>
        <Image
          style={{
            height: 100,
            width: 100,
            resizeMode: "contain",
          }}
          source={{
            uri: "https://lh3.googleusercontent.com/proxy/PeW1VWmpn15WCoQKlOKvAzHx05Fulg_KqMxBEvEyXJD4LNmjaV-mp3AWYMVE9PlwKHQmmObF4ahOySlOcla6mopFTvsUpab_6cLrKeyx1IOcBf2LX1A",
          }}
        />
        <NavOptions navigation={navigation} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
