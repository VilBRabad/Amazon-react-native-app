import { StyleSheet, Text, TextInput, View, KeyboardAvoidingView, Button, TouchableOpacity, Pressable } from 'react-native'
import React, { useState } from 'react'
import AuthScreenLayout from './AuthScreenLayout'
import MaterialIcons from "react-native-vector-icons/MaterialIcons"
import Ionicons from "react-native-vector-icons/Ionicons"
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from '../navigations/StackNavigation'

const LoginScreen = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <AuthScreenLayout>
      <KeyboardAvoidingView style={{marginVertical: 20}}>
        <View >
          <Text 
            style={{
              color: "#000000", 
              fontSize: 16, 
              fontWeight: '400',
              alignSelf: 'center'
            }}>Login to get starts</Text>
        </View>
        <View style={{
          width: 'auto', 
          marginTop: 50,
          backgroundColor: "#C7C8CC", 
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          paddingHorizontal: 10,
          borderRadius: 5
        }}>
          <MaterialIcons name='email' size={25} color="#61677A"/>
          <TextInput 
            placeholder='Enter email address' 
            placeholderTextColor="#61677A"
            style={{
              paddingHorizontal: 10, 
              width:260,
              color: "#000000"
            }}/>
        </View>

        <View style={{
          width: 'auto', 
          marginTop: 20,
          backgroundColor: "#C7C8CC", 
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          paddingHorizontal: 10,
          borderRadius: 5
        }}>
          <MaterialIcons name='lock' size={25} color="#61677A"/>
          <TextInput 
            placeholder='Enter password' 
            placeholderTextColor="#61677A"
            secureTextEntry={!showPassword}
            style={{
              paddingHorizontal: 10,
              color: "#000000",
              width: 240
            }}/>
            <Ionicons 
              onPress={()=>setShowPassword(!showPassword)} 
              name={`${showPassword?'eye-sharp': "eye-off-sharp"}`} 
              size={20} 
              color="#61677A"
            />
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between', marginBottom: 25, marginTop: 3}}>
            <Text style={{color: '#61677A', fontSize: 12, fontWeight: '500'}}>Need help?</Text>
            <Text style={{color: '#5C88C4', fontSize: 12, fontWeight: '500'}}>Forgot password?</Text>
        </View>
        <TouchableOpacity style={{backgroundColor: "#FF9A00", alignItems: 'center', paddingVertical: 8, borderRadius: 5}}>
          <Text style={{color: "#FFFFFF", fontSize: 16, fontWeight: "600"}}>Login</Text>
        </TouchableOpacity>
        <Pressable onPress={()=>navigation.navigate("Register")}>
          <Text style={{color: "#2F3645", alignSelf: 'center', fontSize: 13, marginTop: 50}}>Don't have an account? Sign up</Text>
        </Pressable>
      </KeyboardAvoidingView>
    </AuthScreenLayout>
  )
}

const styles = StyleSheet.create({})

export default LoginScreen
