/* eslint-disable react/style-prop-object */
import { Slot } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export interface RootLayoutTemplateProps {
  children?: React.ReactNode;
}

export const RootLayoutTemplate = () => {
  return (
    <SafeAreaView className="">
      <StatusBar style="auto" />
      <View className="h-screen bg-background px-5">
        <Slot />
      </View>
    </SafeAreaView>
  );
};

export default RootLayoutTemplate;
