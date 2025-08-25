import FontAwesome from "@expo/vector-icons/FontAwesome6"
import { Tabs } from 'expo-router'
import React from 'react'

export default function TabLayout() {
  return (
    <Tabs
    screenOptions={{
      headerShown: false,
      tabBarActiveTintColor: "#54A9D1",
      tabBarStyle: {
        backgroundColor: "#2C3E50",
        borderColor: "#54A9D1"
      },
      tabBarInactiveTintColor: "#b9c5c9"
    }}
    >
        <Tabs.Screen 
          name="home/index" 
          options={
            {
              title:"Home", 
              tabBarIcon: ({color})=> <FontAwesome name="house" size={22} color={color} />
            }} />

        <Tabs.Screen 
          name="profile/index" 
          options={
            {
              title:"Profile", 
              tabBarIcon: ({color})=> <FontAwesome name="user" size={22} color={color} />
            }} />
    </Tabs>
  )
}