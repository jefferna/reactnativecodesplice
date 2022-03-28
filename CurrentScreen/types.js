export type ActivityCardsType = {
  item: Object,
  handleNavigateToActivityDetails: function,
};
export type AmountsCardType = {
  amounts: Object,
};

export type MockActivityScreenTypes = {
  navigation: Object,
};

export type ActivityListsType = {
  activities: Array<any>,
  handleCardPress: function,
};

export type ActivityTypeSelectionTabType = {
  handleTabSelectionChange: function,
  tabSelected: number,
};

export type FilterModalActivitiesType = {
  isModalVisible: boolean,
  onModalClose: function,
  handleFilterActivties: function,
  filteringData: Object,
  setFilteringData: function,
  onPressResetFilter: function,
};

export type ModalButtonsType = {
  onResetButtonPress: function,
  onApplyFilterButtonPress: function,
  onFilterButtonsPress: function,
};

export type ModalHeaderType = {
  onPress: function,
  modalHeader: string,
  hasBackIcon?: boolean,
  onBackIconPress?: function,
};
