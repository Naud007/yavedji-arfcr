// OnboardingScreen.js

import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground, Image } from 'react-native';
import { RadioButton } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { SvgUri, SvgXml } from 'react-native-svg';

import { Ionicons, FontAwesome5, MaterialIcons, Entypo, Fontisto } from '@expo/vector-icons';
import GlobalColors from "../styles/globalColors";

const PreferenceLangue = () => {
    const dispatch = useDispatch();
    const navigation = useNavigation();

    const profileData = useSelector((state) => state.appProfileReducer.profileData);

    const [selectedOption, setSelectedOption] = useState(null);

    const handleSkip = () => {
        // Navigate to the next screen
        console.log('Skip screen to subscribe');
        navigation.navigate('Subscribe');
    };

    const beninFlag = `<svg xmlns="http://www.w3.org/2000/svg" id="flag-icons-bj" viewBox="0 0 640 480">
                <defs>
                    <clipPath id="bj-a">
                        <path fill="gray" d="M67.6-154h666v666h-666z"/>
                    </clipPath>
                </defs>
                <g clip-path="url(#bj-a)" transform="matrix(.961 0 0 .7207 -65 111)">
                    <g fill-rule="evenodd" stroke-width="1pt">
                        <path fill="#319400" d="M0-154h333v666H0z"/>
                        <path fill="#ffd600" d="M333-154h666v333H333z"/>
                        <path fill="#de2110" d="M333 179h666v333H333z"/>
                    </g>
                </g>
            </svg>`;

    const franceFlag = `<svg xmlns="http://www.w3.org/2000/svg" id="flag-icons-fr" viewBox="0 0 640 480">
                <path fill="#fff" d="M0 0h640v480H0z"/>
                <path fill="#000091" d="M0 0h213.3v480H0z"/>
                <path fill="#e1000f" d="M426.7 0H640v480H426.7z"/>
            </svg>`;

    const langues = [
        {
            name: 'Français',
            // subtitle: 'Permis pour véhicules à 2 roues',
            icon: <SvgXml xml={franceFlag} width={28} height={28} />
        },
        {
            name: 'Fôn gbé',
            // subtitle: 'Permis pour petits véhicules',
            icon: <SvgXml xml={beninFlag} width={28} height={28} />
        },
        /* {
            name: 'Permis C',
            subtitle: 'Permis pour les poids lourds',
            icon: <Fontisto name="truck" size={28} color={GlobalColors.light} />
        }, */
        /* {
            name: 'Permis D',
            subtitle: 'Permis pour véhicules commerciaux',
            icon: <FontAwesome5 name="bus" size={28} color={GlobalColors.light} />
        }, */
    ];

    const handleNext = () => {
        if (selectedOption) {
            // Save the selected license to Redux state
            dispatch({ type: 'SET_PROFILE_DATA', value: { ...profileData, typeLangue: selectedOption } });

            // Navigate to the next screen
            navigation.navigate('NextScreen');
        } else {

        }

    };

    return (
        <ImageBackground
            source={require('../../assets/images/background-switch.jpg')}
            style={styles.backgroundImage}
        >
            <View style={styles.container}>
                <TouchableOpacity onPress={handleSkip} style={styles.skipButton}>
                    <Text style={styles.skipButtonText}>Sauter cet étape</Text>
                </TouchableOpacity>
                <Text style={styles.headerText}>Quelle est votre langue de préférence?</Text>

                <View style={styles.optionContainer}>
                    {langues.map((langue, index) => (
                        <TouchableOpacity
                            key={index}
                            style={[
                                styles.option,
                                selectedOption === langue.name && styles.selectedOption,
                            ]}
                            onPress={() => setSelectedOption(langue.name)}
                        >
                            {langue.icon}
                            <View style={styles.textContainer}>
                                <Text style={styles.optionText}>{langue.name}</Text>
                            </View>
                            <RadioButton
                                value={langue.name}
                                status={selectedOption === langue.name ? 'checked' : 'unchecked'}
                                onPress={() => setSelectedOption(langue.name)}
                                color={GlobalColors.primary}
                                uncheckedColor="#FFF"
                            />
                        </TouchableOpacity>
                    ))}
                </View>

                <TouchableOpacity onPress={handleNext} style={styles.nextButton}>
                    <Text style={styles.nextButtonText}>Suivant</Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>

    );
};

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
    },
    container: {
        flex: 1,
        padding: 20,
        justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor: 'rgba(40, 40, 40, 0.7)',
    },
    skipButton: {
        position: 'absolute',
        top: 40,
        right: 16,
        borderColor: GlobalColors.light,
        borderWidth: 1,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderRadius: 25,
    },
    skipButtonText: {
        color: GlobalColors.light,
        fontSize: 14,
        fontFamily: 'Inter-Medium',
    },
    headerText: {
        fontSize: 28,
        fontFamily: 'Inter-Bold',
        marginBottom: 32,
        color: '#FFF',
        lineHeight: 38,
    },
    optionContainer: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        width: '100%',
        // borderWidth: 1, borderColor: "#FFF",
    },
    option: {
        // flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: 'rgba(255, 255, 255, 0)',
        borderRadius: 10,
        padding: 20,
        marginVertical: 4,
    },
    selectedOption: {
        backgroundColor: 'rgba(255, 255, 255, 0.4)',
    },
    textContainer: {
        // flexDirection: 'column',
        flex: 1,
        marginLeft: 20,
    },
    icon: {
        width: 56,
        height: 56,
        // marginBottom: 10,
    },
    optionText: {
        fontSize: 18,
        // marginBottom: 10,
        fontFamily: 'Inter-Medium',
        color: GlobalColors.light
    },
    subtitleText: {
        fontSize: 10,
        fontFamily: 'Inter-Regular',
        color: GlobalColors.light
    },
    nextButton: {
        backgroundColor: GlobalColors.primary,
        padding: 12,
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 32,
        width: '50%',
        alignSelf: 'flex-end',
        position: 'absolute',
        bottom: 48,
        right: 16,
    },
    nextButtonText: {
        color: '#FFF',
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default PreferenceLangue;
