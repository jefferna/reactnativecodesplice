import React from "react";

import Block from "components/Block";
import Label from "components/Label";
import ImageIcon from "components/ImageIcon";

import { fontScale, verticalScale } from "utils/scale";
import { theme } from "utils/colors";
import { ACTIVITY_TRANSACTION_LABEL, ACTIVITY_DATE_HEADER } from "utils/labels";
import { CALENDAR_ICON } from "utils/constants/assets";
import { IPASS_ACTIVITY } from "utils/test_constants";

import {
  MockDateRangeContentContainer,
  MockDateRangeContainer,
} from "./styled";
import { getCurrentMonthRange } from "./helpers";

const DateRange = (): React$Node => {
  return (
    <MockDateRangeContentContainer>
      <Label
        size={fontScale(12)}
        weight="600"
        color={theme.DARK_DEFAULT}
        alignment="center"
        maxFontSizeMultiplier={1.75}
      >
        {ACTIVITY_DATE_HEADER}
      </Label>
      <MockDateRangeContainer>
        <ImageIcon
          height={verticalScale(16)}
          width={verticalScale(14)}
          source={CALENDAR_ICON}
          color={theme.ACTIVE}
        />
        <Block right={10} />
        <Label
          size={fontScale(14)}
          weight="600"
          color={theme.ACTIVE}
          isUnderlined={true}
          testID={IPASS_ACTIVITY.CURRENT_MONTH_RANGE}
          accessibilityLabel={IPASS_ACTIVITY.CURRENT_MONTH_RANGE}
          maxFontSizeMultiplier={1.5}
        >
          {`${getCurrentMonthRange().startDate} to ${
            getCurrentMonthRange().endDate
          }`}
        </Label>
      </MockDateRangeContainer>
    </MockDateRangeContentContainer>
  );
};

export default DateRange;
