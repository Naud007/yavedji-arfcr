import { View, TouchableOpacity, ScrollView, Text, Image, StyleSheet, Dimensions } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import SectionItem from '../components/ui_/HomeSection';
import { FlatList } from 'react-native';

import { Ionicons, FontAwesome5, MaterialIcons, Entypo, Fontisto } from '@expo/vector-icons';
import GlobalColors from '../styles/globalColors';
import LinearGradient from 'react-native-linear-gradient';

const Acceuil = () => {

    const [selectedPermis, setSelectedPermis] = useState('');

    const headings = [
        {
            id: 0,
            title: "modules",
        },
        {
            id: 1,
            title: "chapitres",
        },
        {
            id: 2,
            title: "sujets",
        },
    ];

    const renderItem = ({ item }) => (
        <View style={{ flex: 1, }}>
            <SectionItem
                title={item.title}
            />
        </View>
    )

    return (
        <View style={{ flex: 1, }} >
            <FlatList
                data={headings}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                style={{ 
                    paddingHorizontal: 12,
                    // borderWidth: 1, borderColor: "#202020" 
                }}
                ListFooterComponent={
                    <View style={styles.container}>
                        <Text style={styles.headerText}>Sujets Spéciaux</Text>

                        <View style={styles.flexContainer}>
                            <TouchableOpacity onPress={() => setSelectedPermis('motorcycle')} style={[styles.sujetBtn, selectedPermis == 'motorcycle' && { borderColor: GlobalColors.primary, borderWidth: 1, shadowColor: '#202020', shadowOffset: { width: 2, height: 3 }, shadowOpacity: 0.1, shadowRadius: 8, elevation: 2 }]}>
                                <Fontisto name="motorcycle" size={32} color={GlobalColors.primary} />
                                <Text style={styles.permis}>Permis A</Text>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={() => setSelectedPermis('automobile')} style={[styles.sujetBtn, selectedPermis == 'automobile' && { borderColor: GlobalColors.primary, borderWidth: 1, shadowColor: '#202020', shadowOffset: { width: 2, height: 3 }, shadowOpacity: 0.1, shadowRadius: 8, elevation: 2 }]}>
                                <Ionicons name="car-sport" size={32} color={GlobalColors.primary} />
                                <Text style={styles.permis}>Permis B</Text>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={() => setSelectedPermis('truck')} style={[styles.sujetBtn, selectedPermis == 'truck' && { borderColor: GlobalColors.primary, borderWidth: 1, shadowColor: '#202020', shadowOffset: { width: 2, height: 3 }, shadowOpacity: 0.1, shadowRadius: 8, elevation: 2 }]}>
                                <Fontisto name="truck" size={32} color={GlobalColors.primary} />
                                <Text style={styles.permis}>Permis C</Text>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={() => setSelectedPermis('bus')} style={[styles.sujetBtn, selectedPermis == 'bus' && { borderColor: GlobalColors.primary, borderWidth: 1, shadowColor: '#202020', shadowOffset: { width: 2, height: 3 }, shadowOpacity: 0.1, shadowRadius: 8, elevation: 2 }]}>
                                <FontAwesome5 name="bus" size={32} color={GlobalColors.primary} />
                                <Text style={styles.permis}>Permis D</Text>
                            </TouchableOpacity>
                        </View>

                        <LinearGradient
                            colors={['#31A078', '#31A05F']}
                            style={styles.gradientRectangle}
                        >
                            <View style={styles.assetText}>
                                <Text style={styles.assetLabel}>Feuille de composition</Text>
                                <Text style={styles.titleLabel}>Examen</Text>
                            </View>
                            <TouchableOpacity style={styles.assetBtn}>
                                <Text style={styles.apercuLabel}>Aperçu de notes</Text>
                            </TouchableOpacity>

                        </LinearGradient>
                    </View>
                }
            // ListFooterComponentStyle={{borderWidth: 1, borderColor: "#202020", }}
            />


        </View>
    )
}

export default Acceuil

const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    container: {
        width: "100%",
    },
    headerText: {
        fontSize: 16,
        color: GlobalColors.dark,
        fontFamily: 'Inter-Bold',
        letterSpacing: -0.5
    },
    flexContainer: {
        flexDirection: "row",
        justifyContent: 'space-between',
        width: "100%",
        marginTop: 12,
        marginBottom: 20,
    },
    sujetBtn: {
        width: 76,
        height: 76,
        borderRadius: 10,
        backgroundColor: '#F9FCFB',
        alignItems: 'center',
        justifyContent: 'center'
    },
    permis: {
        fontFamily: "Inter-SemiBold",
        color: GlobalColors.dark,
        fontSize: 13,
        letterSpacing: -0.3,
        marginTop: 5
    },
    gradientRectangle: {
        width: '100%',
        height: windowHeight * 0.15,
        borderRadius: 20,
        padding: 16,
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    assetLabel: {
        fontFamily: 'Inter-Medium',
        fontSize: 15,
        // letterSpacing: -0.25,
        color: GlobalColors.light,
        marginVertical: 5,
        lineHeight: 20,
        lineHeight: 15
      },
      titleLabel: {
        fontFamily: 'Inter-Thin',
        fontSize: 22,
        color: GlobalColors.light,
        // marginBottom: 5,
        lineHeight: 22
      },
      assetText: {
        // borderWidth: 1, borderColor: "#202020", 
        // height: '60%'
      },
      assetBtn: {
        width: 125,
        height: 40,
        backgroundColor: '#FEFFFE',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
      },
      apercuLabel: {
        fontFamily: 'Inter-SemiBold',
        fontWeight: '500',
        fontSize: 12,
        color: '#31A078',
      },
})