import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { Tabs } from 'expo-router';
import { Ionicons, FontAwesome5, FontAwesome, AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';

// Create a custom TabBar component that exactly matches the Hinge design
const CustomTabBar = ({ state, descriptors, navigation }: any) => {
    
  return (
    <View className="h-14 bg-black flex-row border-t border-gray-800">
      {state.routes.map((route: any, index: number) => {
        const { options } = descriptors[route.key];
        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        // Use appropriate icon for each tab
        let icon;
        let badge = false;

        if (route.name === 'index') {
          // Home tab - "H" logo
          icon = (
            <View>
              <Text className={`text-2xl font-bold ${isFocused ? 'text-white' : 'text-gray-500'}`}>
                H
              </Text>
            </View>
          );
        } else if (route.name === 'search') {
          // Discover/Star tab
          icon = (
            <FontAwesome 
              name="star-o" 
              size={24} 
              color={isFocused ? '#FFFFFF' : '#777777'} 
            />
          );
        } else if (route.name === 'stars') {
          // Likes/Heart tab
          icon = (
            <AntDesign 
              name="heart" 
              size={24} 
              color={isFocused ? '#FFFFFF' : '#777777'} 
            />
          );
        } else if (route.name === 'messages') {
          // Messages tab
          icon = (
            <MaterialCommunityIcons 
              name="message-text-outline" 
              size={24} 
              color={isFocused ? '#FFFFFF' : '#777777'} 
            />
          );
        } else if (route.name === 'profile') {
          // Profile tab with notification badge
          badge = true;
          icon = (
            <View className="relative">
              <Ionicons 
                name="person" 
                size={24} 
                color={isFocused ? '#FFFFFF' : '#777777'} 
              />
              {badge && (
                <View className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full" />
              )}
            </View>
          );
        }

        return (
          <TouchableOpacity
            key={route.key}
            onPress={onPress}
            activeOpacity={0.7}
            className="flex-1 items-center justify-center"
          >
            {icon}
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

// Main tab layout component
const HingeTabLayout = () => {
  return (
    <Tabs
      tabBar={(props) => <CustomTabBar {...props} />}
      screenOptions={{
        headerShown: false,
      }}
    >
      {/* Home tab - Hinge logo */}
      <Tabs.Screen name="index" />
      
      {/* Discover/Stars tab */}
      <Tabs.Screen name="stars" />
      
      {/* Likes/Heart tab */}
      <Tabs.Screen name="search" />
      
      {/* Messages tab
      <Tabs.Screen name="messages" /> */}
      
      {/* Profile tab with notification */}
      <Tabs.Screen name="profile" />
    </Tabs>
  );
};

export default HingeTabLayout;