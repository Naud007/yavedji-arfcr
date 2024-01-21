import React, { useEffect, useState } from "react";
import { View, Text, Dimensions } from "react-native";
import { useSelector, useDispatch } from "react-redux";

import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { useTheme } from "react-native-paper";
import { Ionicons, Feather } from "@expo/vector-icons";

import Onboarding from "../src/screens/Onboarding";
import Welcome from "../src/screens/Welcome";
import OnboardingTwo from "../src/screens/OnboardingTwo";
import Inscription from "../src/screens/Inscription";
import Connexion from "../src/screens/Connexion";
import LicenceSwitch from "../src/screens/LicenceType";
import PreferenceLangue from "../src/screens/ChoixLangue";
import Subscription from "../src/screens/Subscription";
import Succes from "../src/screens/Succes";
import Acceuil from "../src/screens/Acceuil";
import GlobalColors from "../src/styles/globalColors";

const Stack = createNativeStackNavigator();
const Tab = createMaterialTopTabNavigator();
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
                            backgroundColor: colors.white
                        }
                    }}
                >
                    {loggedIn ? (
                        <Stack.Screen name="Home" component={TopTapNavBar}
                            options={{
                                header: () => (
                                    <View style={{ height: 30 }} />
                                )
                            }}
                        />
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

                            <Stack.Screen name="Connexion" component={Connexion}

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

                            <Stack.Screen name="SelectLicence" component={LicenceSwitch}

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

                            <Stack.Screen name="SelectLangue" component={PreferenceLangue}

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

                            <Stack.Screen name="Subscribe" component={Subscription}

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

                            <Stack.Screen name="FinOnboarding" component={Succes}

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

function TopTapNavBar() {
    const { colors } = useTheme();

    return (
        <Tab.Navigator
            initialRouteName="Acceuil"
            sceneContainerStyle={{ backgroundColor: 'transparent' }}
            screenOptions={{
                swipeEnabled: false,
                tabBarShowIcon: true,
                tabBarShowLabel: false,
                tabBarActiveTintColor: colors.dark,
                tabBarInactiveTintColor: colors.dark,
                tabBarStyle: {
                    backgroundColor: colors.white,
                    height: 60,
                    elevation: 0,
                    shadowOpacity: 0,
                    borderBottomWidth: 0,
                    // borderWidth: 1, borderColor: "#202020", 
                },
                tabBarIconStyle: {
                    height: 32,
                    alignItems: 'center',
                    justifyContent: 'center',
                    // borderWidth: 1, borderColor: "#202020",
                },
                tabBarPressColor: colors.light,
                tabBarIndicator: () => null,
            }}
        >
            <Tab.Screen name="Menu" component={Welcome}
                options={{
                    tabBarIcon: ({ color, focused }) => (

                        focused ?
                            <View style={{ backgroundColor: GlobalColors.white, width: 48, height: 48, alignItems: 'center', justifyContent: 'center', position: 'absolute', right: "100%" }} >
                                <Ionicons name="menu" size={24} color={color} />
                            </View>
                            :
                            <View style={{ backgroundColor: GlobalColors.white, width: 48, height: 48, alignItems: 'center', justifyContent: 'center', position: 'absolute', right: "100%"}} >
                                <Ionicons name="menu" size={24} color={color} />
                            </View>
                    )
                }}
            />

            <Tab.Screen name="Acceuil" component={Acceuil}
                options={{

                    tabBarIcon: ({ color, focused }) => (

                        focused ?

                            <View style={{ minWidth: 80, alignItems: 'center' }} >
                                <Text numberOfLines={1} adjustsFontSizeToFit style={{ fontSize: 24, color: colors.primary, fontFamily: 'LeckerliOne-Regular' }} >ARFCR</Text>
                            </View>

                            :

                            <View style={{ minWidth: 80, alignItems: 'center' }} >
                                <Text numberOfLines={1} adjustsFontSizeToFit style={{ fontSize: 24, color: color, fontFamily: 'LeckerliOne-Regular' }} >ARFCR</Text>
                            </View>

                    )
                }}
            />

            <Tab.Screen name="Settings" component={Welcome}
                options={{
                    tabBarIcon: ({ color, focused }) => (

                        focused ?
                            <View style={{ backgroundColor: GlobalColors.white, width: 48, height: 48, alignItems: 'center', justifyContent: 'center', position: 'absolute', left: "100%" }} >
                                <Feather name="settings" size={24} color={color} />
                            </View>
                            :
                            <View style={{ backgroundColor: GlobalColors.white, width: 48, height: 48, alignItems: 'center', justifyContent: 'center', position: 'absolute', left: "100%"}} >
                                <Feather name="settings" size={24} color={color} />
                            </View>
                    )
                }}
            />
        </Tab.Navigator>
    )
}