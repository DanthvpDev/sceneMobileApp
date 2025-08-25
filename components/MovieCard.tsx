import FontAwesome from '@expo/vector-icons/FontAwesome6';
import React from 'react';
import { Image, Text, View } from 'react-native';

interface MovieCardProps {
  url: string;
}

export default function MovieCard({url}:MovieCardProps) {
  return (
    <View className='border border-cold-white-500/50 rounded-lg overflow-hidden w-64'>
      <View className='h-96'>
        <Image className='h-full' src={url}></Image>
      </View>
      <View className='pl-2 py-2 gap-2'>
        <Text className='text-cold-white text-lg font-Poppins-Italic'>Interestellar</Text>
        <View className='flex flex-row gap-1 items-baseline'>
            <Text className='text-cold-white-500 text-md font-Poppins-Bold text-center'> 4.4</Text>
            <FontAwesome name="star" color="#e6c405" size={12} />
        </View>
        <Text className='text-cold-white-500 text-md font-Poppins'>2014</Text>
      </View>
    </View>
  )
}