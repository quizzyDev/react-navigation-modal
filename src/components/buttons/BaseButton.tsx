import React, { FC } from "react";
import { Text, StyleSheet, TouchableOpacity, View } from "react-native";
import { getColour } from "~/styles/colours";
import { getSpacing } from "~/styles/spacings";

interface Props {
  onPress: () => void;
  label: string;
}

const BaseButton: FC<Props> = ({ label, onPress }) => {
  return (
    <View>
      <TouchableOpacity style={styles.container} onPress={onPress}>
        <Text>{label}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: getSpacing(2),
    paddingHorizontal: getSpacing(4),
    borderRadius: getSpacing(2),
    marginVertical: getSpacing(2),
    backgroundColor: getColour("PrimaryCTA"),
    alignItems: "center",
    alignSelf: "flex-start",
    shadowColor: getColour("Black"),
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
  },
  textStyle: {
    color: getColour("Black"),
    textTransform: "uppercase",
  },
});

export default BaseButton;
