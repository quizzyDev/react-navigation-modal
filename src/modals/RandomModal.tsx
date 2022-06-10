import React, { FC, useCallback } from "react";
import { NavigationProp, useNavigation } from "@react-navigation/native";

import Header from "~/components/typography/Header";
import BodyText from "~/components/typography/BodyText";
import BaseButton from "~/components/buttons/BaseButton";
import SCREENS from "~/constants/screens";
import { RootStackParamList } from "~/navigators/RootNavigator";
import BaseModal from "~/components/BaseModal";

const RandomModal: FC = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const goToOtherModal = useCallback(() => {
    navigation.navigate(SCREENS.OTHER_MODAL);
  }, [navigation]);

  return (
    <BaseModal>
      <Header>Random Modal</Header>
      <BodyText>
        This Modal is for testing out the React Navigation modal capabilities...
      </BodyText>
      <BaseButton onPress={goToOtherModal} label="Open Other Modal" />
    </BaseModal>
  );
};

export default RandomModal;
