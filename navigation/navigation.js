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
import OnboardingTwo from "../src/screens/OnboardingTwo";
import Inscription from "../src/screens/Inscription";

const Stack = createNativeStackNavigator();
// const Tab = createMaterialTopTabNavigator();
const BottomTab = createBottomTabNavigator();

export default function Navigation() {
    const { colors } = useTheme();

    const appFirstLaunch = useSelector((state) => state.appSettingsReducer.appFirstLaunch);
    const loggedIn = useSelector((state) => state.appSettingsReducer.loggedIn);
    const profileData = useSelector((state) => state.appProfileReducer.profileData);

    return (

        appFirstLaunch ?

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
                    {loggedIn ? (
                        <Stack.Screen name="Welcome" component={Welcome} />
                    ) : (
                        <>
                            <Stack.Screen name="GetStarted" component={OnboardingTwo}
                                options={{
                                    animation: "slide_from_right",
                                    headerStyle: {
                                        backgroundColor: colors.light,
                                        elevation: 0,
                                        shadowOpacity: 0,
                                        borderBottomWidth: 0,
                                    },
                                    headerTitle: () => {
                                        null
                                    },
                                    headerShadowVisible: false,
                                    headerShown: false
                                }}
                            />

                            <Stack.Screen name="Inscription" component={Inscription}

                                options={{
                                    animation: "slide_from_right",
                                    headerStyle: {
                                        backgroundColor: colors.light,
                                        elevation: 0,
                                        shadowOpacity: 0,
                                        borderBottomWidth: 0,
                                    },
                                    headerTitle: () => {
                                        null
                                    },
                                    headerShadowVisible: false,
                                    headerShown: false
                                }}
                            />
                        </>
                    )}

                </Stack.Navigator>

            </NavigationContainer>

    );
}