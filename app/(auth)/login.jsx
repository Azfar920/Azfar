import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import CustomField from '../../components/CustomField'
import CustomButton from '../../components/CustomButton'
import { router } from 'expo-router'

const login = () => {
    const [form, setForm] = useState({ email: "", password: "" })
    return (
        <View className="flex justify-center items-center h-full">
            {/* <CustomField label="Email" placeholder="Enter your Email" value={form.email} handleChange={(val) => setForm({ ...form, email: val })} />
            <CustomField label="Password" placeholder="Enter your Password" value={form.password} handleChange={(val) => setForm({ ...form, password: val })} /> */}
            <CustomButton title="Login" />
            <TouchableOpacity onPress={()=>router.push("./signup")}>
                <Text>Create An Acccount</Text>
            </TouchableOpacity>
        </View>
    )
}

export default login