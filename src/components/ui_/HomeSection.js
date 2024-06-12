import React, { useRef } from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet, Dimensions, ImageBackground } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Carousel from "react-native-reanimated-carousel";
import LinearGradient from "react-native-linear-gradient";
import GlobalColors from "../../styles/globalColors";
import { useSharedValue } from "react-native-reanimated";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: 150,
        justifyContent: "space-between",
        marginBottom: 12,
        // borderColor: "#202020", borderWidth: 0.5,

    },
    chapitresContainer: {
        flex: 1,
        height: 140,
        justifyContent: "space-between",
        marginBottom: 12,
        // borderColor: "#202020", borderWidth: 0.5,
    },
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 2,
        // borderColor: "#202020", borderWidth: 0.5,
    },
    headerText: {
        fontSize: 16,
        color: GlobalColors.dark,
        width: "50%",
        fontFamily: 'Inter-Bold',
        letterSpacing: -0.5
    },
    viewMoreText: {
        fontSize: 10,
        color: GlobalColors.dark,
        width: "15%",
        fontFamily: 'Inter-SemiBold',
        textAlign: "center"
    },
    carouselItem: {
        width: 100,
        height: 115,
        borderRadius: 15,
        // borderColor: "#202020", borderWidth: 0.5,
    },
    chapitresCarouselItem: {
        width: 90,
        height: 100,
        borderRadius: 15,
    },
    imageBackground: {
        width: "100%",
        height: "100%",
    },
    image: {
        width: "100%",
        height: "100%",
        borderRadius: 20,
    },
    gradient: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",
        // backgroundColor: 'rgba(255, 255, 255, 0.25)',
        borderRadius: 15
    },
    itemTitle: {
        fontFamily: "Inter-SemiBold",
        color: GlobalColors.white,
        textAlign: "center",
        position: "relative",
        // bottom: "25%"
    },
    chapitresItemTitle: {
        fontFamily: "Inter-Medium",
        color: GlobalColors.white,
        textAlign: "center",
        position: "relative",
        bottom: "5%",
        fontSize: 11,
        lineHeight: 15,
        width: "90%"
    },
    sujetsItemTitle: {
        fontFamily: "Inter-SemiBold",
        color: GlobalColors.white,
        textAlign: "center",
        position: "relative",
        bottom: "9%",
        fontSize: 13,
    },
    caption: {
        fontFamily: "Inter-Regular",
        color: GlobalColors.white,
        textAlign: "center",
        fontSize: 9,
        lineHeight: 12.5,
        letterSpacing: -0.4,
        // width: "90%",
        position: "relative",
        bottom: "5%",
        marginTop: 8
    },
    sujetsCaption: {
        fontFamily: "Inter-Medium",
        color: GlobalColors.white,
        textAlign: "center",
        fontSize: 10,
        position: "absolute",
        bottom: "25%"
    }
});

const modules = [
    {
        id: 0,
        img: require("../../../assets/images/module_1.jpg"),
        name: "Module I",
        caption: "Généralités, Autoroutes, Signalisations...",
        category: "Modules",
    },
    {
        id: 1,
        img: require("../../../assets/images/module_2.jpg"),
        name: "Module II",
        caption: "Règles de Priorités, Dépassement...",
        category: "Modules",
    },
    {
        id: 2,
        img: require("../../../assets/images/sujet_1.jpg"),
        name: "Module III",
        caption: "Stationnement, Arrêt, Changer Direction...",
        category: "Modules",
    },
    {
        id: 3,
        img: require("../../../assets/images/module_4.jpg"),
        name: "Module IV",
        category: "Infractions, Civisme, Secourisme...",
    },
    {
        id: 4,
        img: require("../../../assets/images/equipement.jpg"),
        name: "Module V",
        category: "Équipements, Entretien, Documents...",
    },
];

const chapitres = [
    {
        id: 0,
        img: require("../../../assets/images/route_automobile.jpg"),
        name: "Route Automobile",
        category: "Chapitres",
    },
    {
        id: 1,
        img: require("../../../assets/images/changement_direction.jpg"),
        name: "Changement de Direction",
        category: "Chapitres",
    },
    {
        id: 2,
        img: require("../../../assets/images/equipement.jpg"),
        name: "Equipement",
        category: "Chapitres",
    },
    {
        id: 3,
        img: require("../../../assets/images/secourisme.jpg"),
        name: "Secourisme",
        category: "Chapitres",
    },
    {
        id: 4,
        img: require("../../../assets/images/signalisations.png"),
        name: "Signalisations",
        category: "Chapitres",
    },
];

