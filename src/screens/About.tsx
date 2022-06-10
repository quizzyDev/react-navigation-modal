import React, { FC, useCallback } from "react";
import { NavigationProp, useNavigation } from "@react-navigation/native";

import BaseScreen from "~/components/BaseScreen";
import Header from "~/components/typography/Header";
import BodyText from "~/components/typography/BodyText";
import Spacer from "~/components/Spacer";
import Separator from "~/components/Separator";
import BaseButton from "~/components/buttons/BaseButton";
import { RootStackParamList } from "~/navigators/RootNavigator";
import SCREENS from "~/constants/screens";

const About: FC = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const openOtherModal = useCallback(() => {
    navigation.navigate(SCREENS.OTHER_MODAL);
  }, [navigation]);

  return (
    <BaseScreen>
      <Header>About Screen</Header>
      <Spacer />
      <BodyText>This is the About Screen.</BodyText>
      <Separator />
      <BaseButton onPress={openOtherModal} label="Open Other Modal" />
    </BaseScreen>
  );
};

export default About;
