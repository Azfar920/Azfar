import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import { Redirect} from 'expo-router'
import { useAuth } from '@clerk/clerk-expo'

const AuthLayout = () => {
  const { isSignedIn } = useAuth()

  if (isSignedIn) {
    return <Redirect href={'../(tabs)/home'} />
  }
  return (
    <Stack screenOptions={{headerShown:false}}>
        <Stack.Screen name='login'/>
        <Stack.Screen name='signup'/>
    </Stack>
  )
}

export default AuthLayout