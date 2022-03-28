export const saveFilteringData = (filteringData) => ({
  type: 'SAVE_FILTERING_DATA',
  payload: filteringData,
});

export const resetSavedFilteringData = () => ({
  type: 'RESET_SAVED_FILTERING_DATA',
});
