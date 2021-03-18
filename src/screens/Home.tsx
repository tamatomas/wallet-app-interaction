import React, { useEffect, useRef } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { NextButton } from "../components";
import { height, PINK, SPACING, width } from "../styles";
import * as Animatable from "react-native-animatable";
import { SharedElement } from "react-navigation-shared-element";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { NavigationProp } from "@react-navigation/core";
import { StackParams } from "../navigation";

interface Props {
  navigation: NavigationProp<StackParams, "Home">;
}

const AnimatablePressable = Animatable.createAnimatableComponent(Pressable);
const AnimatableMaterialIcons = Animatable.createAnimatableComponent(
  MaterialIcons
);

const animation = {
  0: { opacity: 0, transform: [{ translateY: 100 }] },
  1: { opacity: 1, transform: [{ translateY: 0 }] },
};

const titleanimation = {
  0: { opacity: 0, transform: [{ translateX: -100 }] },
  1: { opacity: 1, transform: [{ translateX: 0 }] },
};

const overlayAnimation = {
  0: { transform: [{ translateX: 100 }] },
  0.8: { transform: [{ translateX: -10 }] },
  1: { transform: [{ translateX: 0 }] },
};

export const Home = (props: Props) => {
  const ref = useRef<typeof AnimatablePressable>(null);
  useEffect(() => {
    return () => ref.current!.transition(overlayAnimation[1], overlayAnimation[0]);
  }, []);
  return (
    <View style={styles.view}>
      <View style={styles.logo}>
        <Text style={{ color: "white", fontSize: 17, fontWeight: "700" }}>
          RC
        </Text>
      </View>
      <Animatable.Text
        useNativeDriver
        animation={animation}
        delay={100}
        style={{
          fontSize: 20,
          fontFamily: "Roboto_700Bold",
          textTransform: "uppercase",
          marginVertical: SPACING * 4,
          width: width / 2,
        }}
      >
        welcome back josef
      </Animatable.Text>
      <Animatable.Text
        useNativeDriver
        animation={animation}
        delay={100 * 2}
        style={{ fontSize: 14, fontFamily: "Roboto_400Regular" }}
      >
        Your latest payment was
      </Animatable.Text>
      <Animatable.Text
        useNativeDriver
        animation={animation}
        delay={100 * 3}
        style={{ fontSize: 17, fontFamily: "Roboto_500Medium" }}
      >
        BIG Trade - $12.5 / 2 Points
      </Animatable.Text>
      <Animatable.Text
        useNativeDriver
        animation={animation}
        delay={100 * 4}
        style={{
          fontSize: 22,
          marginTop: "auto",
          fontFamily: "Roboto_400Regular",
        }}
      >
        Points
      </Animatable.Text>
      <Animatable.Text
        useNativeDriver
        animation={animation}
        delay={100 * 5}
        style={{ fontFamily: "Roboto_900Black", fontSize: 26 }}
      >
        29
      </Animatable.Text>
      <Animatable.View
        useNativeDriver
        animation={animation}
        delay={100 * 6}
        style={{
          width: width / 2,
          height: 1,
          backgroundColor: "#c7c7c7",
          marginVertical: SPACING,
        }}
      />
      <Animatable.Text
        useNativeDriver
        animation={animation}
        delay={100 * 7}
        style={{
          fontSize: 22,
          fontFamily: "Roboto_400Regular",
        }}
      >
        Wallet Balance
      </Animatable.Text>
      <Animatable.Text
        useNativeDriver
        animation={animation}
        delay={100 * 8}
        style={{
          fontFamily: "Roboto_900Black",
          fontSize: 26,
          marginBottom: SPACING * 8,
        }}
      >
        $865.5
      </Animatable.Text>
      <NextButton name={"MyCards"} index={9} />
      <AnimatablePressable
        style={styles.overlay}
        useNativeDriver
        animation={overlayAnimation}
        ref={ref}
        onPress={() => props.navigation.navigate("MyCards")}
      >
        <SharedElement id={"background"} style={StyleSheet.absoluteFillObject}>
          <View
            style={[
              StyleSheet.absoluteFillObject,
              { backgroundColor: "black" },
            ]}
          />
        </SharedElement>
        <View
          style={{
            transform: [{ rotate: "-90deg" }],
            flexDirection: "row",
            marginTop: height * 0.45,
            alignItems: "center",
          }}
        >
          <Animatable.Text
            animation={titleanimation}
            useNativeDriver
            delay={200}
            style={{ color: "white", fontSize: 16 }}
          >
            My Cards
          </Animatable.Text>
          <AnimatableMaterialIcons
            animation={titleanimation}
            useNativeDriver
            name={"arrow-forward-ios"}
            color={"white"}
            size={18}
            style={{ margin: 6, marginTop: 8 }}
          />
        </View>
      </AnimatablePressable>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    padding: SPACING * 2,
    flex: 1,
  },
  logo: {
    width: 54,
    height: 54,
    borderRadius: SPACING,
    backgroundColor: PINK,
    alignItems: "center",
    justifyContent: "center",
    marginTop: SPACING * 2,
  },
  overlay: {
    position: "absolute",
    right: -10,
    height: height,
    width: width * 0.2,
  },
});
