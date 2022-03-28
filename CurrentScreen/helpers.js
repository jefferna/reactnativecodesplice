import moment from "moment";
import {
  IPASS_ACTIVITY_PAYMENT_ICON,
  IPASS_ACTIVITY_TOLL_ICON,
  IPASS_ACTIVITY_TRANSPONDER_ICON,
} from "utils/constants/assets";
import { theme } from "utils/colors";

export const getCurrentMonthRange = () => {
  const date = new Date();
  const firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
  return {
    startDate: moment(firstDay).format("ll"),
    endDate: moment().format("ll"),
  };
};

export const getMockActivityIcon = (type: string) => {
  switch (type) {
    case "replenish":
      return IPASS_ACTIVITY_PAYMENT_ICON;
    case "transponder":
      return IPASS_ACTIVITY_TRANSPONDER_ICON;
    default:
      return IPASS_ACTIVITY_TOLL_ICON;
  }
};

export const getActivityDescription = (type: string, location: string) => {
  switch (type) {
    case "replenish":
      return "Auto-Replenish";
    case "transponder":
      return "Stolen-Transponder";
    default:
      return location;
  }
};

export const getAmountLabelColor = (type: string) => {
  switch (type) {
    case "replenish":
      return theme.SUCCESS;
    default:
      return theme.WARNING;
  }
};

export const TAB_CHOICES = ["All", "Tolls", "Payments"];
export const FILTER_CRITERIA_OPTIONS = ["Agency", "License Plate"];
export const DATE_RANGE_OPTIONS = [
  "Last 30 Days",
  "Last 60 Days",
  "Last 90 Days",
  "June 1, 2015",
];
export const AGENCY_OPTIONS = ["MOCK AGENCY"];
export const VECHILE_MOCK_OPTIONS = ["ABC1234", "TEST1234", "WEW1234"];
export const CRITERIA_VALUE_TITLE = ["Toll Agency", "Vehicle"];
