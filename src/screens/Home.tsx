import { NavigationProp, useNavigation } from "@react-navigation/native";
import React, { FC, useCallback } from "react";
import { Text } from "react-native";

import SCREENS from "~/constants/screens";
import BaseScreen from "~/components/BaseScreen";
import BaseButton from "~/components/buttons/BaseButton";
import { RootStackParamList } from "~/navigators/RootNavigator";
import Header from "~/components/typography/Header";
import BodyText from "~/components/typography/BodyText";
import TextLink from "~/components/buttons/TextLink";
import Separator from "~/components/Separator";
import Spacer from "~/components/Spacer";

const HomeScreen: FC = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const openRandomModal = useCallback(() => {
    navigation.navigate(SCREENS.RANDOM_MODAL);
  }, [navigation]);

  const goToAbout = useCallback(() => {
    navigation.navigate(SCREENS.ABOUT);
  }, [navigation]);

  return (
    <BaseScreen>
      <Header size="h1">Home Screen</Header>
      <Spacer />
      <Text>
        <BodyText>To learn more about this App, go to</BodyText>
        <Text> </Text>
        <TextLink onPress={goToAbout}>About</TextLink>
      </Text>
      <Separator />
      <BodyText>Otherwise, open this Modal:</BodyText>
      <BaseButton onPress={openRandomModal} label={SCREENS.RANDOM_MODAL} />
    </BaseScreen>
  );
};

export default HomeScreen;
