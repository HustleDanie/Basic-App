import React, { useState, useEffect } from "react";
import { View, Text, Image, StatusBar } from "react-native";
import AppIntroSlider from "react-native-app-intro-slider";
import { COLORS, SIZES } from '../theme/themes';
import HomeScreen from "../screens/HomeScreen";


const slides = [
    {
        id: 1,
        title: 'Discover',
        description: '“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"',
        image: require('../../assets/images/image1.jpg')
    },
    {
        id: 2,
        title: 'Explore',
        description: '“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"',
        image: require('../../assets/images/image1.jpg')
    },
    {
        id: 3,
        title: 'Re-imagine',
        description: '“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"',
        image: require('../../assets/image1.jpg')
    }
];

const OnboardingScreen = () => {
    const [showHomePage, setShowHomePage] = useState(false);

    useEffect(() => {
        StatusBar.setBarStyle('light-content');
        StatusBar.setBackgroundColor(COLORS.primary);
    }, []);

    const renderButtonLabel = (label) => {
        return (
            <View style={{
                padding: 12
            }}>
                <Text style={{
                    color: COLORS.title,
                    fontWeight: '600',
                    fontSize: SIZES.h4,
                }}>
                    {label}
                </Text>
            </View>
        );
    };

    if (!showHomePage) {
        return (
            <AppIntroSlider
                data={slides}
                renderItem={({ item }) => (
                    <View style={{
                        flex: 1,
                        alignItems: 'center',
                        padding: 15,
                        paddingTop: 100,
                    }}>
                        <Image
                            source={item.image}
                            style={{
                                width: SIZES.width - 80,
                                height: 400,
                            }}
                            resizeMode="contain"
                        />
                        <Text style={{
                            fontWeight: 'bold',
                            color: COLORS.title,
                            fontSize: SIZES.h1,
                        }}>
                            {item.title}
                        </Text>
                        <Text style={{
                            textAlign: 'center',
                            paddingTop: 5,
                            color: COLORS.title
                        }}>
                            {item.description}
                        </Text>
                    </View>
                )}
                activeDotStyle={{
                    backgroundColor: COLORS.primary,
                    width: 30,
                }}
                showSkipButton
                renderNextButton={() => renderButtonLabel("Next")}
                renderSkipButton={() => renderButtonLabel("Skip")}
                renderDoneButton={() => renderButtonLabel("Done")}
                onDone={() => {
                    setShowHomePage(true);
                }}
            />
        );
    }

    return <HomeScreen />;
};

export default OnboardingScreen;
