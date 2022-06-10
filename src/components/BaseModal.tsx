import React, { FC, useCallback, useState } from "react";
import { View, StyleSheet, Pressable } from "react-native";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import Animated, {
  FadeIn,
  FadeOut,
  runOnJS,
  SlideInDown,
  SlideOutDown,
} from "react-native-reanimated";

import CloseButton from "~/components/buttons/CloseButton";
import { RootStackParamList } from "~/navigators/RootNavigator";

const BaseModal: FC = ({ children }) => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const [canEnter, setCanEnter] = useState(true);

  const closeModal = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  const prepareCloseModal = () => {
    setCanEnter(false);
  };

  const onAnimationEndCB = useCallback((finished: boolean) => {
    "worklet";
    if (finished) {
      runOnJS(closeModal)();
    }
  }, []);

  return (
    <>
      <Pressable onPress={prepareCloseModal} style={StyleSheet.absoluteFill}>
        {canEnter && (
          <Animated.View
            style={StyleSheet.absoluteFill}
            entering={FadeIn.duration(300)}
            exiting={FadeOut.delay(300)
              .duration(300)
              .withCallback(onAnimationEndCB)}
          >
            <View style={styles.bg} />
          </Animated.View>
        )}
      </Pressable>
      <View style={styles.container} pointerEvents="box-none">
        {canEnter && (
          <Animated.View
            style={styles.content}
            entering={SlideInDown.delay(200)}
            exiting={SlideOutDown.duration(300)}
          >
            <CloseButton onClose={prepareCloseModal} />
            {children}
          </Animated.View>
        )}
      </View>
    </>
  );
};

const CONTENT_SIZE = "85%";

const styles = StyleSheet.create({
  bg: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "black",
    opacity: 0.5,
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  content: {
    width: CONTENT_SIZE,
    height: CONTENT_SIZE,
    backgroundColor: "white",
    borderRadius: 8,
    padding: 8,
  },
});

export default BaseModal;
