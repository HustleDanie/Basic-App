import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { destinationData } from '../constants';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { LinearGradient } from 'expo-linear-gradient';
import { HeartIcon } from 'react-native-heroicons/solid';
import { useNavigation } from '@react-navigation/native';

const Destinations = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {destinationData.map((item, index) => (
        <DestinationCard navigation={navigation} item={item} key={index} />
      ))}
    </View>
  );
};

const DestinationCard = ({ item, navigation }) => {
  const [isFavourite, toggleFavourite] = useState(false);

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('Destination', { ...item })}
      style={styles.cardContainer}
    >
      <Image source={item.image} style={styles.cardImage} />

      <LinearGradient
        colors={['transparent', 'rgba(0,0,0,0.8)']}
        style={styles.gradient}
        start={{ x: 0.5, y: 0 }}
        end={{ x: 0.5, y: 1 }}
      />

      <TouchableOpacity
        onPress={() => toggleFavourite(!isFavourite)}
        style={styles.favouriteButton}
      >
        <HeartIcon size={wp(5)} color={isFavourite ? 'red' : 'white'} />
      </TouchableOpacity>

      <Text style={styles.cardTitle}>{item.title}</Text>
      <Text style={styles.cardDescription}>{item.shortDescription}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    //flexWrap: 'wrap',
    //marginHorizontal: 4,
    justifyContent: 'space-between',
    //alignItems: '',
  },
  cardContainer: {
    width: 400,
    height: 270,
    justifyContent: 'center',
    padding: 4,
    //paddingBottom: 6,
    //marginBottom: 0,
    //borderRadius: 2,
    //marginRight: 10,
  },
  cardImage: {
    width: wp(90),
    height: wp(50),
    borderRadius: 10,
    position: 'absolute',
    
  },
  favouriteButton: {
    backgroundColor: 'rgba(255,255,255,0.4)',
    borderRadius: wp(5),
    padding: wp(2),
    position: 'absolute',
    top: wp(2),
    right: wp(3),
  },
  cardTitle: {
    fontSize: wp(4),
    color: 'white',
    fontWeight: 'bold',
  },
  cardDescription: {
    fontSize: wp(2.2),
    color: 'white',
  },
});

export default Destinations;
