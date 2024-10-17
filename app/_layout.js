import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Slot, Stack } from 'expo-router';

const RooyLayout = () => {
  return (
    <Stack>
      <Stack.Screen name='index' options={{ headerShown: false }} />
    </Stack>
  )
}

export default RooyLayout

// const styles = StyleSheet.create({
//   container: {
//     display: 'flex',
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center'
//   }

// })