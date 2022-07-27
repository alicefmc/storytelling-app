import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import BottomTabNavigator from "./TabNavigator";
import StoryScreen from "../screens/StoryScreen";

const Stack = createStackNavigator()

const StackNavigator = ()=> {
    return(
        <Stack.Navigator initialRouteName = "home" screenOptions = {{headerShown : false}}>
            <Stack.Screen name = "home" component = {BottomTabNavigator}/>
            <Stack.Screen name = "storyScreen" component = {StoryScreen}/>
        </Stack.Navigator>
    )
}
export default StackNavigator