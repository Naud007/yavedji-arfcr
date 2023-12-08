import React, { useEffect, useState } from "react";
import { View, Text, Dimensions } from "react-native";
import { useSelector, useDispatch } from "react-redux";

import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { useTheme } from "react-native-paper";

import Onboarding from "../src/screens/Onboarding";
import Welcome from "../src/screens/Welcome";

const Stack = createNativeStackNavigator();
// const Tab = createMaterialTopTabNavigator();
const BottomTab = createBottomTabNavigator();

export default function Navigation() {
    const { colors } = useTheme();

    const firstLaunch = useSelector((state) => state.appSettingsReducer.appFirstLaunch);
    const loggedIn = useSelector((state) => state.appSettingsReducer.loggedIn);
    const profileData = useSelector((state) => state.appProfileReducer.profileData);

    return (

        firstLaunch ?

            <Onboarding />
            
            :

            <NavigationContainer>

                <Stack.Navigator
                    screenOptions={{
                        contentStyle: {
                            backgroundColor: colors.light
                        }
                    }}
                >
                    <Stack.Screen name="Welcome" component={Welcome} />
                    
                </Stack.Navigator>

            </NavigationContainer>

    );
}