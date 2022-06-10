import React, { FC } from "react";
import { View, StyleSheet } from "react-native";
import { getSpacing } from "../styles/spacings";

const Spacer: FC = () => {
  return <View style={styles.container} />;
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: getSpacing(4),
  },
});

export default Spacer;
