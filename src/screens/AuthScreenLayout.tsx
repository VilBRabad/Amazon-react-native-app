import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { PropsWithChildren } from 'react'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RootStackParamList } from '../navigations/StackNavigation'

type AuthScreenLayoutProps = PropsWithChildren<{
    children: JSX.Element
}>

const AuthScreenLayout = ({children}: AuthScreenLayoutProps) => {

  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <View style={styles.conatainer}>
      <Image 
        source={require("../assets/images/amazon_logo.png")}
      />
      {children}
      <Pressable onPress={()=> navigation.replace("Main")}>
        <Text style={{color: "#000000", fontSize: 15}}>Explore as guest</Text>
      </Pressable>
    </View>
  )
}

export default AuthScreenLayout

const styles = StyleSheet.create({
  conatainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})