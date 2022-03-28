import React from 'react';
import {FlatList} from 'react-native';
import ActivityNoTolls from 'compositions/ActivityNoTolls';
import {ActivityListsType} from './types';
import ActivityCards from './ActivityCards';

const ActivityLists = ({
  activities,
  handleCardPress,
}: ActivityListsType): React$Node => {
  const PressableActivityCards = ({item, index}) => {
    return (
      <ActivityCards
        item={item}
        handleNavigateToActivityDetails={handleCardPress}
      />
    );
  };

  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
      data={activities}
      renderItem={PressableActivityCards}
      ListEmptyComponent={ActivityNoTolls}
    />
  );
};

export default ActivityLists;
