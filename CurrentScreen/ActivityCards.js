import React from "react";
import { TouchableOpacity } from "react-native";

import Card from "components/Card";
import ImageIcon from "components/ImageIcon";
import Label from "components/Label";
import Block from "components/Block";

import { fontScale } from "utils/scale";
import { theme } from "utils/colors";
import { REMAINING_BALANCE } from "utils/labels";

import {
  MockActivityCard,
  MockIconContainer,
  MockActivityDetailsContainer,
  MockActivityDetails,
  MockActivityLocationContainer,
  MockActivityAmountContainer,
} from "./styled";
import {
  getMockActivityIcon,
  getActivityDescription,
  getAmountLabelColor,
} from "./helpers";
import { ActivityCardsType } from "./types";
import { Pressable } from "./styled";

const ActivityCards = ({
  item,
  handleNavigateToActivityDetails,
}: ActivityCardsType): React$Node => {
  const handleCardPress = () => {
    handleNavigateToActivityDetails(item);
  };

  return (
    <Pressable onPress={handleCardPress}>
      <Card>
        <MockActivityCard>
          <MockIconContainer>
            <ImageIcon
              source={getMockActivityIcon(item.type)}
              height={30}
              width={30}
            />
          </MockIconContainer>
          <MockActivityDetailsContainer>
            <Label
              size={fontScale(11)}
              weight="normal"
              color={theme.DARK_GRAYED}
              maxFontSizeMultiplier={1.5}
            >
              {item.transaction_date}
            </Label>
            <Block top={5} />
            <MockActivityDetails>
              <MockActivityLocationContainer>
                <Label
                  size={fontScale(16)}
                  weight="bold"
                  color={theme.DARK_DEFAULT}
                  numberOfLines={1}
                  maxFontSizeMultiplier={1.25}
                >
                  {getActivityDescription(item.type, item.location)}
                </Label>
              </MockActivityLocationContainer>
              <MockActivityAmountContainer>
                <Label
                  size={fontScale(16)}
                  weight="bold"
                  color={getAmountLabelColor(item.type)}
                  alignment="right"
                  maxFontSizeMultiplier={1.25}
                >
                  {item.amount}
                </Label>
              </MockActivityAmountContainer>
            </MockActivityDetails>
            <Block top={5} />
            <MockActivityDetails>
              <Label
                size={fontScale(11)}
                weight="normal"
                color={theme.DARK_GRAYED}
                maxFontSizeMultiplier={1.5}
              >
                {REMAINING_BALANCE}
              </Label>
              <Label
                size={fontScale(11)}
                weight="normal"
                color={theme.DARK_GRAYED}
                maxFontSizeMultiplier={1.5}
              >
                {item.balance}
              </Label>
            </MockActivityDetails>
          </MockActivityDetailsContainer>
        </MockActivityCard>
      </Card>
      <Block top={10} />
    </Pressable>
  );
};

export default ActivityCards;
