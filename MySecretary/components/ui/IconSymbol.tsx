// This file is a fallback for using MaterialIcons on Android and web.

import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { SymbolWeight } from 'expo-symbols';
import React from 'react';
import { OpaqueColorValue, StyleProp, ViewStyle } from 'react-native';

// Add your SFSymbol to MaterialIcons mappings here.
const MAPPING = {
  // See MaterialIcons here: https://icons.expo.fyi
  // See SF Symbols in the SF Symbols app on Mac.

  'house.fill': {name : 'home', library: 'MaterialIcons'},
  'paperplane.fill': {name:'send', library: 'MaterialIcons'},
  'people-line.fill' : {name: 'people-line', library: 'FontAwesome6'},
  'chevron.left.forwardslash.chevron.right': {name:'code', library: 'MaterialIcons'},
  'chevron.right': {name:'chevron-right', library: 'MaterialIcons'},
} as Partial<
  Record<
    import('expo-symbols').SymbolViewProps['name'],
    { name: string; library: 'MaterialIcons' | 'Ionicons' | 'FontAwesome6' }
  >
>;

export type IconSymbolName = keyof typeof MAPPING;

/**
 * An icon component that uses native SFSymbols on iOS, and MaterialIcons on Android and web. This ensures a consistent look across platforms, and optimal resource usage.
 *
 * Icon `name`s are based on SFSymbols and require manual mapping to MaterialIcons.
 */
export function IconSymbol({
  name,
  size = 24,
  color,
  style,
}: {
  name: IconSymbolName;
  size?: number;
  color: string | OpaqueColorValue;
  style?: StyleProp<ViewStyle>;
  weight?: SymbolWeight;
}) {
  const mapping = MAPPING[name];

  if (!mapping) {
    console.warn(`Icon "${name}" not found in mapping.`);
    return null;
  }

  const IconComponent = mapping.library === 'FontAwesome6' ? FontAwesome6 : MaterialIcons;

  return <IconComponent color={color} size={size} name={mapping.name} style={style} />;
}
