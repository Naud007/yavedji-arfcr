import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, TextInput, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import GlobalColors from "../styles/globalColors";
import { useNavigation } from "@react-navigation/native";

const Connexion = () => {
    const navigation = useNavigation();

    const [focusedInput, setFocusedInput] = useState(null);

    const handleInputFocus = (fieldName) => {
        setFocusedInput(fieldName);
    };

    const handleInputBlur = () => {
        setFocusedInput(null);
    };

    const isInputFocused = (fieldName) => {
        return focusedInput === fieldName;
    };
    const navigateToInscription = () => {
        navigation.navigate("Inscription");
    }

    return (
        <View style={{ flex: 1, }}>
            <View style={{ width: "100%", height: "35%", justifyContent: "center", alignItems: "center", marginTop: 24 }}>
                <Image source={require("../../assets/images/logo-hd.png")} style={styleSheet.logoImage} />
            </View>

            <View style={styleSheet.main}>
                <Text style={styleSheet.title}>Connectez-vous</Text>
                <Text style={styleSheet.subTitle}>Heureux de vous voir à nouveau!</Text>

                <View style={styleSheet.inputContainer}>
                    <Text style={styleSheet.label}>Numéro de Téléphone<Text style={{ color: "#E31919", letterSpacing: -2 }}>{" "}*</Text></Text>
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
                    <Text style={styleSheet.buttonText}>Se Connecter</Text>
                </TouchableOpacity>
                <Text onPress={navigateToInscription} style={styleSheet.login}>Vous n'avez pas de compte ? <Text style={{ fontFamily: 'Inter-Medium', color: GlobalColors.primary, fontSize: 14 }}>Créer un compte</Text></Text>
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
        // borderWidth: 1, borderColor: "#202020",
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
        width: "60%",
        textAlign: 'center',
        marginTop: "4%",
        alignSelf: "center"
    },
});

export default Connexion;