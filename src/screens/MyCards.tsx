import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Feather from "react-native-vector-icons/Feather";
import { SharedElement } from "react-navigation-shared-element";
import { Card } from "../components";
import { PINK, SPACING, WHITE } from "../styles";
import * as Animatable from "react-native-animatable";

interface Props {}

export const MyCards = (props: Props) => {
  return (
    <View style={styles.view}>
      <SharedElement id={"background"} style={StyleSheet.absoluteFillObject}>
        <View
          style={[StyleSheet.absoluteFillObject, { backgroundColor: "black" }]}
        />
      </SharedElement>
      <View style={{ flexDirection: "row", marginVertical: SPACING }}>
        <Text
          style={{ fontSize: 28, fontFamily: "Roboto_700Bold", color: "white" }}
        >
          My Cards
        </Text>
        <View style={styles.plus}>
          <Feather name={"plus"} size={28} color={"black"} />
        </View>
      </View>
      <Card color={WHITE} number={"4353"} balance={"5432.20"} />
      <Card color={PINK} number={"6523"} balance={"4050.50"} />
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
    padding: SPACING * 2,
    paddingTop: SPACING * 4,
  },
  plus: {
    marginLeft: "auto",
    width: 48,
    height: 48,
    borderRadius: SPACING * 1.4,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
});
