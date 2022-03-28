import React from 'react';

import Dropdown from 'components/Dropdown';
import Block from 'components/Block';
import Label from 'components/Label';

import {theme} from 'utils/colors';
import {
  FILTER_RANGE_DROPDOWN_HEADER,
  VIEW_ACTIVITY_DATE,
  FILTER_NOTE_IPASS,
  SELECT_CRITERIA,
  SEARCH_CRITERIA,
} from 'utils/labels';
import {fontScale} from 'utils/scale';
import {IPASS_ACTIVITY} from 'utils/test_constants';

import {
  DATE_RANGE_OPTIONS,
  FILTER_CRITERIA_OPTIONS,
  AGENCY_OPTIONS,
  VECHILE_MOCK_OPTIONS,
  CRITERIA_VALUE_TITLE,
} from '../helpers';

const FormDropdowns = ({
  handleRangeDropdownChange,
  handleCriteriaDropdownChange,
  handleCriteriaValueDropdownChange,
  formikProps,
  criteriaValueTitle,
  criteriaValueOptions,
}): React$Node => {
  return (
    <>
      <Dropdown
        testID={IPASS_ACTIVITY.FILTER_RANGE_DROPDOWN}
        accessibilityLabel={IPASS_ACTIVITY.FILTER_RANGE_DROPDOWN}
        setSelected={handleRangeDropdownChange}
        selected={formikProps.values.dateRange}
        name="dateRange"
        title="Range"
        placeholder="Select Range"
        data={DATE_RANGE_OPTIONS}
      />
      <Block top={10} />
      <Label
        size={12}
        weight={600}
        color={theme.INACTIVE}
        maxFontSizeMultiplier={1.75}>
        {FILTER_NOTE_IPASS}
      </Label>
      <Block top={20} />
      <Label size={fontScale(16)} weight={600} color={theme.DARK_DEFAULT}>
        {SEARCH_CRITERIA}
      </Label>
      <Block top={15} />
      <Dropdown
        testID={IPASS_ACTIVITY.FILTER_CRITERIA_DROPDOWN}
        accessibilityLabel={IPASS_ACTIVITY.FILTER_CRITERIA_DROPDOWN}
        setSelected={handleCriteriaDropdownChange}
        selected={formikProps.values.criteria}
        name="criteria"
        title={SEARCH_CRITERIA}
        placeholder={SELECT_CRITERIA}
        data={FILTER_CRITERIA_OPTIONS}
      />
      <Block top={15} />
      <Dropdown
        testID={IPASS_ACTIVITY.FILTER_CRITERIA_VALUE_DROPDOWN}
        accessibilityLabel={IPASS_ACTIVITY.FILTER_CRITERIA_VALUE_DROPDOWN}
        setSelected={handleCriteriaValueDropdownChange}
        selected={formikProps.values.criteria_value}
        name="criteria_value"
        title={criteriaValueTitle}
        placeholder={SELECT_CRITERIA}
        data={criteriaValueOptions}
      />
    </>
  );
};

export default FormDropdowns;
