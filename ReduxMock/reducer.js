/**
 * @format
 * @flow
 */
import type { FilterAction, FilterState } from "./types";

const INITIAL_STATE = {
  filteringData: {
    dateRange: "",
    criteria: "",
    criteriaValue: "",
  },
};

const filterMock = (
  state: FilterState = INITIAL_STATE,
  action: FilterAction
): FilterState => {
  switch (action.type) {
    case "SAVE_FILTERING_DATA":
      return {
        ...state,
        filteringData: {
          ...action.payload,
        },
      };
    case "RESET_SAVED_FILTERING_DATA":
      return {
        ...INITIAL_STATE,
      };
    default:
      return state;
  }
};

export default filterMock;
