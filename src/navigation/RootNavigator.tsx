import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "../screens/HomeScreen";
import MealDetail from "../screens/MealDetail";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import SplashScreen from "../screens/SplashScreen";
import {StatusBar} from "expo-status-bar";
import UserProfile from "../screens/UserProfile";


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
                <Stack.Screen name="MealDetail" component={MealDetail} />
                <Stack.Screen name="UserProfile" component={UserProfile} />
            </Stack.Navigator>
        </NavigationContainer>
            <StatusBar style="dark" />
        </>
    );
};

export default RootNavigator;
