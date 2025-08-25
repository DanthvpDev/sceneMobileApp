import React from 'react';
import { Text } from 'react-native';

interface HeaderProps {
    title: string;
    subTitle?: string;
}

export default function Header({title, subTitle}:HeaderProps) {
  return (
    <>
      <Text className='text-cyan-400 text-4xl font-ArchivoBlack shadow shadow-cold-white-500/50'>{title}</Text>
      <Text>{subTitle}</Text>
    </>
  )
}