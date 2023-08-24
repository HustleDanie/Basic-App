import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { sortCategoryData } from '../constants';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { theme } from '../theme';

const SortCategories = () => {
  const [activeSort, setActiveSort] = useState('Popular');

  return (
    <View style={styles.container}>
      {sortCategoryData.map((sort, index) => {
        const isActive = sort === activeSort;
        const activeButtonStyle = isActive ? styles.activeButton : null;
        const activeTextStyle = { color: isActive ? theme.text : 'rgba(0,0,0,0.6)' };

        return (
          <TouchableOpacity
            onPress={() => setActiveSort(sort)}
            key={index}
            style={[styles.sortButton, activeButtonStyle]}
          >
            <Text style={[styles.buttonText, activeTextStyle]}>{sort}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginHorizontal: 4,
    backgroundColor: theme.neutral100,
    borderRadius: wp(8),
    paddingVertical: 2,
    paddingHorizontal: 4,
  },
  sortButton: {
    padding: 3,
    paddingHorizontal: 4,
    borderRadius: wp(8),
  },
  
  buttonText: {
    fontSize: wp(5),
    fontWeight: 'bold',
  },
});

export default SortCategories;
