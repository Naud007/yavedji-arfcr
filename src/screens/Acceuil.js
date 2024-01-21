import { View, TouchableOpacity, ScrollView, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import SectionItem from '../components/ui_/HomeSection';
import { FlatList } from 'react-native';

import { Ionicons, FontAwesome5, MaterialIcons, Entypo, Fontisto } from '@expo/vector-icons';
import GlobalColors from '../styles/globalColors';

const Acceuil = () => {

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
                // style={{ borderWidth: 1, borderColor: "#202020", marginBottom: 0 }}
            />

            <View style={styles.container}>
                <Text style={styles.headerText}>Sujets spéciaux</Text>
                <View style={styles.flexContainer}>
                    <TouchableOpacity style={styles.sujetBtn}>
                        <Fontisto name="motorcycle" size={32} color={GlobalColors.primary} />
                        <Text style={styles.permis}>Permis A</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.sujetBtn}>
                        <Ionicons name="car-sport" size={32} color={GlobalColors.primary} />
                        <Text style={styles.permis}>Permis B</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.sujetBtn}>
                        <Fontisto name="truck" size={32} color={GlobalColors.primary} />
                        <Text style={styles.permis}>Permis C</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.sujetBtn}>
                        <FontAwesome5 name="bus" size={32} color={GlobalColors.primary} />
                        <Text style={styles.permis}>Permis D</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default Acceuil

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 12,
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
        marginBottom: 68,
    },
    sujetBtn: {
        width: 76,
        height: 76,
        borderRadius: 10,
        backgroundColor: GlobalColors.light,
        alignItems: 'center',
        justifyContent: 'center'
    },
    permis: {
        fontFamily: "Inter-SemiBold",
        color: GlobalColors.dark,
        fontSize: 13,
        letterSpacing: -0.3,
        marginTop: 5
    }
})