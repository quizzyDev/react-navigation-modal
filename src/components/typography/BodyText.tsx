import React, { FC, useMemo } from "react";
import { Text, StyleSheet, StyleProp, TextStyle } from "react-native";
import { Colours, getColour } from "~/styles/colours";
import { getSpacing } from "~/styles/spacings";

export type SIZE = "s" | "m" | "l";

interface Props {
  size?: SIZE;
  children: string;
  color?: keyof typeof Colours;
  styleOverride?: StyleProp<TextStyle>;
  onPress?: () => void;
}

const BodyText: FC<Props> = ({
  children,
  size = "m",
  color = "Black",
  styleOverride,
  onPress,
}) => {
  const textStyle = useMemo(() => {
    return [
      styles.textStyle,
      styles[size],
      color && { color: getColour(color) },
      styleOverride,
    ];
  }, [size, color]);

  return (
    <Text style={textStyle} onPress={onPress}>
      {children}
    </Text>
  );
};

const BASE_SIZE = 12;

const styles = StyleSheet.create({
  textStyle: {
    fontFamily: "Avenir",
  },
  s: {
    fontSize: BASE_SIZE,
  },
  m: {
    fontSize: BASE_SIZE + getSpacing(1),
  },
  l: {
    fontSize: BASE_SIZE + getSpacing(2),
  },
});

export default BodyText;
