// OnboardingScreen.js

import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
import { RadioButton } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

import { Ionicons, FontAwesome5, MaterialIcons, Entypo, Fontisto } from '@expo/vector-icons';
import GlobalColors from "../styles/globalColors";

const LicenceSwitch = () => {
    const dispatch = useDispatch();
    const navigation = useNavigation();

    const profileData = useSelector((state) => state.appProfileReducer.profileData);
    const [selectedOption, setSelectedOption] = useState(null);

    const handleSkip = () => {
        // Navigate to the next screen
        console.log('Skip screen');
        navigation.navigate('SelectLangue');
    };

    const licenceTypes = [
        {
            name: 'Permis A',
            subtitle: 'Permis pour véhicules à 2 roues',
            icon: <Fontisto name="motorcycle" size={28} color={GlobalColors.light} />
        },
        {
            name: 'Permis B',
            subtitle: 'Permis pour petits véhicules',
            icon: <Ionicons name="car-sport" size={28} color={GlobalColors.light} />
        },
        {
            name: 'Permis C',
            subtitle: 'Permis pour les poids lourds',
            icon: <Fontisto name="truck" size={28} color={GlobalColors.light} />
        },
        {
            name: 'Permis D',
            subtitle: 'Permis pour véhicules commerciaux',
            icon: <FontAwesome5 name="bus" size={28} color={GlobalColors.light} />
        },
    ];

    const handleNext = () => {
        if (selectedOption) {
            // Save the selected license to Redux state
            dispatch({ type: 'SET_PROFILE_DATA', value: { ...profileData, typePermis: selectedOption } });

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
                <Text style={styles.headerText}>De quel type de permis avez vous besoin?</Text>

                {/* <RadioButton.Group
                onValueChange={setSelectedOption}
                value={selectedOption}
            >
                <RadioButton.Item
                    label="Permis A"
                    value="A"
                    color={GlobalColors.primary} // light green color
                    uncheckedColor="#FFF"
                />
                <RadioButton.Item
                    label="Permis B"
                    value="B"
                    color={GlobalColors.primary}
                    uncheckedColor="#FFF"
                />
                <RadioButton.Item
                    label="Permis C"
                    value="C"
                    color={GlobalColors.primary}
                    uncheckedColor="#FFF"
                />
                <RadioButton.Item
                    label="Permis D"
                    value="D"
                    color={GlobalColors.primary}
                    uncheckedColor="#FFF"
                />
            </RadioButton.Group> */}

                <View style={styles.optionContainer}>
                    {licenceTypes.map((licence, index) => (
                        <TouchableOpacity
                            key={index}
                            style={[
                                styles.option,
                                selectedOption === licence.name && styles.selectedOption,
                            ]}
                            onPress={() => setSelectedOption(licence.name)}
                        >
                            {licence.icon}
                            <View style={styles.textContainer}>
                                <Text style={styles.optionText}>{licence.name}</Text>
                                <Text style={styles.subtitleText}>{licence.subtitle}</Text>
                            </View>
                            <RadioButton
                                value={licence.name}
                                status={selectedOption === licence.name ? 'checked' : 'unchecked'}
                                onPress={() => setSelectedOption(licence.name)}
                                color={GlobalColors.primary}
                                uncheckedColor="#FFF"
                            />
                        </TouchableOpacity>
                    ))}
                </View>

                <TouchableOpacity onPress={handleSkip} style={styles.nextButton}>
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
        fontSize: 16,
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

export default LicenceSwitch;
