import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Feather from "react-native-vector-icons/Feather";
import { SharedElement } from "react-navigation-shared-element";
import { Card } from "../components";
import { PINK, SPACING, WHITE } from "../styles";
import * as Animatable from "react-native-animatable";

interface Props {}

const scale = {
  0: { transform: [{ scale: 0 }] },
  1: { transform: [{ scale: 1 }] },
};

const animation = {
  0: { transform: [{ translateX: 100 }], opacity: 0 },
  1: { transform: [{ translateX: 0 }], opacity: 1 },
};

export const MyCards = (props: Props) => {
  return (
    <View style={styles.view}>
      <SharedElement id={"background"} style={StyleSheet.absoluteFillObject}>
        <View
          style={[StyleSheet.absoluteFillObject, { backgroundColor: "black" }]}
        />
      </SharedElement>
      <View style={{ flexDirection: "row", marginVertical: SPACING }}>
        <Animatable.Text
          animation={animation}
          useNativeDriver
          delay={300}
          style={{ fontSize: 28, fontFamily: "Roboto_700Bold", color: "white" }}
        >
          My Cards
        </Animatable.Text>
        <Animatable.View
          animation={scale}
          delay={300}
          useNativeDriver
          style={styles.plus}
        >
          <Feather name={"plus"} size={28} color={"black"} />
        </Animatable.View>
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
