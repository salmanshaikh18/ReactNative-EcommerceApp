import {FlatList, Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React, {FC} from 'react';
import {FONTS, screenWidth} from '@utils/Constants';
import {RFValue} from 'react-native-responsive-fontsize';
import {navigate} from '@navigation/NavigationUtil';

const HorizontalList: FC<{data: any}> = ({data}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>{data?.title}</Text>

      <FlatList
        data={data?.data}
        keyExtractor={item => item?.id}
        horizontal
        style={{paddingHorizontal: 15}}
        renderItem={({item}) => (
          <Pressable onPress={() => navigate('Categories')}>
            <Image source={{uri: item?.image_uri}} style={styles.image} />
          </Pressable>
        )}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default HorizontalList;

const styles = StyleSheet.create({
  container: {
    paddingBottom: 15,
  },
  image: {
    width: screenWidth * 0.4,
    height: screenWidth * 0.6,
    marginRight: 12,
    borderRadius: 15,
    resizeMode: 'contain',
    overflow: 'hidden',
  },
  textStyle: {
    fontSize: RFValue(14),
    fontWeight: '800',
    margin: 19,
    fontFamily: FONTS.heading,
  },
});
