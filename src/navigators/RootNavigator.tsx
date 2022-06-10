import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import SCREENS from "~/constants/screens";
import Home from "~/screens/Home";
import About from "~/screens/About";
import RandomModal from "~/modals/RandomModal";
import OtherModal from "~/modals/OtherModal";

export type RootStackParamList = {
  [SCREENS.HOME]: undefined;
  [SCREENS.ABOUT]: undefined;
  [SCREENS.RANDOM_MODAL]: undefined;
  [SCREENS.OTHER_MODAL]: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function RootNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={SCREENS.HOME}>
        <Stack.Group>
          <Stack.Screen name={SCREENS.HOME} component={Home} />
          <Stack.Screen name={SCREENS.ABOUT} component={About} />
        </Stack.Group>
        <Stack.Group
          screenOptions={{
            presentation: "transparentModal",
            headerShown: false,
            animation: "none",
          }}
        >
          <Stack.Screen name={SCREENS.RANDOM_MODAL} component={RandomModal} />
          <Stack.Screen name={SCREENS.OTHER_MODAL} component={OtherModal} />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
