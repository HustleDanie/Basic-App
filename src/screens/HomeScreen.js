import React from 'react';
import { View, Text, SafeAreaView, ScrollView, TouchableOpacity, Image, Platform, TextInput } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { MagnifyingGlassIcon } from 'react-native-heroicons/outline';
import Categories from '../components/categories';
import SortCategories from '../components/sortCategories';
import Destinations from '../components/destinations';

const ios = Platform.OS === 'ios';
const topMargin = ios ? 'mt-3' : 'mt-10';

const HomeScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
      <ScrollView showsVerticalScrollIndicator={false} style={{ paddingHorizontal: wp(5), paddingTop: ios ? hp(3) : hp(10) }}>
        {/* Avatar */}
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: hp(2) }}>
          <Text style={{ fontSize: wp(7), fontWeight: 'bold', color: 'gray' }}>Let's Discover</Text>
          <TouchableOpacity>
            <Image source={require('../../assets/images/avatar.png')} style={{ height: wp(12), width: wp(12) }} />
          </TouchableOpacity>
        </View>

        {/* Search bar */}
        <View style={{ marginBottom: hp(1) }}>
          <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: 'lightgray', borderRadius: wp(10), padding: hp(1.5), paddingLeft: wp(3) }}>
            <MagnifyingGlassIcon size={20} strokeWidth={3} color="gray" />
            <TextInput
              placeholder='Search destination'
              placeholderTextColor='gray'
              style={{ flex: 1, marginLeft: wp(2), fontSize: wp(4), letterSpacing: 0.5 }}
            />
          </View>
        </View>

        {/* Categories */}
        <View style={{ marginBottom: hp(1) }}>
          <Categories />
        </View>

        {/* Sort categories */}
        <View style={{ marginBottom: hp(1) }}>
          <SortCategories />
        </View>

        {/* Destinations */}
        <View>
          <Destinations />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default HomeScreen;
