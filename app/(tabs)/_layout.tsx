import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import { images } from '@/constants/images'
import { icons } from '@/constants/icons'

const TabIcon=({focused,icon,title}:any)=>{
    if(focused){
    return(

        <View
                    className="flex flex-row w-full flex-1 min-w-[110px] min-h-14 mt-4 justify-center items-center rounded-full overflow-hidden"


                    >
                        <Image
                        source={icon}
                       tintColor={"#151312"}
                        className='size-5'
                        />
                        <Text className='text-secondary text-base font-semibold'>
                            {title}
                        </Text>
                </View>
    )
}else{
    return (
         <View
                    className="size-full justify-center items-center mt-4 rounded-full"


                    >
                        <Image
                        source={icon}
                       tintColor={"#A8B5DB"}
                        className='size-5'
                        />
                        <Text className='text-sm'>
                            {title}
                        </Text>
                </View>
    )
}
}

const _layout = () => {
  return (
    <Tabs
    screenOptions={{
        tabBarShowLabel:false,
        tabBarItemStyle:{
            width:'100%',
            height:'100%',
            justifyContent:'center',
            alignItems:'center'
        },
        tabBarStyle:{
            backgroundColor:"0f0D23",
            borderRadius:50,
            marginHorizontal:20,
            marginBottom:36,
            height:52
        }
    }}
    
    >
        <Tabs.Screen
        name="index"
        options={{
            title:'index',
            headerShown: false,
            tabBarIcon:({focused})=>(
               <TabIcon
               focused={focused}
               icon={icons.home}
               title="Home"
               />
            )
        }}
        />
        <Tabs.Screen
        name="search"
        options={{
            title:'search',
            headerShown: false,
            tabBarIcon:({focused})=>(
               <TabIcon
               focused={focused}
               icon={icons.search}
               title="Search"
               />
            )
        }}
        
        />
        
        <Tabs.Screen
        name="stars"
        options={{
            title:'stars',
            headerShown: false,
            tabBarIcon:({focused})=>(
               <TabIcon
               focused={focused}
               icon={icons.save}
               title="Save"
               />
            )
        }}
        />
        <Tabs.Screen
        name="profile"
        options={{
            title:'profile',
            headerShown: false,
            tabBarIcon:({focused})=>(
               <TabIcon
               focused={focused}
               icon={icons.person}
               title="Profile"
               />
            )
        }}
        />
    </Tabs>
  )
}

export default _layout

const styles = StyleSheet.create({})