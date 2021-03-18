import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { SPACING, WHITE, width } from "../styles";

interface Props {
  color: string;
  number: string;
  balance: string;
}

export const Card = (props: Props) => {
  return (
    <View style={[styles.view, { backgroundColor: props.color }]}>
      <View style={styles.meta}>
        <Text style={{ fontSize: 28, fontFamily: "Roboto_500Medium" }}>
          {`$ ${props.balance}`}
        </Text>
        <Text style={{ marginLeft: "auto", fontSize: 28 }}>•••</Text>
      </View>
      <Text
        style={{
          fontSize: 16,
          fontFamily: "Roboto_400Regular",
          marginVertical: SPACING / 2,
        }}
      >
        Balance
      </Text>
      <View
        style={{
          flexDirection: "row",
          marginVertical: SPACING / 2,
        }}
      >
        <Text style={[styles.number, { marginLeft: 0 }]}>****</Text>
        <Text style={styles.number}>****</Text>
        <Text style={styles.number}>****</Text>
        <Text style={styles.number}>{`${props.number}`}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    alignSelf: "center",
    width: width * 0.9,
    height: width * 0.55,
    borderRadius: SPACING * 1.2,
    padding: SPACING * 2,
    paddingHorizontal: SPACING * 3,
    backgroundColor: WHITE,
    marginVertical: SPACING,
  },
  meta: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: "auto",
  },
  number: {
    fontSize: 19,
    fontFamily: "Roboto_400Regular",
    marginLeft: "auto",
  },
});
