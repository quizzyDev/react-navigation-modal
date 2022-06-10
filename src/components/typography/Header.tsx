import React, { FC, useMemo } from "react";
import { Text, StyleSheet } from "react-native";
import { Colours, getColour } from "~/styles/colours";
import { getSpacing } from "~/styles/spacings";

type Size = "h1" | "h2" | "h3" | "h4";

interface Props {
  size?: Size;
  children: string;
  color?: keyof typeof Colours;
}

const Header: FC<Props> = ({ size = "h1", children, color = "Primary" }) => {
  const textStyle = useMemo(() => {
    return [
      styles.headerStyle,
      styles[size],
      color && { color: getColour(color) },
    ];
  }, [size]);

  return <Text style={textStyle}>{children}</Text>;
};

const BASE_SIZE = 28;

const styles = StyleSheet.create({
  headerStyle: {
    fontWeight: "bold",
  },
  h1: {
    fontSize: BASE_SIZE,
  },
  h2: {
    fontSize: BASE_SIZE - getSpacing(1),
  },
  h3: {
    fontSize: BASE_SIZE - getSpacing(2),
  },
  h4: {
    fontSize: BASE_SIZE - getSpacing(3),
  },
});

export default Header;
