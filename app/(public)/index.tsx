import { View } from 'react-native';

import { Button, Text } from '@/templates';

const index = () => {
  return (
    <View className="h-full">
      <View className="m-auto w-full rounded-lg bg-highlight p-5">
        <Text variant="heading">Sign In</Text>
        <Text variant="secondary">Sign in with your username and password</Text>
        <Button variant="full-default" text="Sign in" />
      </View>
    </View>
  );
};

export default index;
