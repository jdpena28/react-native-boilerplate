import type { FC } from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';

import type { VariantType } from './Text';
import { Text } from './Text';

interface ButtonProps {
  text: string;
  textVariant?: VariantType;
  variant?: keyof typeof variantStyles;
}

const variantStyles = {
  default: 'bg-primary text-highlight',
  'full-default': 'bg-primary text-highlight w-full',
  secondary: 'bg-secondary text-highlight',
  tertiary: 'bg-tertiary text-highlight',
};

const Button: FC<ButtonProps> = ({
  text,
  textVariant,
  variant = 'default',
}) => {
  return (
    <TouchableOpacity
      className={`mx-auto rounded-lg p-1
    ${variantStyles.default}
    ${variantStyles[variant]}
  `}
    >
      <Text className="mx-auto uppercase" variant={textVariant}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
