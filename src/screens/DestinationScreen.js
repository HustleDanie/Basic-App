import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, StatusBar, Platform, StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ChevronLeftIcon } from 'react-native-heroicons/outline';
import { ClockIcon, HeartIcon, MapPinIcon, SunIcon } from 'react-native-heroicons/solid';
import { useNavigation } from '@react-navigation/native';
import { theme } from '../theme';

const ios = Platform.OS == 'ios';
const topMargin = ios ? 'mt-10' : 'mt-0';

export default function DestinationScreen(props) {
  const item = props.route.params;
  const navigation = useNavigation();
  const [isFavourite, toggleFavourite] = useState(false);

  return (
    <View style={styles.container}>
      {/* destination image */}
      <Image source={item.image} style={styles.image} />
      <StatusBar style="light" />

      {/* back button */}
      <SafeAreaView style={[styles.header, topMargin]}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={[styles.iconButton, styles.backButton]}
        >
          <ChevronLeftIcon size={wp(7)} strokeWidth={4} color="white" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => toggleFavourite(!isFavourite)}
          style={[styles.iconButton, styles.heartButton]}
        >
          <HeartIcon size={wp(7)} strokeWidth={4} color={isFavourite ? 'red' : 'white'} />
        </TouchableOpacity>
      </SafeAreaView>

      {/* title & description & booking button */}
      <View style={styles.contentContainer}>
        <ScrollView showsVerticalScrollIndicator={false} style={styles.scrollView}>
          <View style={styles.titlePriceRow}>
            <Text style={styles.title}>{item?.title}</Text>
            <Text style={styles.price}>$ {item?.price}</Text>
          </View>
          <Text style={styles.description}>{item?.longDescription}</Text>
          <View style={styles.infoRow}>
            <InfoItem icon={ClockIcon} color="skyblue" value={item.duration} label="Duration" />
            <InfoItem icon={MapPinIcon} color="#f87171" value={item.distance} label="Distance" />
            <InfoItem icon={SunIcon} color="orange" value={item.weather} label="Sunny" />
          </View>
        </ScrollView>
        <TouchableOpacity style={styles.bookButton}>
          <Text style={styles.bookButtonText}>Book now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const InfoItem = ({ icon: Icon, color, value, label }) => (
  <View style={styles.infoItem}>
    <Icon size={wp(7)} color={color} />
    <View style={styles.infoTextContainer}>
      <Text style={styles.infoValue}>{value}</Text>
      <Text style={styles.infoLabel}>{label}</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  image: {
    width: wp(100),
    height: 380,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: wp(4),
    position: 'absolute',
    zIndex: 1,
  },
  iconButton: {
    marginTop:30,
    padding: 20,
    borderRadius: 1800,
    backgroundColor: 'rgba(255,255,255,0.5)',
  },
  backButton: {
    marginLeft: 4,
  },
  heartButton: {
    marginRight: 4,
  },
  contentContainer: {
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    paddingHorizontal: 5,
    paddingTop: 40,
    marginTop: -80,
    backgroundColor: 'white',
    flex: 1,
    justifyContent: 'space-between',
  },
  scrollView: {
    marginBottom: 19,
  },
  titlePriceRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: theme.textNeutral700,
    flex: 1,
  },
  price: {
    fontSize: 25,
    color: theme.text,
    marginBottom: 30,
  },
  description: {
    fontSize: 15.7,
    color: theme.textNeutral700,
    marginBottom: 30,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginHorizontal: -2,
  },
  infoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 2,
    flex: 1,
  },
  infoTextContainer: {
    marginLeft: 6,
  },
  infoValue: {
    fontSize: 24.5,
    fontWeight: 'bold',
    color: theme.textNeutral700,
  },
  infoLabel: {
    fontSize: 20,
    color: theme.textNeutral600,
    tracking: 0.5,
  },
  bookButton: {
    backgroundColor: theme.bg(0.8),
    height: 50,
    width: 180,
    marginBottom: 16,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  bookButtonText: {
    fontSize: 15.5,
    color: 'white',
    fontWeight: 'bold',
  },
});

//export default DestinationScreen;
