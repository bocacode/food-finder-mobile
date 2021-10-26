import React, { useContext, useState, useEffect } from 'react';
import { View, Button } from 'react-native';
import { RestaurantContext } from '../App';
import RestaurantCard from './RestaurantCard';

export default function RandomRestaurant() {
  const { restaurants } = useContext(RestaurantContext);
  const [randomIndex, setRandomIndex] = useState(0);
  const getRandom = () => {
    const _randomIndex = Math.floor(Math.random() * restaurants.length);
    setRandomIndex(_randomIndex);
  }
  useEffect(getRandom, []);
  return (
    <View>
      <Button title="Pick again" onPress={getRandom} />
      <RestaurantCard rest={restaurants[randomIndex]} />
    </View>
  )
}