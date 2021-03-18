import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { NextButton } from "../components";
import { height, SPACING, width } from "../styles";

interface Props {}

export const Main = (props: Props) => {
  return (
    <View style={styles.view}>
      <Image
        style={[StyleSheet.absoluteFillObject, styles.image]}
        source={require("../../assets/background.png")}
      />
      <View
        style={{
          overflow: "hidden",
          width: 54,
          height: 54,
          marginTop: 54,
        }}
      >
        <View style={styles.halfcircle} />
      </View>
      <View style={styles.meta}>
        <Text style={styles.text}>
          {"Feel "}
          <Text style={[styles.text, { fontFamily: "Roboto_500Medium" }]}>
            Special Now
          </Text>
        </Text>
        <Text style={styles.text}>More Often</Text>
      </View>
      <NextButton name={"Home"} index={1} />
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
    padding: SPACING * 2,
    backgroundColor: "#f8f1e7",
  },
  image: {
    width: width * 2,
    height: width,
    top: width / 2,
    left: -width / 2,
  },
  halfcircle: {
    width: 54,
    height: 54,
    borderRadius: 54 / 2,
    backgroundColor: "black",
    position: "absolute",
    left: -54 / 2,
  },
  text: {
    fontSize: 28,
    fontFamily: "Roboto_400Regular",
  },
  meta: {
    position: "absolute",
    bottom: SPACING * 10,
    left: SPACING * 2,
  },
});
