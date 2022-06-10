import React, { FC } from "react";
import { StyleSheet, Pressable, Text } from "react-native";

type Position = "top-right" | "auto";

interface Props {
  onClose: () => void;
  position?: Position;
}

const CloseButton: FC<Props> = ({ onClose, position = "top-right" }) => {
  return (
    <Pressable
      onPress={onClose}
      style={[styles.button, position === "top-right" ? styles.topRight : {}]}
    >
      <Text>x</Text>
    </Pressable>
  );
};

const SIZE = 32;

const styles = StyleSheet.create({
  button: {
    backgroundColor: "white",
    width: SIZE,
    height: SIZE,
    borderRadius: SIZE / 2,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "black",
    shadowOpacity: 0.1,
    shadowOffset: { width: 1, height: 2 },
    zIndex: 1000,
  },
  topRight: {
    position: "absolute",
    top: 8,
    right: 8,
  },
});

export default CloseButton;
