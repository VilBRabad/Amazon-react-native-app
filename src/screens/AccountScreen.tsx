import { Image, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import Icon from "react-native-vector-icons/Ionicons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { RootTabParamList } from '../navigations/StackNavigation';
import { BottomTabScreenProps } from "@react-navigation/bottom-tabs"
import { useUser } from '../context/loggedInUser';

type AccountScreenProps = BottomTabScreenProps<RootTabParamList, 'You'>;

const AccountScreen: React.FC<AccountScreenProps> = ({ navigation }) => {


  // const stackNavigation = useNavigation();

  const { logout, user } = useUser();

  const naviagetToLogin = ()=>{
    navigation.reset({
      index: 0,
      routes: [{ name: "Login" }]
    })
  }

  const logoutHandle = async () => {
    logout();
    naviagetToLogin();
  }

  return (
    <View style={{ backgroundColor: "#FFFFFF" }}>
      <LinearGradient
        colors={["#84d8e2", "#a5e6cf"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 4 }}
      >
        <StatusBar backgroundColor="transparent" translucent barStyle="dark-content" />
        <View style={styles.searchContainer}>
          <View style={styles.elementCont}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Image source={require("../assets/images/amazon_logo.png")} style={{ width: 90, resizeMode: "contain" }} />
              <Text style={{ color: "#000000" }}>.in</Text>
            </View>
            <View style={{ flexDirection: "row", gap: 10 }}>
              <Icon name='settings-outline' size={24} color="#000000" />
              <Icon name='notifications-outline' size={24} color="#000000" />
              <Icon name='search' size={24} color="#000000" />
            </View>
          </View>
        </View>
      </LinearGradient>
      <ScrollView>
        {user ? <View style={{ flexDirection: "row", justifyContent: 'space-between', paddingHorizontal: 10, paddingVertical: 2 }}>
          <View style={{ flexDirection: "row", alignItems: 'center', gap: 5 }}>
            <Icon name='person-circle' size={35} color="#45474B" />
            <Text style={{ color: "#000000", fontWeight: "500", fontSize: 16 }}>Hello, {user.name}</Text>
            <MaterialIcons name='keyboard-arrow-down' size={25} color="#45474B" />
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 5 }}>
            <Image height={20} width={20} source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLvMkoPFEBjp-8KsyNNgIQJNhylWJuxr0Ayg&s' }} />
            <Text style={{ fontSize: 16, fontWeight: "500", color: "#000000" }}>EN</Text>
          </View>
        </View>
          :
          <View style={{ flexDirection: "row", justifyContent: 'space-between', paddingHorizontal: 10, paddingVertical: 2 }}>
            <TouchableOpacity onPress={naviagetToLogin} style={{ margin: 10, marginVertical: 20, height: 52, width:"95%", alignItems: "center", justifyContent: "center", backgroundColor: "#F4CE14", borderRadius: 100 }}>
              <Text style={{ color: "#000000", fontWeight: '500' }}>Sign In</Text>
            </TouchableOpacity>
          </View>
        }
        <View style={{ padding: 10, flexDirection: 'row', gap: 10, flexWrap: "wrap" }}>
          <View style={{ alignItems: 'center', justifyContent: 'center', padding: 10, borderWidth: 2, borderColor: "#CCCCCC", backgroundColor: "#EEEEEE", width: "48%", borderRadius: 100 }}>
            <Text style={{ color: "#000000" }}>Your Orders</Text>
          </View>
          <View style={{ alignItems: 'center', justifyContent: 'center', padding: 10, borderWidth: 2, borderColor: "#DDDDDD", backgroundColor: "#EEEEEE", width: "48%", borderRadius: 100 }}>
            <Text style={{ color: "#000000" }}>Buy Again</Text>
          </View>
          <View style={{ alignItems: 'center', justifyContent: 'center', padding: 10, borderWidth: 2, borderColor: "#DDDDDD", backgroundColor: "#EEEEEE", width: "48%", borderRadius: 100 }}>
            <Text style={{ color: "#000000" }}>Your List</Text>
          </View>
          <TouchableOpacity onPress={logoutHandle} style={{ alignItems: 'center', justifyContent: 'center', padding: 10, borderWidth: 2, borderColor: "#DDDDDD", backgroundColor: "#EEEEEE", width: "48%", borderRadius: 100 }}>
            <Text style={{ color: "#000000" }}>Log out</Text>
          </TouchableOpacity>
        </View>
        <View style={{ padding: 10, paddingBottom: 30 }}>
          <Text style={{ color: "#000000", fontSize: 18, fontWeight: "bold" }}>Your Orders</Text>
          <Text style={{ color: "#666666", fontWeight: "500", fontSize: 15 }}>Hi! You have no recent orders.</Text>
          <TouchableOpacity onPress={() => navigation.navigate("Home")} style={{ width: "100%", height: 56, alignItems: 'center', justifyContent: 'center', marginTop: 8, borderWidth: 2, borderColor: "#CCCCCC", borderRadius: 6 }}>
            <Text style={{ color: "#444444", fontSize: 15, fontWeight: "500" }}>Return to the Homepage</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  )
}

export default AccountScreen

const styles = StyleSheet.create({
  searchContainer: {
    height: 100,
    // backgroundColor: "#37B7C3",
    alignItems: 'center',
    justifyContent: 'center',
  },
  elementCont: {
    borderRadius: 6,
    width: "95%",
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 28
  },
})