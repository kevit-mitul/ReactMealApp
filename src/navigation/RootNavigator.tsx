import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "../screens/HomeScreen";
import FoodDetail from "../screens/FoodDetail";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import SplashScreen from "../screens/SplashScreen";
import {StatusBar} from "expo-status-bar";


const Stack = createNativeStackNavigator();

const RootNavigator = () => {
    return (
        <>
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="Splash"
                screenOptions={{headerShown:false}}
            >
                <Stack.Screen name="Splash" component={SplashScreen} />

                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Detail" component={FoodDetail} />
            </Stack.Navigator>
        </NavigationContainer>
            <StatusBar style="dark" />
        </>
    );
};

export default RootNavigator;
