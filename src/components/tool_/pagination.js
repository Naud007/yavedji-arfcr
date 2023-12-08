import React from "react";
import { View } from "react-native";
import Animated, { Extrapolate, interpolate, useAnimatedStyle } from "react-native-reanimated";

import GlobalColors from "../../styles/globalColors";

const PaginationComponent = (props) => {
    const { animValue, index, length, backgroundColor, isRotate } = props;
    const width = 10;

    const animationStyle = useAnimatedStyle(() => {
        let inputRange = [index - 1, index, index + 1];
        let outputRange = [-width, 0, width];

        if (index === 0 && animValue?.value > length - 1) {
            inputRange = [length - 1, length, length + 1];
            outputRange = [-width, 0, width];
        }

        return {
            transform: [
                {
                    translateX: interpolate(animValue?.value, inputRange, outputRange, Extrapolate.CLAMP),
                },
            ],
        };
    }, [animValue?.value, index, length]);

    return (
        <View
            style={{
                backgroundColor: GlobalColors.light,
                width,
                height: width,
                // borderRadius: width / 2,
                borderRadius: 50,
                overflow: "hidden",
                transform: [
                    {
                        rotateZ: isRotate ? '90deg' : "0deg",
                    },
                ],
            }}
        >
            <Animated.View
                style={[{
                    borderRadius: 50,
                    backgroundColor,
                    flex: 1,
                },
                    animationStyle
                ]}
            />
        </View>
    );
};

export default PaginationComponent;