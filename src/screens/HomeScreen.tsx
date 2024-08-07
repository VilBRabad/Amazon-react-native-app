import { Dimensions, FlatList, Image, ScrollView, StatusBar, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import Icon from "react-native-vector-icons/Ionicons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Foundation from "react-native-vector-icons/Foundation";
import SliderImage from '../components/SliderImage';
import HomeCards from '../components/HomeCards';


type catType = {
  title: string;
  img: string;
}

const {width} = Dimensions.get("window");

const categories: catType[] = [
  {
    img: "https://m.media-amazon.com/images/I/21e7JlufxHL._SX100_SY100_.png",
    title: "Deals"
  },
  {
    img: "https://m.media-amazon.com/images/I/21OQxhu8jVL._SX100_SY100_.png",
    title: "Fashion"
  },
  {
    img: "https://m.media-amazon.com/images/I/21772oi1S5L._SX100_SY100_.png",
    title: "Mobiles"
  },
  {
    img: "https://m.media-amazon.com/images/I/21-KyLCqfeL._SX100_SY100_.png",
    title: "Electronics"
  },
  {
    img: "https://m.media-amazon.com/images/I/21T-hsdBuTL._SX100_SY100_.png",
    title: "Mini TV"
  },
  {
    img: "https://m.media-amazon.com/images/I/21CPnfp-rjL._SX100_SY100_.png",
    title: "Prime"
  },
  {
    img: "https://m.media-amazon.com/images/I/21CPnfp-rjL._SX100_SY100_.png",
    title: "Groceries"
  },
  {
    img: "https://m.media-amazon.com/images/I/21LkzXxJj0L._SX100_SY100_.png",
    title: "Home"
  },
  {
    img: "https://m.media-amazon.com/images/I/21pGE2jlDiL._SX100_SY100_.png",
    title: "Beuty"
  },
  {
    img: "https://m.media-amazon.com/images/I/21ydpFkOlhL._SX100_SY100_.png",
    title: "Pharmacy"
  },
  {
    img: "https://m.media-amazon.com/images/I/21gRDXgpZuL._SX100_SY100_.png",
    title: "Furniture"
  },
  {
    img: "https://m.media-amazon.com/images/I/21+myqM227L._SX100_SY100_.png",
    title: "Movies"
  },
  {
    img: "https://m.media-amazon.com/images/I/214z4vV3vPL._SX100_SY100_.png",
    title: "Book,.."
  },
  {
    img: "https://m.media-amazon.com/images/I/21EBwejbXrL._SX100_SY100_.png",
    title: "Applieances"
  },
]

const services: catType[] = [
  {
    title: "Amazon pay",
    img: "https://m.media-amazon.com/images/I/11kLTelqWwL._SS140_FMpng_.png"
  },
  {
    title: "Recharge",
    img: "https://m.media-amazon.com/images/I/21XMUc6EcCL._SS140_FMpng_.png"
  },
  {
    title: "Rewards",
    img: "https://m.media-amazon.com/images/I/31oWBlN-zCL._SS140_FMpng_.png"
  },
  {
    title: "Pay Bills",
    img: "https://m.media-amazon.com/images/I/21ejUpPG2BL._SS140_FMpng_.png"
  }
]


type clothsTrend={
  id: string;
  img: string;
  percentageOff?: number;
  salesName?: string;
  price: number;
  originalPrice?: number;
}

const trendingInCloths: clothsTrend[] = [
  {
    id: '1',
    img: "https://m.media-amazon.com/images/I/51FICIl4KjL._AC_SY310_.jpg",
    percentageOff: 88,
    salesName: "Greate Freedom Sales",
    price: 599,
    originalPrice: 4999
  },
  {
    id: '2',
    img: "https://m.media-amazon.com/images/I/71G70WFtnaL._AC_SY310_.jpg",
    percentageOff: 88,
    salesName: "Greate Freedom Sales",
    price: 349,
    originalPrice: 2999
  },
  {
    id: '3',
    img: "https://m.media-amazon.com/images/I/71eUwDk8z+L._AC_SY310_.jpg",
    percentageOff: 41,
    salesName: "Greate Freedom Sales",
    price: 649,
    originalPrice: 1099
  },
  {
    id: '4',
    img: "https://m.media-amazon.com/images/I/610IIi6wHuL._AC_SY310_.jpg",
    percentageOff: 86,
    salesName: "Greate Freedom Sales",
    price: 419,
    originalPrice: 2999
  },
]

const HomeScreen = () => {
  return (
    <>
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
      <ScrollView>
        <LinearGradient colors={["#bbebe9", "#c8f1e1"]} start={{ x: 0, y: 0 }} end={{ x: 2, y: 4 }}>
          <View style={styles.addressContainer}>
            <Icon name='location-outline' size={22} color="#45474B" />
            <Text style={{ color: "#45474B", fontSize: 13, fontWeight: '400', marginLeft: 5, marginRight: 2 }}>Delivery to Vilas - Pune 411048</Text>
            <MaterialIcons name='keyboard-arrow-down' size={25} color="#45474B" />
          </View>
        </LinearGradient>
        <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} colors={["#ffe0c1", "#fcfcf0", "#ecf6d5"]}>
          <ScrollView horizontal={true} style={styles.categoryContainer}>
            <FlatList
              data={categories}
              numColumns={15}
              style={{ paddingRight: 10 }}
              keyExtractor={item => item.title}
              renderItem={({ item }) => (
                <View style={styles.cateContainer}>
                  <Image source={{ uri: item.img }} height={50} width={50} />
                  <Text style={{ color: "#45474B", fontSize: 12, fontWeight: '500' }}>{item.title}</Text>
                </View>
              )}
            />
          </ScrollView>
        </LinearGradient>
        <View style={styles.sliderContainer}>
          <SliderImage />
        </View>
        <ScrollView horizontal={true} style={{ flexDirection: 'row', marginTop: -18, paddingHorizontal: 10,}}>
          <LinearGradient colors={["#ffe0c1", "#fcfcf0", "#ecf6d5"]} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }}>
            <View style={{ height: "auto", width: 170, alignItems: 'center', paddingVertical: 8 }}>
              <FlatList
                data={services}
                numColumns={2}
                contentContainerStyle={{ justifyContent: 'center', alignItems: 'center', height: "100%" }}
                renderItem={({ item }) => (
                  <View style={{ width: '50%', alignItems: 'center', padding: 4 }}>
                    <Image source={{ uri: item.img }} style={{ height: 50, width: 50 }} />
                    <Text numberOfLines={1} ellipsizeMode='tail' style={{ color: '#000000', fontSize: 13 }}>{item.title}</Text>
                  </View>
                )}
              />
            </View>
          </LinearGradient>
          <View style={{width: 144, height: 'auto', backgroundColor: "#FFFFFF", marginLeft: 10, padding: 10}}>
            <Text style={{color: "#000000", marginBottom: 10}}>Keep shoping for</Text>
            <Image source={{uri: "https://m.media-amazon.com/images/I/41dKxEFUTrL._MCnd_AC_.jpg"}} style={{width: "95%", height: 100, resizeMode: "contain"}}/>
          </View>
          <View style={{height: "auto", width: "auto", marginLeft: 10}}>
            <Image style={{height: 170, width: 128, resizeMode: 'contain'}} source={{uri: "https://m.media-amazon.com/images/I/51Vh9Fk4jfL._SR270,360_.png"}}/>
          </View>
          <View style={{height: "auto", width: "auto", marginLeft: 10}}>
            <Image style={{height: 170, width: 128, resizeMode: 'contain'}} source={{uri: "https://m.media-amazon.com/images/I/31mpg9drgYL._SY360_.jpg"}}/>
          </View>
          <View style={{height: "auto", width: "auto", marginLeft: 10}}>
            <Image style={{height: 170, width: 128, resizeMode: 'contain'}} source={{uri: "https://m.media-amazon.com/images/I/31ygXcz0UkL._SR270,360_.jpg"}}/>
          </View>
          <View style={{height: "auto", width: "auto", marginLeft: 10}}>
            <Image style={{height: 170, width: 128, resizeMode: 'contain'}} source={{uri: "https://m.media-amazon.com/images/I/31oIgf0EFNL._SR270,360_.jpg"}}/>
          </View>
          <View style={{height: "auto", width: "auto", marginLeft: 10}}>
            <Image style={{height: 170, width: 128, resizeMode: 'contain'}} source={{uri: "https://m.media-amazon.com/images/I/31RIkYm1qML._SR270,360_.jpg"}}/>
          </View>
          <View style={{height: "auto", width: "auto", marginLeft: 10, marginRight: 20}}>
            <Image style={{height: 170, width: 128, resizeMode: 'contain'}} source={{uri: "https://m.media-amazon.com/images/I/515ztwtzavL._SR270,360_.png"}}/>
          </View>
        </ScrollView>
        <Image style={{width, height: 68, resizeMode: "contain", marginVertical: 8}} source={{uri: 'https://m.media-amazon.com/images/I/41WtE1pQuhL._SR1264,200_.jpg'}}/>
        <View>
          <Image style={{width, height: 221, resizeMode: "contain"}} source={{uri: "https://m.media-amazon.com/images/S/al-eu-726f4d26-7fdb/0b1ab0d6-8b43-4cdd-b07d-423cb786785d._CR0,0,1199,628_PT0_BL0_SX600_SY325_QL95_FMwebp_.jpg"}}/>

          <View style={{paddingHorizontal: 15, paddingVertical: 10, backgroundColor: "#FFFFFF", shadowColor: "#202020", shadowRadius: 5}}>
              <Text numberOfLines={1} style={{color: "#000000"}}>Samsung Galaxy Z Fold6 5G AI Smartphone (Silver Shadow, 12GB RAM, 256GB Storage)</Text>
              <Text style={{color: "#000000", fontWeight: "500"}}>₹ 1,64,999</Text>
          </View>
          <Text style={{color: "#505050", fontSize: 13, alignSelf: "flex-end", marginRight: 8}}>sponsored <Foundation name='info' /> </Text>
        </View>
        <View style={{padding: 14, alignItems: "center"}}>
          <Text style={{color: "#000000", fontWeight: "500", alignSelf: "flex-start"}}>Trending Deals</Text>
          <View style={{backgroundColor: "#FAFAFA", padding: 5, flexDirection: "row", flexWrap: "wrap", shadowColor: '#45474B', shadowOffset: { width: 0, height: 1 },  shadowOpacity: 0.4,  shadowRadius: 4, elevation: 1,}}>
              <HomeCards data={trendingInCloths}/>
          </View>
        </View>
      </ScrollView>
    </>
  )
}

const styles = StyleSheet.create({
  searchContainer: {
    height: 100,
    // backgroundColor: "#37B7C3",
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
  addressContainer: {
    height: 40,
    flexDirection: 'row',
    borderTopWidth: 0.3,
    borderColor: "#50727B",
    alignItems: 'center',
    paddingHorizontal: 10
  },
  categoryContainer: {
    flexDirection: 'row',
    paddingVertical: 10,
    gap: 25,
  },
  cateContainer: {
    height: 80,
    width: 80,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 2
  },
  sliderContainer: {
    // height: "auto",
    borderTopWidth: 0.3,
    borderColor: "#50727B",
    backgroundColor: "#000000"
  }
})

export default HomeScreen
