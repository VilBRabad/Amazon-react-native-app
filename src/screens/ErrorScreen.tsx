import { Dimensions, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import Icon from "react-native-vector-icons/Ionicons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { Image } from '@rneui/base';

const {width} = Dimensions.get("window");

const ErrorScreen = () => {
  return (
    <View style={{backgroundColor: "#fafafa", flex: 1}}>
      <LinearGradient
        colors={["#84d8e2", "#a5e6cf"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 4 }}
      >
        <StatusBar backgroundColor="transparent" translucent barStyle="dark-content" />
        <View style={styles.searchContainer}>
          <View style={styles.searchComps}>
            <Icon name='search' size={24} color="#45474B" />
            <TextInput placeholder='Search Amazon.in' placeholderTextColor="#686D76" style={styles.searchInput} />
            <MaterialIcons name='keyboard-voice' size={24} color="#45474B" />
          </View>
        </View>
      </LinearGradient>
      <View style={{width, height: '65%'}}>
        <Image source={require("../assets/images/dog.jpg")} style={{width, height:"100%", resizeMode: "contain"}}/>
      </View>
      <View style={{paddingHorizontal: 20}}>
        <Text style={{color: "#000000", fontSize: 35, fontWeight: "500"}}>PAGE NOT FOUND</Text>
        <Text style={{color: "#000000"}}>Try after some times.</Text>
        <TouchableOpacity style={{height: 50, marginTop: 20, borderWidth: 2, borderColor: "#DDDDDD", backgroundColor: "#EEEEEE", alignItems: 'center', justifyContent: "center"}}>
          <Text style={{color: "#088395"}}>TRY AGAIN</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
  searchContainer: {
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchInput: {
    color: "#000000",
    paddingHorizontal: 18,
    width: "80%",
    height: 45
  },
  searchComps: {
    borderRadius: 6,
    width: "90%",
    backgroundColor: "#FFFFFF",
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 28
  },
})

export default ErrorScreen