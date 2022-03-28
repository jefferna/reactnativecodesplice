import type { ComponentType } from "react";
import styled from "styled-components/native";
import { verticalScale, scale } from "utils/scale";
import { theme } from "utils/colors";
export const MockMainContainer: ComponentType<any> = styled.View`
  flex: 1;
  flex-direction: column;
`;

export const MockDateRangeContentContainer: ComponentType<any> = styled.View`
  align-self: center;
  padding-vertical: 16px;
  flex-direction: column;
`;

export const MockDateRangeContainer: ComponentType<any> = styled.View`
  margin-top: 6px;
  padding-horizontal: ${verticalScale(10)}px;
  align-items: center;
  border-radius: 4px;
  border-style: solid;
  border-width: 1px;
  border-color: ${theme.GRAYED};
  flex-direction: row;
`;

export const MockAmountsContainer: ComponentType<any> = styled.View`
  align-items: center;
`;

export const MockAmountsCard: ComponentType<any> = styled.View`
  width: 85%;
  flex-direction: row;
`;

export const AmountDetailsContainer: ComponentType<any> = styled.View`
  flex-direction: column;
  flex: 1;
  height: ${verticalScale(70)}px;
`;

export const AmountDetailsHeaderContainer: ComponentType<any> = styled.View`
  flex-direction: row;
`;

export const AmountDetailsHeader: ComponentType<any> = styled.View`
  flex: 0.33;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

export const AmountsContainer: ComponentType<any> = styled.View`
  flex: 0.6;
  flex-direction: row;
`;
export const Amounts: ComponentType<any> = styled.View`
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

export const AmountSourceContainer: ComponentType<any> = styled.View`
  flex: 0.4;
  flex-direction: row;
`;

export const Divider: ComponentType<any> = styled.View`
  width: 1px;
  height: 100%;
  background-color: ${theme.GRAYED};
`;

export const TransactionsLabelContainer: ComponentType<any> = styled.View`
  align-self: center;
  width: 90%;
`;

export const TransactionHeaderContainer: ComponentType<any> = styled.View`
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
`;

export const MockTabsContainer: ComponentType<any> = styled.View`
  align-self: center;
  justify-content: center;
`;

export const MockActivityCardsContainer: ComponentType<any> = styled.View`
  flex: 1;
  align-self: center;
  width: 85%;
`;

export const Pressable: ComponentType<any> = styled.TouchableOpacity`
  width: 90%;
  align-self: center;
`;

export const MockActivityCard: ComponentType<any> = styled.View`
  flex-direction: row;
`;

export const MockIconContainer: ComponentType<any> = styled.View`
  flex: 0.15;
  justify-content: center;
`;

export const MockActivityDetailsContainer: ComponentType<any> = styled.View`
  flex-direction: column;
  flex: 1;
`;

export const MockActivityDetails: ComponentType<any> = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const MockActivityLocationContainer: ComponentType<any> = styled.View`
  flex: 0.7;
`;
export const MockActivityAmountContainer: ComponentType<any> = styled.View`
  flex: 0.3;
`;

export const FilterModalContainer: ComponentType<any> = styled.View`
  margin-left: ${scale(24)}px;
  margin-right: ${scale(24)}px;
  margin-bottom: ${scale(24)}px;
  justify-content: space-between;
`;

export const ButtonContainer: ComponentType<any> = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const ButtonWidth: ComponentType<any> = styled.View`
  width: 47%;
`;

export const Header: ComponentType<any> = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const IconContainer: ComponentType<any> = styled.View`
  align-items: flex-end;
  flex-direction: ${(props) => (props.name === "left" ? "row" : "row-reverse")};
  margin-vertical: ${verticalScale(Platform.OS === "ios" ? 3 : 5)}px;
`;

export const HeaderTitleContainer: ComponentType<any> = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
