import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import CustomButton from '../components/CustomButton'
import { router } from 'expo-router'

const index = () => {

    const handleStarted = ()=>{
        router.push("./(auth)/login")
    }

    return (
        <SafeAreaView className="flex justify-center items-center h-full">
            <Text className="p-2 text-2xl font-bold">Welcome Sir Gul Raees</Text>
            <CustomButton title="Click Me" handlePress={handleStarted}/>
        </SafeAreaView>
    )
}

export default index