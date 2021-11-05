/** @format */
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Image,
} from "react-native";
import tw from "tailwind-react-native-classnames";
import { Icon } from "react-native-elements";

const data = [
  {
    id: 123,
    title: "get a ride",
    image: "https://i.dlpng.com/static/png/6453338_preview.png",
    screen: "MapScreen",
  },
  {
    id: 456,
    title: "order a meal",
    image:
      "https://cdna.artstation.com/p/assets/images/images/016/982/318/large/fayaza-zackydeen-sea-food-logo.jpg?1554211324",
    screen: "EatScreen",
  },
];

const NavOptions = ({ navigation }) => {
  return (
    <FlatList
      data={data}
      horizontal
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <TouchableOpacity
          style={tw`p-1 pl-4 pb-8 pt-4 bg-gray-200 m-1 w-40`}
          onPress={() => navigation.navigate(item.screen)}
        >
          <View>
            <Image
              style={{ height: 100, width: 100, resizeMode: "contain" }}
              source={{ uri: item.image }}
            />
            <Text style={tw`text-lg font-semibold`}>{item.title}</Text>
            <Icon
              style={tw`p-2 bg-black rounded-full w-10 mt-2`}
              type="antdesign"
              name="arrowright"
              color="white"
            />
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

export default NavOptions;

const styles = StyleSheet.create({});
