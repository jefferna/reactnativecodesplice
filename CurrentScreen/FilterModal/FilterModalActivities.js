import React, {useEffect, useState} from 'react';
import {ScrollView} from 'react-native';
import {Formik} from 'formik';

import Button from 'components/Button';
import Block from 'components/Block';
import Label from 'components/Label';
import Dropdown from 'components/Dropdown';
import HalfModal from 'components/HalfModal';
import {FormHeaderContainer} from 'compositions/VehiclesForm/styled';

import {theme} from 'utils/colors';
import {
  FILTER_RANGE_DROPDOWN_HEADER,
  VIEW_ACTIVITY_DATE,
  FILTER_NOTE_IPASS,
  SELECT_CRITERIA,
  SEARCH_CRITERIA,
} from 'utils/labels';
import {fontScale} from 'utils/scale';

import ModalButtons from './ModalButtons';
import ModalHeader from './ModalHeader';
import FormDropdowns from './FormDropdowns';

import {
  DATE_RANGE_OPTIONS,
  FILTER_CRITERIA_OPTIONS,
  AGENCY_OPTIONS,
  VECHILE_MOCK_OPTIONS,
  CRITERIA_VALUE_TITLE,
} from '../helpers';
import {FilterModalActivitiesType} from '../types';
import {FilterModalContainer, ButtonContainer, ButtonWidth} from '../styled';

const FilterModalActivities = ({
  isModalVisible,
  onModalClose,
  setFilteringData,
  filteringData,
  handleFilterActivties,
  onPressResetFilter,
}: FilterModalActivitiesType): React$Node => {
  const [criteriaValueOptions, setCriteriaValueOptions] = useState([]);
  const [criteriaValueTitle, setCriteriaValueTitle] = useState();

  const handleRangeDropdownChange = (item: string) => {
    return setFilteringData((prevState) => ({
      ...prevState,
      dateRange: item,
    }));
  };

  const handleCriteriaDropdownChange = (item: string) => {
    return setFilteringData((prevState) => ({
      ...prevState,
      criteria: item,
    }));
  };

  const handleCriteriaValueDropdownChange = (item: string) => {
    return setFilteringData((prevState) => ({
      ...prevState,
      criteria_value: item,
    }));
  };

  useEffect(() => {
    if (filteringData.criteria === 'Agency') {
      setCriteriaValueTitle(CRITERIA_VALUE_TITLE[0]);
      handleCriteriaValueDropdownChange(AGENCY_OPTIONS[0]);
      return setCriteriaValueOptions(AGENCY_OPTIONS);
    }
    setCriteriaValueTitle(CRITERIA_VALUE_TITLE[1]);
    handleCriteriaValueDropdownChange(VECHILE_MOCK_OPTIONS[0]);
    return setCriteriaValueOptions(VECHILE_MOCK_OPTIONS);
  }, [filteringData.criteria]);

  return (
    <HalfModal isVisible={isModalVisible} modalClose={onModalClose}>
      <FormHeaderContainer>
        <ModalHeader modalHeader="Filters" onPress={onModalClose} />
      </FormHeaderContainer>
      <FilterModalContainer>
        <ScrollView>
          <Formik
            enableReinitialize
            initialValues={filteringData}
            onSubmit={handleFilterActivties}>
            {(formikProps) => (
              <>
                <Block top={10} />
                <Label
                  size={fontScale(16)}
                  weight={600}
                  color={theme.DARK_DEFAULT}
                  maxFontSizeMultiplier={1.5}>
                  {VIEW_ACTIVITY_DATE}
                </Label>
                <Block top={5} />
                <Label
                  size={12}
                  weight={600}
                  color={theme.CHECKBOX_INACTIVE}
                  maxFontSizeMultiplier={1.75}>
                  {FILTER_RANGE_DROPDOWN_HEADER}
                </Label>
                <Block top={10} />
                <FormDropdowns
                  handleRangeDropdownChange={handleRangeDropdownChange}
                  handleCriteriaDropdownChange={handleCriteriaDropdownChange}
                  handleCriteriaValueDropdownChange={
                    handleCriteriaValueDropdownChange
                  }
                  formikProps={formikProps}
                  criteriaValueTitle={criteriaValueTitle}
                  criteriaValueOptions={criteriaValueOptions}
                />
                <ModalButtons
                  onResetButtonPress={onPressResetFilter}
                  onApplyFilterButtonPress={handleFilterActivties}
                />
              </>
            )}
          </Formik>
        </ScrollView>
      </FilterModalContainer>
    </HalfModal>
  );
};

export default FilterModalActivities;
