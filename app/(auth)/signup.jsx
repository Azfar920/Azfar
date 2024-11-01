import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import CustomField from '../../components/CustomField'
import CustomButton from '../../components/CustomButton'
import { router } from 'expo-router'
import { useSignUp } from '@clerk/clerk-expo'
import { useRouter } from 'expo-router'

const signup = () => {
  const { isLoaded, signUp, setActive } = useSignUp()
  const router = useRouter()
  const [form, setForm] = useState({ email: "", password: "" })
  const [pendingVerification, setPendingVerification] = React.useState(false)
  const [code, setCode] = React.useState('')

  const onSignUpPress = async () => {
    if (!isLoaded) {
      return
    }

    try {
      await signUp.create({
        emailAddress:form.email,
        password:form.password,
      })

      await signUp.prepareEmailAddressVerification({ strategy: 'email_code' })

      setPendingVerification(true)
    } catch (err) {
      console.error(JSON.stringify(err, null, 2))
    }
  }

  const onPressVerify = async () => {
    if (!isLoaded) {
      return
    }

    try {
      const completeSignUp = await signUp.attemptEmailAddressVerification({
        code,
      })

      if (completeSignUp.status === 'complete') {
        await setActive({ session: completeSignUp.createdSessionId })
        router.replace('../(tabs)/home')
      } else {
        console.error(JSON.stringify(completeSignUp, null, 2))
      }
    } catch (err) {
      console.error(JSON.stringify(err, null, 2))
    }
  }

  return (
    <View className="flex justify-center items-center h-full">
      {!pendingVerification && (
        <>
          <CustomField label="Email" placeholder="Enter Your Email" value={form.email} handleChange={(val) => setForm({ ...form, email: val })} />
          <CustomField label="Password" placeholder="Enter Your Password" value={form.password} handleChange={(val) => setForm({ ...form, password: val })} />
          <CustomButton title="Create Account" handlePress={onSignUpPress}/>
          <TouchableOpacity onPress={() => router.push("./login")}>
            <Text>Already Have Account ? Click Here</Text>
          </TouchableOpacity>
        </>
      )}

      {pendingVerification&&(
        <>
          <CustomField label="Code" placeholder="Enter Code" value={code} handleChange={(e)=>setCode(e)}/>
          <CustomButton title="Verify Code" handlePress={onPressVerify}/>
        </>
      )}

    </View>
  )
}

export default signup