import React from "react";

import Card from "components/Card";
import Label from "components/Label";
import Block from "components/Block";

import { fontScale } from "utils/scale";
import { theme } from "utils/colors";
import {
  AVAILABLE_BALANCE_HEADER,
  TOLLS_COLLECTED_HEADER,
  PAYMENT_ADJUSTMENST_HEADER,
} from "utils/labels";
import { IPASS_ACTIVITY } from "utils/test_constants";

import {
  MockAmountsContainer,
  MockAmountsCard,
  AmountDetailsContainer,
  AmountDetailsHeaderContainer,
  AmountDetailsHeader,
  AmountsContainer,
  AmountSourceContainer,
  Divider,
} from "./styled";
import { AmountsCardType } from "./types";

const AmountsCard = ({ amounts }: AmountsCardType): React$Node => {
  const getAmountSource = (type: string): string => {
    if (type === "toll") {
      return amounts.tolls > 0
        ? `${amounts.tolls} toll${amounts.tolls > 1 ? "s" : ""}`
        : "";
    }
    return amounts.payments > 0
      ? `${amounts.payments} payment${amounts.payments > 1 ? "s" : ""}`
      : "";
  };
  return (
    <MockAmountsContainer>
      <Card paddingHorizontal={5}>
        <MockAmountsCard>
          <AmountDetailsContainer>
            <AmountDetailsHeaderContainer>
              <AmountDetailsHeader>
                <Label
                  color={theme.DARK_GRAYED}
                  weight="600"
                  size={fontScale(10)}
                  maxFontSizeMultiplier={1.25}
                >
                  {AVAILABLE_BALANCE_HEADER}
                </Label>
              </AmountDetailsHeader>
              <Divider />
              <AmountDetailsHeader>
                <Label
                  color={theme.DARK_GRAYED}
                  weight="600"
                  size={fontScale(10)}
                  maxFontSizeMultiplier={1.25}
                >
                  {TOLLS_COLLECTED_HEADER}
                </Label>
              </AmountDetailsHeader>
              <Divider />
              <AmountDetailsHeader>
                <Label
                  color={theme.DARK_GRAYED}
                  weight="600"
                  size={fontScale(10)}
                  maxFontSizeMultiplier={1.25}
                >
                  {PAYMENT_ADJUSTMENST_HEADER}
                </Label>
              </AmountDetailsHeader>
            </AmountDetailsHeaderContainer>

            <AmountsContainer>
              <AmountDetailsHeader>
                <Label
                  color={theme.DARK_DEFAULT}
                  weight="bold"
                  size={fontScale(16)}
                  testID={IPASS_ACTIVITY.AMOUNTS_BALANCE}
                  accessibilityLabel={IPASS_ACTIVITY.AMOUNTS_BALANCE}
                  maxFontSizeMultiplier={1.5}
                >
                  {`$${amounts.balance}`}
                </Label>
              </AmountDetailsHeader>
              <Divider />
              <AmountDetailsHeader>
                <Label
                  color={theme.DARK_DEFAULT}
                  weight="bold"
                  size={fontScale(16)}
                  testID={IPASS_ACTIVITY.AMOUNTS_TOLLS_COLLECTED}
                  accessibilityLabel={IPASS_ACTIVITY.AMOUNTS_TOLLS_COLLECTED}
                  maxFontSizeMultiplier={1.5}
                >
                  {`$${amounts.tolls_collected}`}
                </Label>
              </AmountDetailsHeader>
              <Divider />
              <AmountDetailsHeader>
                <Label
                  color={theme.DARK_DEFAULT}
                  weight="bold"
                  size={fontScale(16)}
                  testID={IPASS_ACTIVITY.AMOUNTS_PAYMENTS_ADJUSTMENTS}
                  accessibilityLabel={
                    IPASS_ACTIVITY.AMOUNTS_PAYMENTS_ADJUSTMENTS
                  }
                  maxFontSizeMultiplier={1.5}
                >
                  {`$${amounts.payments_adjustments}`}
                </Label>
              </AmountDetailsHeader>
            </AmountsContainer>
            <AmountSourceContainer>
              <AmountDetailsHeader />
              <Divider />
              <AmountDetailsHeader>
                <Label
                  testID={IPASS_ACTIVITY.NUMBER_TOLLS}
                  accessibilityLabel={IPASS_ACTIVITY.NUMBER_TOLLS}
                  color={theme.DARK_GRAYED}
                  weight="600"
                  size={fontScale(10)}
                  maxFontSizeMultiplier={1.5}
                >
                  {getAmountSource("toll")}
                </Label>
              </AmountDetailsHeader>
              <Divider />
              <AmountDetailsHeader>
                <Label
                  testID={IPASS_ACTIVITY.NUMBER_PAYMENTS}
                  accessibilityLabel={IPASS_ACTIVITY.NUMBER_PAYMENTS}
                  color={theme.DARK_GRAYED}
                  weight="600"
                  size={fontScale(10)}
                  maxFontSizeMultiplier={1.5}
                >
                  {getAmountSource("payment")}
                </Label>
              </AmountDetailsHeader>
            </AmountSourceContainer>
          </AmountDetailsContainer>
        </MockAmountsCard>
      </Card>
    </MockAmountsContainer>
  );
};
export default AmountsCard;
