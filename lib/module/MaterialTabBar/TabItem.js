function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import { StyleSheet, Pressable, Platform } from 'react-native';
import Animated, { interpolate, useAnimatedStyle } from 'react-native-reanimated';
export const TABBAR_HEIGHT = 48;
const DEFAULT_COLOR = 'rgba(0, 0, 0, 1)';
/**
 * Any additional props are passed to the pressable component.
 */

export const MaterialTabItem = ({
  name,
  index,
  onPress,
  onLayout,
  scrollEnabled,
  indexDecimal,
  label,
  style,
  labelStyle,
  activeColor = DEFAULT_COLOR,
  inactiveColor = DEFAULT_COLOR,
  inactiveOpacity = 0.7,
  pressColor = '#DDDDDD',
  pressOpacity = Platform.OS === 'ios' ? 0.2 : 1,
  ...rest
}) => {
  const stylez = useAnimatedStyle(() => {
    return {
      opacity: interpolate(indexDecimal.value, [index - 1, index, index + 1], [inactiveOpacity, 1, inactiveOpacity], Animated.Extrapolate.CLAMP),
      color: Math.abs(index - indexDecimal.value) < 0.5 ? activeColor : inactiveColor
    };
  });
  return /*#__PURE__*/React.createElement(Pressable, _extends({
    onLayout: onLayout,
    style: ({
      pressed
    }) => [{
      opacity: pressed ? pressOpacity : 1
    }, !scrollEnabled && styles.grow, styles.item, style],
    onPress: () => onPress(name),
    android_ripple: {
      borderless: true,
      color: pressColor
    }
  }, rest), /*#__PURE__*/React.createElement(Animated.Text, {
    style: [styles.label, stylez, labelStyle]
  }, label));
};
const styles = StyleSheet.create({
  grow: {
    flex: 1
  },
  item: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
    height: TABBAR_HEIGHT
  },
  label: {
    margin: 4
  }
});
//# sourceMappingURL=TabItem.js.map