import { NavigationContainer, NavigatorScreenParams } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import Icon from "react-native-vector-icons/MaterialCommunityIcons"
import Ionicons from "react-native-vector-icons/Ionicons"
import AccountScreen from "../screens/AccountScreen";
import CartScreen from "../screens/CartScreen";
import ErrorScreen from "../screens/ErrorScreen";
import { Text } from "react-native";

export type RootStackParamList = {
    Login: undefined;
    Register: undefined;
    Main: undefined;
}

export type RootTabParamList = {
    Home: undefined;
    You: undefined;
    Cart: undefined;
    Menu: undefined;
    Login: undefined;
}

const Stack = createNativeStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator<RootTabParamList>();

function BottomTabMain() {
    return (
        <Tab.Navigator sceneContainerStyle={{borderColor: "#000", borderWidth: 1}}>
            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        focused
                            ? <Icon name="home" color="#088395" size={25} />
                            : <Icon name="home-outline" color="#373A40" size={25} />
                    ),
                    tabBarLabel: ({ focused }) => (
                        <Text style={{ color: focused ? '#088395' : '#373A40', fontSize: 10, fontWeight: focused?"500": "400" }}>
                            Home
                        </Text>
                    ),
                }}
            />
            <Tab.Screen
                name="You"
                component={AccountScreen}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        focused
                            ? <Ionicons name="person" color="#088395" size={21} />
                            : <Ionicons name="person-outline" color="#373A40" size={21} />
                    ),
                    tabBarLabel: ({ focused }) => (
                        <Text style={{ color: focused ? '#088395' : '#373A40', fontSize: 10, fontWeight: focused?"500": "400" }}>
                            You
                        </Text>
                    ),
                }}
            />
            <Tab.Screen
                name="Cart"
                component={CartScreen}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        focused
                            ? <Ionicons name="cart" color="#088395" size={25} />
                            : <Ionicons name="cart-outline" color="#373A40" size={25} />
                    ),
                    tabBarLabel: ({ focused }) => (
                        <Text style={{ color: focused ? '#088395' : '#373A40', fontSize: 10, fontWeight: focused?"500": "400" }}>
                            Cart
                        </Text>
                    ),
                }}
            />
            <Tab.Screen
                name="Menu"
                component={ErrorScreen}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <Ionicons name="menu" color={`${focused?"#088395":"#373A40"}`} size={25} />
                    ),
                    tabBarLabel: ({ focused }) => (
                        <Text style={{ color: focused ? '#088395' : '#373A40', fontSize: 10, fontWeight: focused?"500": "400" }}>
                            Menu
                        </Text>
                    ),
                }}
            />
        </Tab.Navigator>
    );
}

export const Navigatior = () => {
    

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login">
                <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
                <Stack.Screen name="Register" component={RegisterScreen} options={{ headerShown: false }} />
                <Stack.Screen name="Main" component={BottomTabMain} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
