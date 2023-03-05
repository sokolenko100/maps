import React, {FC} from 'react';
import {Text, View} from 'react-native';
import {Button as ButtonAtomic} from 'react-native-paper';

import type {Sizes} from '@components/avatar/types';
import {colors} from '@assets/colors';
import {styles} from './styles';
import type {ButtonProps, Colors} from './IButton';
import {ButtonStatus} from './enums';

const height: Sizes = {
  small: 32,
  medium: 40,
  large: 48,
};

const color: Colors = {
  primary: colors.red700,
  secondary: colors.black,
  tertiary: colors.gray050,
};

const bordRadius: Sizes = {
  small: 4,
  medium: 8,
  large: 8,
};

const textColor: Colors = {
  primary: colors.white,
  secondary: colors.white,
  tertiary: colors.gray900,
};

const fontSize: Sizes = {
  small: 12,
  medium: 13,
  large: 13,
};

const proccesingBackgroundColor: Colors = {
  primary: colors.red100,
  secondary: colors.gray100,
  tertiary: colors.gray100,
};

const Button: FC<ButtonProps> = ({
  size,
  type,
  loading = false,
  disabled = false,
  text,
  onPress,
}) => {
  const backgroundColorStyle = (state: ButtonStatus): string => {
    switch (state) {
      case ButtonStatus.disabled:
        return colors.gray050;
      case ButtonStatus.proccesing:
        return proccesingBackgroundColor[type];
      default:
        return color[type];
    }
  };

  const buttonState = (
    disable?: boolean,
    proccesing?: boolean,
  ): ButtonStatus => {
    if (disable) {
      return ButtonStatus.disabled;
    } else if (proccesing) {
      return ButtonStatus.proccesing;
    } else {
      return ButtonStatus.default;
    }
  };
  return (
    <View testID="ButtonID" style={styles.buttonContainer}>
      <ButtonAtomic
        style={[
          {
            height: height[size],
            backgroundColor: backgroundColorStyle(
              buttonState(disabled, loading),
            ),
            borderRadius: bordRadius[size],
            ...styles.buttonStyle,
          },
        ]}
        loading={loading}
        disabled={disabled}
        mode="contained"
        onPress={onPress}>
        {!loading && (
          <Text
            style={[
              {
                color: disabled ? colors.gray100 : textColor[type],
                fontSize: fontSize[size],
                ...styles.buttonText,
              },
            ]}>
            {text}
          </Text>
        )}
      </ButtonAtomic>
    </View>
  );
};

export default Button;
