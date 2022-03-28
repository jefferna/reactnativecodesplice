import React, { useEffect, useState } from "react";
import moment from "moment";
import { useSelector, useDispatch } from "react-redux";

import Label from "components/Label";
import Block from "components/Block";
import FilterButton from "components/FilterButton";

import {
  saveFilteringData,
  resetSavedFilteringData,
} from "ducks/filter/iPass/actionCreators";

import { theme } from "utils/colors";
import { fontScale } from "utils/scale";
import { ACTIVITY_TRANSACTION_LABEL, TRANSACTION_LABEL } from "utils/labels";

import ActivityCards from "./ActivityCards";
import AmountsCard from "./AmountsCard";
import DateRange from "./DateRange";
import ActivityLists from "./ActivityLists";
import ActivityTypeSelectionTab from "./ActivityTypeSelectionTab";
import FilterModalActivities from "./FilterModal/FilterModalActivities";
import {
  FILTER_CRITERIA_OPTIONS,
  DATE_RANGE_OPTIONS,
  AGENCY_OPTIONS,
} from "./helpers";
import {
  MockMainContainer,
  TransactionsLabelContainer,
  TransactionHeaderContainer,
  MockActivityCardsContainer,
} from "./styled";
import { ActivityScreenTypes } from "./types";

const mockAccountSummary = {
  balance: 215.23,
  tolls_collected: 28.65,
  payments_adjustments: 28.65,
  tolls: 4,
  payments: 1,
};

const mockActivityData = [
  {
    transaction_date: moment().format("lll"),
    posting_date: moment().format("lll"),
    type: "replenish",
    location: "Plaza-21-Waukegan-Lane 55",
    license_number: "CD 80591",
    transponder: "01512846249",
    agency: "IL TOLLWAY",
    amount: "$20.00",
    balance: "$161.35",
  },
  {
    transaction_date: moment().format("lll"),
    posting_date: moment().format("lll"),
    type: "transponder",
    location: "Plaza-21-Waukegan-Lane 55",
    license_number: "CD 80591",
    transponder: "01512846249",
    agency: "IL TOLLWAY",
    amount: "$20.00",
    balance: "$141.35",
  },
  {
    transaction_date: moment().format("lll"),
    posting_date: moment().format("lll"),
    type: "tolls",
    location: "Plaza-21-Waukegan-Lane 55",
    license_number: "CD 80591",
    transponder: "01512846249",
    agency: "IL TOLLWAY",
    amount: "$20.00",
    balance: "$121.35",
  },
];

const ActivityScreen = ({ navigation }: ActivityScreenTypes): React$Node => {
  const dispatch = useDispatch();
  const [tabSelected, setTabSelected] = useState(0);
  const [isFilterModalVisible, setIsFilterModalVisible] = useState(false);
  const [filteringData, setFilteringData] = useState({
    dateRange: DATE_RANGE_OPTIONS[0],
    criteria: FILTER_CRITERIA_OPTIONS[0],
    criteria_value: AGENCY_OPTIONS[0],
  });

  const handleTabSelectionChange = (tab: number) => {
    setTabSelected(tab);
  };

  const handleCardPress = (item: Object) => {
    navigation.navigate("ActivityTollDetails", {
      item,
    });
  };

  const onFilterIconPress = () => {
    setIsFilterModalVisible(true);
  };

  const handleFilterModalClose = () => {
    setIsFilterModalVisible(false);
  };

  const handleFilterActivities = () => {
    console.log("Filter Data");
  };

  const onPressResetFilter = () => {
    setFilteringData((prevState) => ({
      dateRange: DATE_RANGE_OPTIONS[0],
      criteria: FILTER_CRITERIA_OPTIONS[0],
      criteria_value: AGENCY_OPTIONS[0],
    }));
    dispatch(resetSavedFilteringData());
  };

  useEffect(() => {
    console.log("Tab Selected is 0: ", tabSelected);
  }, [tabSelected]);

  useEffect(() => {
    dispatch(saveFilteringData(filteringData));
  }, [filteringData]);

  return (
    <MockMainContainer>
      <DateRange />
      <AmountsCard amounts={mockAccountSummary} />
      <Block top={10} />
      <TransactionsLabelContainer>
        <TransactionHeaderContainer>
          <Label size={fontScale(16)} color={theme.DARK_DEFAULT} weight="600">
            {TRANSACTION_LABEL}
          </Label>
          <FilterButton accountType="iPass" onPress={onFilterIconPress} />
        </TransactionHeaderContainer>
        <Label size={fontScale(12)} color={theme.DARK_GRAYED} weight="normal">
          {ACTIVITY_TRANSACTION_LABEL}
        </Label>
      </TransactionsLabelContainer>
      <ActivityTypeSelectionTab
        handleTabSelectionChange={handleTabSelectionChange}
        tabSelected={tabSelected}
      />
      <ActivityLists
        activities={mockActivityData}
        handleCardPress={handleCardPress}
      />
      <FilterModalActivities
        isModalVisible={isFilterModalVisible}
        onModalClose={handleFilterModalClose}
        handleFilterActivities={handleFilterActivities}
        setFilteringData={setFilteringData}
        filteringData={filteringData}
        onPressResetFilter={onPressResetFilter}
      />
    </MockMainContainer>
  );
};

export default ActivityScreen;
