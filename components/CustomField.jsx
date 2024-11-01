import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';

const CustomField = ({ label, placeholder, value, handleChange }) => {
    const [status,setStatus] = useState(false)
    return (
        <View className="w-full px-10 my-2">
            <Text className="font-bold text-2xl uppercase">{label}</Text>
            <View className="flex flex-row  bg-slate-100 border border-gray-400">
                <TextInput className="text-base p-2 flex-1" value={value} placeholder={`${placeholder}`} onChangeText={handleChange} secureTextEntry={label === "Password" && status===false} />
                {label === "Password" && (
                    <TouchableOpacity className="my-auto pr-2" onPress={()=>setStatus(!status)}>
                        <Ionicons name={status?"eye-off":"eye"} size={24} color="black" />
                    </TouchableOpacity>
                )}
            </View>
        </View>
    )
}

export default CustomField