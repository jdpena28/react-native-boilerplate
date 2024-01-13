/* eslint-disable  react/no-unused-prop-types */
import type { FC } from 'react';
import type { StyleProp, TextStyle } from 'react-native';
import { Text as RNText } from 'react-native';

const variantStyles = {
  default: 'text-lg',
  secondary: 'text-secondary',
  heading: 'text-3xl text-primary',
  subHeading: 'text-xl',
};

export type VariantType = keyof typeof variantStyles;

interface TextProps {
  variant?: VariantType;
  children: string;
  style?: string;
  className?: string;
}

export const Text: FC<TextProps> = ({
  variant = 'default',
  children,
  style,
}) => {
  return (
    <RNText
      className={`
  text-highlight
  ${variantStyles.default}
  ${variantStyles[variant]}
`}
      style={style as StyleProp<TextStyle>}
    >
      {children}
    </RNText>
  );
};
