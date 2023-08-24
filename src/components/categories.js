import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, Image, StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { theme } from '../theme';
import { categoriesData } from '../constants';

const Categories = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Categories</Text>
        <TouchableOpacity>
          <Text style={styles.seeAllText}>See all</Text>
        </TouchableOpacity>
      </View>
      <ScrollView
        horizontal
        contentContainerStyle={styles.scrollViewContent}
        showsHorizontalScrollIndicator={false}
      >
        {categoriesData.map((cat, index) => (
          <TouchableOpacity key={index} style={styles.categoryItem}>
            <Image source={cat.image} style={styles.categoryImage} />
            <Text style={styles.categoryTitle}>{cat.title}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  header: {
    marginHorizontal: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: theme.textNeutral700
  },
  seeAllText: {
    fontSize: 18,
    color: theme.text,
  },
  scrollViewContent: {
    paddingHorizontal: 1,
    marginTop: 10,
  },
  categoryItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 15,
  },
  categoryImage: {
    width: 100,
    height: 100,
    borderRadius: 20,
  },
  categoryTitle: {
    fontSize: 20,
    color: theme.textNeutral700,
    fontWeight: 'bold',
    marginTop: 5,
  },
});

export default Categories;
