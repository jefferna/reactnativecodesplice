/**
 * @flow
 */

export type ISaga = Generator<any, any, any>;
export type FilterState = {
  filteringData: {
    dateRange: string,
    criteria: string,
    criteriaValue: string,
  },
};

export type FilterAction =
  | {
      type: 'SAVE_FILTERING_DATA',
      payload: {
        dateRange: string,
        criteria: string,
        criteriaValue: string,
      },
    }
  | {
      type: 'RESET_SAVED_FILTERING_DATA',
    };
