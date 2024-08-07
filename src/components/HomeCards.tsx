import { View, Text, FlatList, Image } from 'react-native'
import React from 'react'

type clothsTrend={
    id: string;
    img: string;
    percentageOff?: number;
    salesName?: string;
    price: number;
    originalPrice?: number;
  }

type HomeCardsProps = {
    data: clothsTrend[];
}

const HomeCards = ({data}: HomeCardsProps) => {
  return (
    data.map((item, _)=>(
        <View key={item.id} style={{width:"48%", height: "auto", margin: 3, alignItems: 'center'}}>
            <View style={{height: 140, width: "100%", alignItems: 'center', backgroundColor: "#FFFFFF"}}>
                <Image source={{uri: item.img}} style={{width: 100, height: "100%", resizeMode: "contain"}}/>
            </View>
            <View style={{width: "100%", padding: 5}}>
                <Text style={{backgroundColor: "#E4003A", padding: 6, color: "#FFFFFF", fontWeight: "500", alignSelf: "flex-start"}}>{item?.percentageOff}% off</Text>
                <Text style={{color: "#E4003B", fontWeight: "bold"}}>{item?.salesName}</Text>
                <Text style={{color: "#000000", fontWeight: "bold"}}>₹ {item.price}</Text>
                <Text style={{color: "#686D76"}}>M.R.P.: <Text style={{textDecorationStyle: "solid", textDecorationLine: "line-through"}}>₹ {item?.originalPrice}</Text></Text>
            </View>
        </View>
    ))
  )
}

export default HomeCards