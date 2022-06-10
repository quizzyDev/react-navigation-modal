import React, { FC } from "react";
import { View, Text, StyleSheet } from "react-native";
import { getColour } from "../styles/colours";
import { getSpacing } from "../styles/spacings";

const Separator: FC = () => {
  return (
    <View style={styles.separatorContainerHack}>
      <View style={styles.separator} />
    </View>
  );
};

const styles = StyleSheet.create({
  separatorContainerHack: {
    overflow: "hidden",
    height: 1,
    width: "100%",
    marginVertical: getSpacing(4),
    paddingHorizontal: getSpacing(4),
  },
  separator: {
    borderWidth: 2,
    borderColor: getColour("Secondary"),
    height: 2,
    width: "100%",
    borderStyle: "dashed",
  },
});

export default Separator;
