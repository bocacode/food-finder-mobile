import React, { useEffect, useState } from 'react';
import { View, ScrollView, Text } from 'react-native';
import RestaurantCard from './RestaurantCard';
import styles from '../styles'

export default function Home() {
  const [restaurants, setRestaurants] = useState();
  useEffect(() => {
    fetch('https://bocacode-intranet-api.web.app/restaurants')
      .then(response => response.json())
      .then(setRestaurants)
      .catch(alert)
  }, [])
  return (
    <View style={styles.container}>
      {!restaurants
        ? <Text>Loading...</Text>
        : <ScrollView>
          {restaurants.map(rest => <RestaurantCard key={rest.id} rest={rest} />)}
          </ScrollView>
      }
    </View>
  )
}
