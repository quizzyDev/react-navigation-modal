import React, { FC, useCallback } from "react";
import { NavigationProp, useNavigation } from "@react-navigation/native";

import Header from "~/components/typography/Header";
import BodyText from "~/components/typography/BodyText";
import BaseButton from "~/components/buttons/BaseButton";
import SCREENS from "~/constants/screens";
import { RootStackParamList } from "~/navigators/RootNavigator";
import BaseModal from "~/components/BaseModal";

const OtherModal: FC = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const goToOtherModal = useCallback(() => {
    navigation.navigate(SCREENS.OTHER_MODAL);
  }, [navigation]);

  return (
    <BaseModal>
      <Header>Other Modal</Header>
      <BodyText>Some other Modal stuff</BodyText>
    </BaseModal>
  );
};

export default OtherModal;
