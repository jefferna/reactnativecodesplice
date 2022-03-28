import React from "react";

import Block from "components/Block";
import SegmentedControllTab from "components/SegementedControllTab";

import { TAB_CHOICES } from "./helpers";
import { ActivityTypeSelectionTabType } from "./types";
import { MockTabsContainer } from "./styled";

const ActivityTypeSelectionTab = ({
  handleTabSelectionChange,
  tabSelected,
}: ActivityTypeSelectionTabType): React$Node => {
  return (
    <MockTabsContainer>
      <Block top={10} />
      <SegmentedControllTab
        data={TAB_CHOICES}
        setSelected={handleTabSelectionChange}
        selected={tabSelected}
        containerWidth={95}
        testID="IPASS"
        accessibilityLabel="IPASS"
      />
      <Block top={10} />
    </MockTabsContainer>
  );
};

export default ActivityTypeSelectionTab;
