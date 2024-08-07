import { View, Text, KeyboardAvoidingView, TextInput, TouchableOpacity, Pressable } from 'react-native'
import React, { useState } from 'react'
import AuthScreenLayout from './AuthScreenLayout'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome6'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RootStackParamList } from '../navigations/StackNavigation'
import axios from 'axios'

const RegisterScreen = () => {

    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

    const [email , setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [error, setError] = useState<string | null>(null);

    const [isFormSubmit, setFormSubmit] = useState(false);

    const HandleRegisterPage = async()=>{
      try {
        const user = {email, password, name}
        const res = await axios.post("http://192.168.43.37:8000/api/v1/user/register", user);
        const data = res.data;
        if(res.status !== 200){
          setError(data.message);
          return;
        }
        
        setEmail("");
        setPassword("");
        setName("");
        setError(null);
        setFormSubmit(true);
        // navigation.nav;
      } catch (error) {
        if (axios.isAxiosError(error)) {
          console.log('Error message:', error.message);
          console.log('Error details:', error.response?.data);
        } else {
          console.log('Unexpected error:', error);
        }
        setError("Server error");
      }
    }

  return (
  <AuthScreenLayout>
    {!isFormSubmit ?<KeyboardAvoidingView style={{marginVertical: 20}}>
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
            value={name}
            onChangeText={setName}
            placeholder='Enter name' 
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
            value={email}
            onChangeText={setEmail}
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
            value={password}
            onChangeText={setPassword}
            placeholder='Enter password' 
            placeholderTextColor="#61677A"
            secureTextEntry={true}
            style={{
              paddingHorizontal: 10,
              color: "#000000",
              width: 260
            }}/>
        </View>
        {error && <Text style={{color: "red", paddingVertical: 7}}>{error}</Text>}
        <TouchableOpacity onPress={HandleRegisterPage} style={{backgroundColor: "#FF9A00", alignItems: 'center', paddingVertical: 8, borderRadius: 5}}>
          <Text style={{color: "#FFFFFF", fontSize: 16, fontWeight: "600"}}>Register</Text>
        </TouchableOpacity>
        <Pressable onPress={()=>navigation.goBack()}>
          <Text style={{color: "#2F3645", alignSelf: 'center', fontSize: 13, marginTop: 50}}>Already have an account? Sign in</Text>
        </Pressable>
    </KeyboardAvoidingView>
        :
      <View>
        <Text style={{color: "#000000", fontSize: 15}}>
          Verification mail sent on your mail box. Verify email
        </Text>
        <Pressable onPress={()=> navigation.goBack()} style={{borderWidth: 1, borderColor: "#AAAAAA", paddingVertical: 10, paddingHorizontal: 18}}>
          <Text style={{color: "#000000", fontSize: 15}}>
            Go to Login
          </Text>
        </Pressable>
      </View>
    }
  </AuthScreenLayout>
  )
}

export default RegisterScreen