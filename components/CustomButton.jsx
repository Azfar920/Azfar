import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const CustomButton = ({title,handlePress}) => {
    return (
        <TouchableOpacity onPress={handlePress} className={`bg-lime-500 p-3 my-2 w-[50%] rounded-3xl`}>
            <Text className="text-center text-white text-xl">{title}</Text>
        </TouchableOpacity>
    )
}

export default CustomButton