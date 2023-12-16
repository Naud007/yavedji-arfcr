import React from "react";
import { View, Text, ImageBackground, StyleSheet, TouchableOpacity } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { useNavigation } from "@react-navigation/native";

import GlobalColors from "../styles/globalColors";

const OnboardingTwo = () => {
    const navigation = useNavigation();

    return (
        <ImageBackground
            source={require('../../assets/images/onboard_2.jpg')}
            style={styling.backgroundImage}
        >
            {/* <View style={styling.gradient}></View> */}
            <LinearGradient
                colors={[
                    "rgba(241, 247, 238, 0)",
                    "rgba(241, 247, 238, 0.95)",
                    "rgba(241, 247, 238, 1)",
                ]}
                style={styling.gradient}
                locations={[0, 0.5, 1]}
            >
                <Text style={styling.headerText}>Nous vous aidons à démarrer</Text>

                <View style={{ width: "100%", position: 'absolute', bottom: "5%", alignItems: "center", }}>
                    <TouchableOpacity style={styling.button} onPress={() => navigation.navigate("Inscription")}>
                        <Text style={styling.buttonText}>Créer un nouveau compte</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={[styling.button, {backgroundColor: "rgba(255, 255, 255, 0)", marginTop: 12, borderColor: GlobalColors.dark, borderWidth: 1.5}]}>
                        <Text style={[styling.buttonText, {color: GlobalColors.dark}]}>J'ai déjà un compte</Text>
                    </TouchableOpacity>
                </View>

            </LinearGradient>

        </ImageBackground>
    )

}

const styling = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        resizeMode: 'contain',
        justifyContent: 'center'
    },
    gradient: {
        flex: 1,
        // justifyContent: "center",
        // alignItems: "center",
        backgroundColor: 'rgba(255, 255, 255, 0.25)',
    },
    headerText: {
        fontSize: 32,
        fontFamily: 'Inter-Bold',
        color: GlobalColors.dark,
        position: 'absolute',
        bottom: "30%",
        left: "5%",
        lineHeight: 40,
    },
    button: {
        width: '90%',
        backgroundColor: GlobalColors.primary,
        height: 50,
        borderRadius: 25,
        alignItems: 'center',
        display: "flex",
        justifyContent: "center",
    },
    buttonText: {
        color: GlobalColors.light,
        fontSize: 20,
        // width: '100%',
        // height: "100%",
        fontFamily: 'Inter-Medium',
        textAlign: 'center',
    },
});

export default OnboardingTwo;