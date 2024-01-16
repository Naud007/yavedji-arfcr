import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, TextInput, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import GlobalColors from "../styles/globalColors";

const Inscription = () => {
    const [focusedInput, setFocusedInput] = useState(null);

    const navigation = useNavigation();

    const handleInputFocus = (fieldName) => {
        setFocusedInput(fieldName);
    };

    const handleInputBlur = () => {
        setFocusedInput(null);
    };

    const isInputFocused = (fieldName) => {
        return focusedInput === fieldName;
    };

    const navigateToConnexion = () => {
        navigation.navigate("Connexion");
    }

    const navigateToLicenceSwitch = () => {
        console.log('Next to Licence type');
        navigation.navigate("SelectLicence");
    }

    return (
        <View style={{ flex: 1, }}>
            <View style={{ width: "100%", height: "25%", justifyContent: "center", alignItems: "center", marginTop: 24 }}>
                <Image source={require("../../assets/images/logo-hd.png")} style={styleSheet.logoImage} />
            </View>

            <View style={styleSheet.main}>
                <Text style={styleSheet.title}>Créer un compte</Text>
                <Text style={styleSheet.subTitle}>Nous vous aidons à obtenir votre permis !</Text>

                <View style={styleSheet.inputContainer}>
                    <Text style={styleSheet.label}>Votre Nom<Text style={{ color: "#E31919", letterSpacing: -2 }}> *</Text></Text>
                    <TextInput
                        style={[
                            styleSheet.inputField,
                            isInputFocused('name') && { borderColor: GlobalColors.primary, borderWidth: 1.5 },
                        ]}
                        placeholder=""
                        onFocus={() => handleInputFocus('name')}
                        onBlur={handleInputBlur}
                    />
                </View>

                <View style={styleSheet.inputContainer}>
                    <Text style={styleSheet.label}>Numéro de Téléphone<Text style={{ color: "#E31919", letterSpacing: -2 }}> *</Text></Text>
                    <TextInput
                        style={[
                            styleSheet.inputField,
                            isInputFocused('phone') && { borderColor: GlobalColors.primary, borderWidth: 1.5 },
                        ]}
                        placeholder=""
                        keyboardType="phone-pad"
                        onFocus={() => handleInputFocus('phone')}
                        onBlur={handleInputBlur}
                    />
                </View>

                <TouchableOpacity style={styleSheet.button}>
                    <Text onPress={navigateToLicenceSwitch} style={styleSheet.buttonText}>S'inscrire</Text>
                </TouchableOpacity>
                <Text style={styleSheet.login}>
                    Vous avez déjà un compte ?{" "}
                    <Text onPress={navigateToConnexion} style={{ fontFamily: 'Inter-Medium', color: GlobalColors.primary, fontSize: 14 }}>
                        Se connecter
                    </Text>
                </Text>
            </View>
        </View>
    )
}

// borderWidth: 1, borderColor: "#202020", 

const styleSheet = StyleSheet.create({
    logoImage: {
        width: 200,
        height: 128,
        resizeMode: "contain",
        // borderWidth: 1, borderColor: "#202020",
    },
    title: {
        fontSize: 32,
        color: GlobalColors.dark,
        fontFamily: 'Inter-Bold',
        marginBottom: "2.5%"
    },
    subTitle: {
        fontSize: 16,
        fontFamily: 'Inter-Regular',
        marginBottom: "10%",
    },
    main: {
        flex: 1,
        paddingHorizontal: 24,
    },
    inputContainer: {
        width: '100%',
        marginBottom: "6.5%",
    },
    label: {
        color: GlobalColors.dark,
        marginBottom: "2.5%",
    },
    inputField: {
        backgroundColor: GlobalColors.light,
        borderWidth: 1,
        borderColor: GlobalColors.dark,
        padding: "3%",
        borderRadius: 20,
        fontSize: 18,
    },
    button: {
        width: '100%',
        backgroundColor: GlobalColors.primary,
        height: 50,
        borderRadius: 25,
        alignItems: 'center',
        display: "flex",
        justifyContent: "center",
        marginTop: "7%",
    },
    buttonText: {
        color: GlobalColors.light,
        fontSize: 20,
        fontFamily: 'Inter-Medium',
        textAlign: 'center',
    },
    login: {
        fontSize: 13,
        fontFamily: 'Inter-Regular',
        width: "100%",
        textAlign: 'center',
        marginTop: "4%",
    },
});

export default Inscription;