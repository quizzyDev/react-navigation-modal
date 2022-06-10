import React, { FC } from "react";
import { View, StyleSheet } from "react-native";
import { getSpacing } from "~/styles/spacings";

const BaseScreen: FC = ({ children }) => {
  return <View style={styles.container}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: getSpacing(2),
    paddingTop: getSpacing(2),
    alignItems: "center",
  },
});

export default BaseScreen;
