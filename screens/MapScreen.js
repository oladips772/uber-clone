import React from 'react'
import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import tw from "tailwind-react-native-classnames";
import { KEY } from "./env"

const MapScreen = () => {
    return (
      <SafeAreaView style={tw`h-full bg-white`}>
        <View>
          <Text>mappscreen</Text>
        </View>
      </SafeAreaView>
    );
}

export default MapScreen

const styles = StyleSheet.create({

})
