import React from 'react';

import Block from 'components/Block';
import Button from 'components/Button';

import {ButtonContainer, ButtonWidth} from '../styled';
import {ModalButtonsType} from '../types';

const ModalButtons = ({
  onResetButtonPress,
  onApplyFilterButtonPress,
}: ModalButtonsType): React$Node => {
  return (
    <>
      <Block top={25} />
      <ButtonContainer>
        <ButtonWidth>
          <Button
            type="default"
            onPress={onResetButtonPress}
            title="Reset Filters"
            weight="300"
          />
        </ButtonWidth>
        <ButtonWidth>
          <Button
            onPress={onApplyFilterButtonPress}
            title="Apply Filters"
            weight="300"
            type="success"
          />
        </ButtonWidth>
      </ButtonContainer>
    </>
  );
};

export default ModalButtons;
