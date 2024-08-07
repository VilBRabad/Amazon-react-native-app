import { StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import LinearGradient from 'react-native-linear-gradient'
import Icon from "react-native-vector-icons/Ionicons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Octicons from "react-native-vector-icons/Octicons";
import { CheckBox } from '@rneui/themed';
import { Image } from '@rneui/base';

const CartScreen = () => {

  const [isChecked, setChecked] = useState(false);

  return (
    <View style={{ backgroundColor: "#FFFFFF" }}>
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

      <View style={{ padding: 10 }}>
        <Text style={{ color: "#000000", fontSize: 20 }}>
          <Text>Subtotal</Text>
          <Text style={{ fontSize: 15, alignSelf: "baseline" }}> ₹</Text>
          <Text style={{ fontWeight: "bold" }}> 33,990</Text>
        </Text>
        <View style={{ paddingHorizontal: 10, marginTop: 10, flexDirection: "row", alignItems: 'center', gap: 8 }}>
          <View style={{ height: 13, borderRadius: 100, width: "85%", backgroundColor: "#379777" }} />
          <Text style={{ color: "#000000", fontSize: 15 }}>₹499</Text>
        </View>
        <View style={{ flexDirection: 'row', paddingHorizontal: 10, gap: 4 }}>
          <Icon name='checkmark-circle' size={24} color="#379777" />
          <Text style={{ color: "#379777", fontWeight: "bold", fontSize: 15 }}>Your order is eligible for FREE Delivery.</Text>
        </View>
        <Text style={{ color: "#555555", marginLeft: 40 }}>Choose <Text style={{ color: "#379777" }}>FREE Delivery</Text> option at checkout.</Text>

        <TouchableOpacity style={{ margin: 10, marginVertical: 20, height: 52, alignItems: "center", justifyContent: "center", backgroundColor: "#F4CE14", borderRadius: 100 }}>
          <Text style={{ color: "#000000", fontWeight: '500' }}>Proceed to Buy (1 item)</Text>
        </TouchableOpacity>
      </View>
      <View style={{flexDirection: "row", alignItems: 'center'}}>
        <CheckBox
          checked={isChecked}
          onPress={() => setChecked(!isChecked)}
          // Use ThemeProvider to make change for all checkbox
          iconType="material-community"
          checkedIcon="checkbox-marked"
          uncheckedIcon="checkbox-blank-outline"
          checkedColor="#379777"
          size={30}
        />
        <Text style={{color: "#222222", fontSize: 15}}>Send as a gift. Include custome message</Text>
      </View>
      <View style={{backgroundColor: "#888888", height: 0.6, marginHorizontal: 20}}/>
      <View style={{padding: 20}}>
        <Text style={{color: "#379777", fontWeight: "500"}}>Deselect all items</Text>
        <View style={{marginVertical: 20}}>
          <View style={{flexDirection: "row", gap: 8}}>
            <Image source={{uri: "https://m.media-amazon.com/images/I/513p8BwV-RL._AC_SY145_.jpg"}} style={{width:130, height: 130, resizeMode: "contain"}}/>
            <View style={{width:"65%"}}>
              <Text numberOfLines={2} ellipsizeMode='tail' style={{color: "#222222", fontSize: 15}}>Acer Aspire Lite AMD Ryzen 5 5500U Premium Thin and Light Laptop (16 GB RAM/512 GB SSD/Windows 11 Home) AL15-41, 39.62 cm (15.6") Full HD Display, Metal Body, Steel Gray, 1.59 KG</Text>
              <Text numberOfLines={2} ellipsizeMode='tail' style={{color: "#222222"}}>500+ bought in past month</Text>
              <View style={{flexDirection: "row", alignItems: "center", gap: 5}}>
                <Text style={{paddingVertical: 5, paddingHorizontal: 8, backgroundColor: "#F5004F", color: '#FFFFFF', alignSelf: "flex-start", borderRadius: 5, fontSize: 12}}>43% off</Text>
                <Text style={{color: "#F5004F", fontWeight: "500", fontSize: 12}}>Greate Freedom Sale</Text>
              </View>
              <View style={{flexDirection: "row", gap: 8}}>
                <Text style={{color: "#000000", fontWeight: "bold", fontSize: 20}}>₹33,990</Text>
                <View>
                  <Text style={{color: "#555555", fontSize: 14}}>M.R.P.</Text>
                  <Text style={{color: "#555555", fontSize: 14, textDecorationStyle: "solid", textDecorationLine: "line-through"}}>₹59,990</Text>
                </View>
              </View>
              <Text style={{color: "#444444", marginTop: 3}}>Eligible for FREE Shipping</Text>
              <Text style={{color: "#399918", marginTop: 3, fontWeight: "semibold"}}>In stock</Text>
              <Text style={{color: "#000000", marginTop: 3}}><Text style={{fontWeight: "500"}}>Style Name: </Text> Aspire Lite R5 16GB/512GB</Text>
              <Text style={{color: "#379777", marginTop: 3, fontWeight: "semibold"}}>7 days Replacement by Brand</Text>
            </View>
          </View>
          <View style={{flexDirection: "row", gap:10, marginTop: 8}}>
            <View style={{width: "auto", borderWidth: 1, borderColor: "#CCCCCC", borderRadius: 8, flexDirection: "row", alignItems: "center", alignSelf: 'flex-start'}}>
              <TouchableOpacity style={{paddingHorizontal: 15, borderRightWidth: 1, borderColor: "#CCCCCC", paddingVertical: 5, backgroundColor: "#EEEEEE", alignSelf: "flex-start"}}>
                <Octicons name='trash' size={20} color="#222222"/>
              </TouchableOpacity>
              <Text style={{color: "#379777", paddingHorizontal: 15, fontSize: 18, fontWeight: "semibold"}}>1</Text>
              <TouchableOpacity style={{paddingHorizontal: 15, borderLeftWidth: 1, borderColor: "#CCCCCC", paddingVertical: 5, backgroundColor: "#EEEEEE", alignSelf: "flex-start"}}>
                <Octicons name='plus' size={20} color="#222222"/>
              </TouchableOpacity>
            </View>
            <TouchableOpacity style={{borderWidth: 2, borderColor: "#DDDDDD", paddingHorizontal: 12, paddingVertical: 4, borderRadius: 100}}>
              <Text style={{color: "#111111"}}>Delete</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{borderWidth: 2, borderColor: "#DDDDDD", paddingHorizontal: 12, paddingVertical: 4, borderRadius: 100}}>
              <Text style={{color: "#111111"}}>Save for later</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  )
}

export default CartScreen

const styles = StyleSheet.create({
  searchContainer: {
    height: 100,
    // backgroundColor: "#37B7C3",
    alignItems: 'center',
    justifyContent: 'center',
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
  searchInput: {
    color: "#000000",
    paddingHorizontal: 18,
    width: "80%",
    height: 45
  },
})