const sujets = [
    {
        id: 0,
        img: require("../../../assets/images/sujet_1.jpg"),
        name: "Sujet 1",
        caption: "Questions 1-20",
        category: "Sujets",
    },
    {
        id: 1,
        img: require("../../../assets/images/sujet_2.jpg"),
        name: "Sujet 2",
        caption: "Questions 1-20",
        category: "Sujets",
    },
    {
        id: 2,
        img: require("../../../assets/images/sujet_3.jpg"),
        name: "Sujet 3",
        caption: "Questions 1-20",
        category: "Sujets",
    },
    {
        id: 3,
        img: require("../../../assets/images/sujet_4.jpg"),
        name: "Sujet 4",
        caption: "Questions 1-20",
        category: "Sujets",
    },
];

const SectionItem = ({ title }) => {
    const carouselRef = useRef(null);
    const scrollOffsetValue = useSharedValue(0);

    const RenderItem = ({ item, onPress }) => (
        <TouchableOpacity
            onPress={() => onPress(item)}
            style={title == "chapitres" ? styles.chapitresCarouselItem : styles.carouselItem}
        >
            <ImageBackground
                resizeMode="cover"
                style={styles.imageBackground}
                imageStyle={{ borderRadius: 15 }}
                source={item.img}
            >
                {/* <ImageBackground resizeMode="cover" source={item.img} style={styles.image} imageStyle={{ borderRadius: 20 }} /> */}
                <LinearGradient
                    colors={[
                        "rgba(32, 32, 32, 0)",
                        "rgba(32, 32, 32, 0.25)",
                        "rgba(32, 32, 32, 0.97)"
                    ]}
                    style={styles.gradient}
                    locations={[0, 0.35, 0.95]}
                >
                    <Text style={title == "chapitres" ? styles.chapitresItemTitle : title == "sujets" ? styles.sujetsItemTitle : styles.itemTitle}>{item.name}</Text>
                    {title != "chapitres" && (
                        <Text style={title == "sujets" ? styles.sujetsCaption : styles.caption}>{item.caption}</Text>
                    )}
                </LinearGradient>
            </ImageBackground>
        </TouchableOpacity>
    );

    const handleItemClick = (selectedItem, index) => {
        console.log("Item clicked", selectedItem.name, "at index", index);
    }

    let data;

    switch (title) {
        case "modules":
            data = modules;
            break;
        case "chapitres":
            data = chapitres;
            break;
        case "sujets":
            data = sujets;
            break;
        default:
            data = [];
        // break;

    }

    const makeTitleCase = (str) => {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    return (
        <View style={title == "chapitres" ? styles.chapitresContainer : styles.container}>
            <View style={styles.headerContainer}>
                <Text style={styles.headerText}>Les {makeTitleCase(title)}</Text>
                <Text style={styles.viewMoreText}>Voir plus</Text>
            </View>

            <Carousel
                ref={carouselRef}
                width={title === "chapitres" ? 95 : 108}
                height={title === "chapitres" ? 105 : 115}
                // windowSize={data.length}
                loop={false}
                defaultScrollOffsetValue={scrollOffsetValue}
                // mode={"horizontal-stack"}
                /* modeConfig={{
                    parallaxScrollingScale: 0.9,
                    parallaxScrollingOffset: title == "chapitres" ? 237 : 227,
                    parallaxAdjacentItemScale: 0.9
                }} */
                /* modeConfig={{
                    showLength: data.length,
                    stackInterval: 120,
                    scaleInterval: 0
                }} */
                data={data}
                renderItem={({ item, index }) => (
                    <RenderItem
                        item={item}
                        onPress={(selectedItem) => handleItemClick(selectedItem, index)}
                    />
                )}
                style={{
                    // borderColor: "black", borderWidth: 1.5, 
                    width: Dimensions.get("screen").width,
                }}
            // pagingEnabled={true}
            // snapEnabled={true}
            />
        </View>
    );
};

export default SectionItem;
