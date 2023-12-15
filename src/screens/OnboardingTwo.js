import React from "react";
import { View, Text, ImageBackground, StyleSheet } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import GlobalColors from "../styles/globalColors";

const OnboardingTwo = () => {
    return (
        <ImageBackground
        source={require('../../assets/images/onboard_2.jpg')}
        style={styling.backgroundImage}
        >
            <View style={styling.gradient}></View>
            {/* <LinearGradient
            colors={["rgba(241, 247, 238, 1)", "rgba(241, 247, 238, 0)"]}
            style={styling.gradient}
            >

            </LinearGradient> */}

        </ImageBackground>
    )

}

const styling = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center'
    },
    gradient: {
        flex: 1,
        justifyContent: "center",
        backgroundColor: 'rgba(255, 255, 255, 0.25)'
    }
});

export default OnboardingTwo;