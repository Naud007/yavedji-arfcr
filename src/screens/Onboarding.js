import React, { useLayoutEffect } from "react";
import { View, Text, Dimensions, ImageBackground } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useDispatch } from "react-redux";
import Carousel from "react-native-reanimated-carousel";
import { useSharedValue } from "react-native-reanimated";
import * as NavigationBar from 'expo-navigation-bar';

import PaginationComponent from "../components/tool_/pagination";
import GlobalColors from "../styles/globalColors";

const Onboarding = ({ props }) => {
    const dispatch = useDispatch();

    const RenderItem = ({ item }) => (
        <View style={{ width: Dimensions.get('window').width, height: Dimensions.get('screen').height, overflow: "hidden" }}>

            <ImageBackground source={item.img} style={{ width: "100%", height: "100%", }} >

                <View style={{ width: "90%", height: 160, position: 'absolute', borderRadius: 10, alignSelf: 'center', bottom: 120, justifyContent: 'center', backgroundColor: 'rgba(246, 248, 255, 0.9)' }}>

                    <Text adjustsFontSizeToFit numberOfLines={2} style={{ fontSize: 18, marginHorizontal: 12, textAlign: "center", color: GlobalColors.light, marginBottom: 12 }}>{item.title}</Text>
                    <Text adjustsFontSizeToFit numberOfLines={6} style={{ fontSize: 14, marginHorizontal: 16, textAlign: "center", color: GlobalColors.light, marginTop: 6, lineHeight: 18 }}>{item.caption}</Text>

                </View>

            </ImageBackground>

            {item.id == 2 &&
                <View style={{ position: 'absolute', zIndex: 1, bottom: 60, width: 130, height: 45, alignSelf: 'center' }}>

                    <TouchableOpacity onPress={() => dispatch({ type: "SET_APP_FIRST_LAUNCH", value: false })} style={{ width: "100%", height: "100%", justifyContent: 'center', alignItems: 'center', backgroundColor: GlobalColors.primary, borderRadius: 5 }} >
                        <Text style={{ fontSize: 16, color: GlobalColors.light, fontWeight: 'bold' }}>Get Started</Text>
                    </TouchableOpacity>

                </View>
            }

        </View>
    )

    const content_data = [
        {
            id: 0,
            img: require('../../assets/images/onboarding/1.png'),
            title: "LEARN TO CODE",
            caption: "Embark on your coding journey through coding quizzes, assessments, and challenges to sharpen your skills and accelerate your coding career."
        },
        {
            id: 1,
            img: require('../../assets/images/onboarding/2.png'),
            title: "ACE YOUR NEXT INTERVIEW",
            caption: "With our super app, master required technical skills, take your next interview with confidence and prepare for the next big step in your career."
        },
        {
            id: 2,
            img: require('../../assets/images/onboarding/3.png'),
            title: "ELEVATE YOUR CAREER",
            caption: "Your coding journey is not only about learning. Earn badges, certifications, and industry awards as you aim to become a world-class tech talent."
        }
    ];

    const progressValue = useSharedValue(0);

    useLayoutEffect(() => {
        NavigationBar.setVisibilityAsync("hidden");
        NavigationBar.setPositionAsync("absolute");
        NavigationBar.setBehaviorAsync('overlay-swipe');
    }, []);

    return (
        <>

            <View style={{ width: Dimensions.get('window').width, height: Dimensions.get('screen').height }}>

                <Carousel
                    loop={false}
                    width={Dimensions.get('window').width}
                    height={Dimensions.get('screen').height}
                    autoPlay={true}
                    autoPlayInterval={5000}
                    data={content_data}
                    onProgressChange={(_, absoluteProgress) =>
                        (progressValue.value = absoluteProgress)

                    }
                    renderItem={({ item }, id) => (<RenderItem id={id} item={item} />)}
                />

            </View>

            {!!progressValue && (
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        width: 64,
                        borderRadius: 5,
                        paddingVertical: 6,
                        paddingHorizontal: 12,
                        position: "absolute",
                        top: 30,
                        right: 10
                    }}
                >
                    {content_data.map((item, index) => (
                        <PaginationComponent
                            key={index}
                            index={index}
                            animValue={progressValue}
                            backgroundColor={GlobalColors.primary}
                            isRotate={false}
                            length={content_data.length}
                        />
                    ))}
                </View>
            )}

        </>
    )
}

export default Onboarding;
