import React, { useEffect } from "react";
import { View, StyleSheet } from "react-native";
import SnackBar from 'react-native-snackbar';
import { useSelector } from "react-redux";

const SnackBarComponent = () => {
    const snackBarItem = useSelector((state) => state.appSettingsReducer.snackBar)

    useEffect(() => {
        if (snackBarItem) {
            console.log(snackBarItem.duration);

            SnackBar.show({
                text: snackBarItem.text,
                duration: snackBarItem.duration === "short" ? SnackBar.LENGTH_SHORT : SnackBar.LENGTH_LONG,
                backgroundColor: snackBarItem.bcolor,
                textColor: snackBarItem.textColor
            });
        }
    }, [snackBarItem]);

    return (
        <View />
    );
}

export default SnackBarComponent;