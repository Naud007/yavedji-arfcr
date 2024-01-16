import React from "react";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { SvgXml } from "react-native-svg";

import GlobalColors from '../styles/globalColors';
import { TouchableOpacity } from "react-native-gesture-handler";

const Subscription = () => {

    return (
        <ScrollView style={styles.container} contentContainerStyle={{ alignItems: "center" }}>
            <View style={styles.headerTextContainer}>
                <Text style={styles.headerTitle}>Abonnez-vous au Pro</Text>
                <Text style={styles.headerCaption}>Accédez à des tests illimités et corrigés types, et des analyses détaillées ! Abonnez-vous dès maintenant pour réussir à votre examen.</Text>
            </View>

            <View style={styles.optionContainer}>
                <View style={styles.priceContainer}>
                    <Text style={styles.priceTitle}>Mensuel</Text>
                    <Text style={styles.price}>3.100 Fcfa<Text style={{ fontSize: 14, fontFamily: 'Inter-Medium', color: GlobalColors.dark }}>{' '}/mois</Text></Text>
                    <Text style={styles.priceCaption}>À renouveler chaque mois</Text>
                </View>
                <View>
                    <TouchableOpacity style={styles.subscribeBtn}>
                        <Text style={styles.subscribeText}>Abonnez-vous</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <Text style={styles.discountInfo}>17,75% réduit</Text>
            <View style={styles.optionContainer}>
                <View style={styles.priceContainer}>
                    <Text style={styles.priceTitle}>Bimensuel</Text>
                    <Text style={styles.price}>5.100 Fcfa<Text style={{ fontSize: 14, fontFamily: 'Inter-Medium', color: GlobalColors.dark }}>{' '}/2 mois</Text></Text>
                    <Text style={styles.priceCaption}>À renouveler chaque 2 mois</Text>
                </View>
                <View>
                    <TouchableOpacity style={styles.subscribeBtn}>
                        <Text style={styles.subscribeText}>Abonnez-vous</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <Text style={styles.discountInfo}>23,66% réduit</Text>
            <View style={styles.optionContainer}>
                <View style={styles.priceContainer}>
                    <Text style={styles.priceTitle}>Trimestre</Text>
                    <Text style={styles.price}>7.100 Fcfa<Text style={{ fontSize: 14, fontFamily: 'Inter-Medium', color: GlobalColors.dark }}>{' '}/3 mois</Text></Text>
                    <Text style={styles.priceCaption}>À renouveler chaque 3 mois</Text>
                </View>
                <View>
                    <TouchableOpacity style={styles.subscribeBtn}>
                        <Text style={styles.subscribeText}>Abonnez-vous</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <Text style={styles.discountInfo}>73,12% réduit</Text>
            <View style={styles.optionContainer}>
                <View style={styles.priceContainer}>
                    <Text style={styles.priceTitle}>Illimité</Text>
                    <Text style={styles.price}>10.000 Fcfa<Text style={{ fontSize: 14, fontFamily: 'Inter-Medium', color: GlobalColors.dark }}>{' '}/an</Text></Text>
                    <Text style={styles.priceCaption}>À renouveler chaque année</Text>
                </View>
                <View>
                    <TouchableOpacity style={styles.subscribeBtn}>
                        <Text style={styles.subscribeText}>Abonnez-vous</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <TouchableOpacity style={{marginBottom: 40}}>
                <Text style={styles.trial}>Continuer avec la version éssaie</Text>
            </TouchableOpacity>

        </ScrollView>
    )
}

export default Subscription;

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        // alignItems: 'center',
        backgroundColor: "#FFFFFF",
        paddingHorizontal: 12,
        paddingVertical: 24
    },
    headerTextContainer: {
        width: "100%",
        alignItems: 'center',

    },
    headerTitle: {
        color: '#202020',
        fontSize: 24,
        fontFamily: 'Inter-Bold',
        marginTop: 20
    },
    headerCaption: {
        fontSize: 13,
        fontFamily: 'Inter-Medium',
        textAlign: "center",
        marginTop: 20,
        width: '90%',
        color: GlobalColors.gray,
        marginBottom: 36
    },
    optionContainer: {
        flexDirection: "row",
        width: "100%",
        height: 140,
        borderWidth: 1.5,
        borderColor: GlobalColors.primary,
        backgroundColor: 'rgb(235, 240, 236)',
        borderRadius: 10,
        padding: 16,
        alignItems: "center",
        // marginBottom: 8,
    },
    priceContainer: {
        // width: "50%",
        flex: 1
    },
    priceTitle: {
        fontFamily: 'Inter-Medium',
        color: GlobalColors.gray
    },
    price: {
        fontSize: 20,
        fontFamily: 'Inter-Bold',
        lineHeight: 48
    },
    priceCaption: {
        fontSize: 12,
        color: '#6F6F6F',
        fontFamily: 'Inter-Light',
    },
    discountInfo: {
        position: 'relative',
        top: "2.5%",
        fontFamily: 'Inter-SemiBold',
        borderWidth: 1.25,
        borderColor: GlobalColors.primary,
        borderRadius: 25,
        paddingHorizontal: 20,
        paddingVertical: 5,
        backgroundColor: 'rgb(235, 240, 236)',
        zIndex: 99,
        color: GlobalColors.primary,
        fontSize: 13
    },
    subscribeBtn: {
        borderRadius: 25,
        backgroundColor: GlobalColors.primary,
        paddingVertical: 14,
        paddingHorizontal: 18,
        alignItems: "center",
        justifyContent: "center",
    },
    subscribeText: {
        fontSize: 14,
        color: GlobalColors.light,
        fontFamily: 'Inter-SemiBold'
    },
    trial: {
        marginVertical: 32,
        fontSize: 15,
        fontFamily: 'Inter-Medium',
        letterSpacing: -0.5,
        color: GlobalColors.primary,
        // textDecorationLine: "underline",
        borderBottomWidth: 1.5,
        borderColor: GlobalColors.primary
    }
})