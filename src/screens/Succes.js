import React, { useState, useCallback, useEffect } from 'react'
import { View, Text, TouchableOpacity } from 'react-native';
import LottieView from 'lottie-react-native';
import GlobalColors from '../styles/globalColors';

const Succes = () => {



    return (

        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: GlobalColors.primary }} >

            <View style={{ width: 900, height: 900, position: 'relative', top: -48 }} >
                <LottieView
                    autoPlay
                    style={{
                        flex: 1,
                        backgroundColor: 'transparent',

                    }}
                    source={require('../../assets/success.json')}
                />
            </View>

            {/* <View style={{width: "60%"}}> */}
            <Text style={{ color: GlobalColors.light, fontFamily: 'Inter-Bold', fontSize: 32, position: 'absolute', bottom: "35%" }} >Succès !</Text>
            <Text style={{ color: GlobalColors.light, fontFamily: 'Inter-Medium', fontSize: 16, position: 'absolute', bottom: "25%", width: "72.5%", textAlign: "center", lineHeight: 23 }} >Votre compte a bien été créé. Vous êtes prêt à passer à la suite. Bonne chance !</Text>
            <TouchableOpacity style={{ backgroundColor: GlobalColors.light, position: 'absolute', bottom: "12.5%", paddingVertical: 15, paddingHorizontal: 24, borderRadius: 50 }}>
                <Text style={{ color: GlobalColors.primary, fontFamily: 'Inter-SemiBold', fontSize: 16, letterSpacing: 1 }}>LANCER L'APPLI</Text>
            </TouchableOpacity>
            {/* </View> */}

        </View>

    );

}

export default Succes;