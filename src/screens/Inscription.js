import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, TextInput, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import GlobalColors from "../styles/globalColors";

const Inscription = () => {
    return (
        <View style={{ flex: 1, }}>
            <View style={{ width: "100%", height: "25%", justifyContent: "center", alignItems: "center", marginTop: 24 }}>
                <Image source={require("../../assets/images/logo-in-app.png")} style={{}} />
            </View>

            <View style={styleSheet.main}>
                <Text style={styleSheet.title}>Créer un compte</Text>
                <Text style={styleSheet.subTitle}>Nous vous aidons à obtenir votre permis !</Text>

                <View style={styleSheet.inputContainer}>
                    <Text style={styleSheet.label}>Votre nom<Text style={{ color: "#E31919", letterSpacing: -2 }}> *</Text></Text>
                    <TextInput style={styleSheet.inputField} placeholder="" />
                </View>

                <View style={styleSheet.inputContainer}>
                    <Text style={styleSheet.label}>Numéro de Téléphone<Text style={{ color: "#E31919", letterSpacing: -2 }}> *</Text></Text>
                    <TextInput style={styleSheet.inputField} placeholder="" keyboardType="phone-pad" />
                </View>

                <TouchableOpacity style={styleSheet.button}>
                    <Text style={styleSheet.buttonText}>S'inscrire</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

// borderWidth: 1, borderColor: "#202020", 

const styleSheet = StyleSheet.create({
    logoImage: {
        width: 200,
        height: 200,
        resizeMode: "contain",
    },
    title: {
        fontSize: 32,
        color: GlobalColors.dark,
        fontFamily: 'Inter-Bold',
        marginBottom: 8
    },
    subTitle: {
        fontSize: 16,
        fontFamily: 'Inter-Regular',
        marginBottom: 32,
    },
    main: {
        // borderWidth: 1, borderColor: "#202020",
        flex: 1,
        paddingHorizontal: 24,
    },
    inputContainer: {
        width: '100%',
        marginBottom: 24,
        // borderWidth: 1, borderColor: "#202020",
    },
    label: {
        color: GlobalColors.dark,
        marginBottom: 8,
    },
    inputField: {
        backgroundColor: GlobalColors.light,
        borderWidth: 1,
        borderColor: GlobalColors.dark,
        padding: 10,
        borderRadius: 25,
        fontSize: 18,
    },
    button: {
        width: '100%',
        backgroundColor: GlobalColors.primary,
        height: 48,
        borderRadius: 25,
        alignItems: 'center',
        display: "flex",
        justifyContent: "center",
        marginTop: 24,
    },
    buttonText: {
        color: GlobalColors.light,
        fontSize: 20,
        fontFamily: 'Inter-Medium',
        textAlign: 'center',
    },
});

export default Inscription;