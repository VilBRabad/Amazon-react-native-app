import { Image, StyleSheet, Text, View } from 'react-native'
import React, { PropsWithChildren } from 'react'

type AuthScreenLayoutProps = PropsWithChildren<{
    children: JSX.Element
}>

const AuthScreenLayout = ({children}: AuthScreenLayoutProps) => {
  return (
    <View style={styles.conatainer}>
      <Image 
        source={require("../assets/images/amazon_logo.png")}
      />
      {children}
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