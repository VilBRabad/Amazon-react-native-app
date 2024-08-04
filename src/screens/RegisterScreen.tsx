import { View, Text, KeyboardAvoidingView, TextInput, TouchableOpacity, Pressable } from 'react-native'
import React from 'react'
import AuthScreenLayout from './AuthScreenLayout'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome6'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RootStackParamList } from '../navigations/StackNavigation'

const RegisterScreen = () => {

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
            }}>Register to get starts</Text>
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
          <FontAwesome name='user' size={20} color="#61677A"/>
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
          backgroundColor: "#C7C8CC", 
          flexDirection: 'row',
          alignItems: 'center',
          marginTop: 20,
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
          borderRadius: 5,
          marginBottom: 40
        }}>
          <MaterialIcons name='lock' size={25} color="#61677A"/>
          <TextInput 
            placeholder='Enter password' 
            placeholderTextColor="#61677A"
            secureTextEntry={true}
            style={{
              paddingHorizontal: 10,
              color: "#000000",
              width: 260
            }}/>
        </View>
        <TouchableOpacity style={{backgroundColor: "#FF9A00", alignItems: 'center', paddingVertical: 8, borderRadius: 5}}>
          <Text style={{color: "#FFFFFF", fontSize: 16, fontWeight: "600"}}>Register</Text>
        </TouchableOpacity>
        <Pressable onPress={()=>navigation.goBack()}>
          <Text style={{color: "#2F3645", alignSelf: 'center', fontSize: 13, marginTop: 50}}>Already have an account? Sign in</Text>
        </Pressable>
      </KeyboardAvoidingView>
  </AuthScreenLayout>
  )
}

export default RegisterScreen