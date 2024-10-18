import { StatusBar } from 'expo-status-bar';
import { Image, ScrollView, Text, View } from 'react-native';
import { Link } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';

import { images } from '../constants';
import CustomButton from '../components/customButton';



export default function App() {
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView contentContainerStyle={{ height: '100%' }}>
        <View className="w-full flex justify-center items-center h-full px-4">
          <Image
            source={images.logo}
            className="w-[196px] h-[250px]"
            resizeMode="contain"
          />
          <View className="relative mt-5">
            <Text className="text-3xl text-white font-bold text-center">
              Stay closer to your child’s world...
            </Text>
          </View>
          <Text className="text-sm font-pregular text-gray-100 mt-7 text-center">
            Creating seamless communication between parents and childcare providers!
          </Text>
          <CustomButton />
        </View>
      </ScrollView>

    </SafeAreaView>
  );
}
