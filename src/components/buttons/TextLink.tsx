import React, { FC } from "react";
import { StyleSheet } from "react-native";
import BodyText, {
  SIZE as BodyTextSize,
} from "~/components/typography/BodyText";

interface Props {
  children: string;
  onPress: () => void;
  size?: BodyTextSize;
}

const TextLink: FC<Props> = ({ children, onPress, size = "m" }) => {
  return (
    <BodyText
      size={size}
      color="Primary"
      styleOverride={styles.textLink}
      onPress={onPress}
    >
      {children}
    </BodyText>
  );
};

const styles = StyleSheet.create({
  textLink: {
    textDecorationLine: "underline",
  },
});

export default TextLink;
