import { useNavigation } from "@react-navigation/core";
import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { SPACING } from "../styles";
import * as Animatable from "react-native-animatable";

const AnimatablePressable = Animatable.createAnimatableComponent(Pressable);

interface Props {
  name: string;
  index?: number;
}

const animation = {
  0: {
    transform: [
      { translateX: -SPACING * 5 },
      { translateY: SPACING * 5 },
      { scale: 1.6 },
    ],
  },
  0.8: {
    transform: [
      { translateX: SPACING },
      { translateY: -SPACING },
      { scale: 1.3 },
    ],
  },
  1: {
    transform: [{ translateX: 0 }, { translateY: 0 }, { scale: 1 }],
  },
};

export const NextButton = (props: Props) => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        position: "absolute",
        bottom: SPACING * 2,
        left: SPACING * 2,
        overflow: "hidden",
        width: 54 * 2,
        height: 54 * 2,
      }}
    >
      <AnimatablePressable
        animation={animation}
        useNativeDriver
        delay={props.index && props.index * 100}
        onPress={() => navigation.navigate(props.name)}
        style={styles.view}
      >
        <MaterialIcons name={"arrow-forward-ios"} size={24} color={"white"} />
      </AnimatablePressable>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    position: "absolute",
    width: 54,
    height: 54,
    bottom: 0,
    left: 0,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: SPACING / 2,
    borderTopRightRadius: 54 * 0.6,
  },
});
