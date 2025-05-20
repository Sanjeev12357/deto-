import { Link } from 'expo-router';
import { View, Text } from 'react-native';

export default function App() {
  return (
    <View className="flex-1 justify-center items-center bg-red-500">
      <Text className="text-white text-xl">Hello from NativeWind</Text>
      <Link href="/Onboarding" className="mt-4 bg-blue-500 p-4 rounded">
        <Text className="text-white">Go to Onboarding</Text>
      </Link>
    </View>
  );
}
