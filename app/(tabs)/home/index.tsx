import Header from "@/components/Header";
import MovieCard from "@/components/MovieCard";
import { img } from "@/constants/imgs";
import React from "react";
import { ScrollView, Text, View } from "react-native";
import Animated, { useAnimatedScrollHandler, useSharedValue } from "react-native-reanimated";
import { ICarouselInstance, Pagination } from "react-native-reanimated-carousel";

export default function Home() {
  const ref = React.useRef<ICarouselInstance>(null);
  const progress = useSharedValue<number>(0);
  
  const onScrollHandler = useAnimatedScrollHandler((event) => {
    progress.value = event.contentOffset.x;
  });

  const onPressPagination = (index: number) => {
    ref.current?.scrollTo({
      /**
       * Calculate the difference between the current index and the target index
       * to ensure that the carousel scrolls to the nearest index
       */
      count: index - progress.value,
      animated: true,
    });
  };


  return (
    <ScrollView className="dark:bg-midnight-blue pb-28">
      <View className="px-3 py-8 mt-8">
        <Header title="Welcome back, Pablito Alcachofas" />
      </View>
      <View className="mt-4 gap-2" id="carousel-component">
        <Text className="text-3xl text-cold-white-300 pl-2 font-Poppins-Bold">
          Popular
        </Text>

        <View className="bg-black/50">
          <Animated.FlatList
            horizontal
            onScroll={onScrollHandler}
            data={img}
            renderItem={({ item }) => {
              return <MovieCard url={item.url} />;
            }}
          />
          <Pagination.Basic
            progress={progress}
            data={img}
            dotStyle={{ backgroundColor: "rgba(0,0,0,0.2)", borderRadius: 50 }}
            containerStyle={{ gap: 5, marginTop: 10 }}
            onPress={onPressPagination}
          />
        </View>
      </View>
    </ScrollView>
  );
}
