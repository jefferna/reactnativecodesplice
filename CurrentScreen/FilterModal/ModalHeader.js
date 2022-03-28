import React from 'react';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

import Label from 'components/Label';
import Block from 'components/Block';

import {theme} from 'utils/colors';
import {HEADER} from 'utils/test_constants';

import {ModalHeaderType} from '../types';
import {Header, IconContainer, HeaderTitleContainer} from '../styled';

const ModalHeader = ({
  modalHeader,
  onPress,
  hasBackIcon = false,
  onBackIconPress = null,
}: ModalHeaderType): React$Node => {
  return (
    <>
      <Header>
        <HeaderTitleContainer>
          {hasBackIcon && (
            <>
              <IconContainer name="left">
                <TouchableOpacity
                  testID={HEADER.BACK_BUTTON}
                  accessibilityLabel={HEADER.BACK_BUTTON}
                  onPress={onBackIconPress}>
                  <Icon name="left" size={20} onPress={onBackIconPress} />
                </TouchableOpacity>
              </IconContainer>
              <Block left={10} />
            </>
          )}
          <Label
            size={24}
            weight={500}
            color={theme.DARK_DEFAULT}
            maxFontSizeMultiplier={1.25}>
            {modalHeader}
          </Label>
        </HeaderTitleContainer>
        <IconContainer>
          <TouchableOpacity
            testID={HEADER.FORM_CLOSE_BUTTON}
            accessibilityLabel={HEADER.FORM_CLOSE_BUTTON}
            onPress={onPress}>
            <Icon name="close" size={24} onPress={onPress} />
          </TouchableOpacity>
        </IconContainer>
      </Header>
      <Block top={15} />
    </>
  );
};

export default ModalHeader;
