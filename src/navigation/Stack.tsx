import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createSharedElementStackNavigator } from "react-navigation-shared-element";
import { StackParams } from "./StackParams";
import { Home, Main, MyCards } from "../screens";

const Stack = createSharedElementStackNavigator<StackParams>();

interface Props {}

export const Navigation = (props: Props) => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Main" headerMode={"none"}>
        <Stack.Screen name="Main" component={Main} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen
          name="MyCards"
          component={MyCards}
          sharedElementsConfig={() => ["background"]}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
