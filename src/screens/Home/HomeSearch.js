import React, { useState, useEffect } from 'react'
import { View, Text, ScrollView, Image, TouchableOpacity, TextInput, FlatList } from 'react-native'
import { colors, icons, fonts, images } from '../../constraints';
import MyContainer from '../../components/MainComponents/MyContainer';
import styles from '../../assets/css/style'
import { Notification, Search } from 'svg';
import HeaderHome from '../../components/MainComponents/HeaderHome';
import HomePopularWeek from '../../components/Common/HomePopularWeek';
import HomeEditorChoice from '../../components/Common/HomeEditorChoice';
import HomeCategories from '../../components/Common/HomeCategories';
import HomeItemsList from '../../components/Common/HomeItemsList';
import { MyStatusBar } from '../../components/General';


const HomeSearch = (props) => {

    return (
        <View style={[styles.whiteBackground, { backgroundColor: colors.backgroundColor }]}>
            <MyContainer {...props} isHeader={false} />
            <MyStatusBar
                color={colors.backgroundColor}
            />
            <HeaderHome />
            <View style={[styles.headerSearchView, styles.flexRowSpaceBetween,]}>
                <TextInput
                    style={{ width: '70%', paddingLeft: 10, height: 47 }}
                    placeholder="Search"
                    value='Pizza'
                />
                <Image
                    source={icons.cross}
                    style={{ width: 15, height: 15, marginRight: 10 }}
                />
            </View>
                <View style={[styles.homeSearchWhiteMain, styles.leftPadding]}>
                    <Text style={[styles.textMedium, { fontSize: 16 }]}>120 Results Found</Text>
                    <FlatList
                        showsVerticalScrollIndicator={false}
                        showsHorizontalScrollIndicator={false}
                        data={[1, 2, 3, 4, 5, 6, 7]}
                        renderItem={({ item, index }) => (
                            <View style={{ marginTop: 10 }}>
                                <Image
                                    source={require('../../assets/images/Food/Chicken.png')}
                                    style={{ width: '100%', height: 137, borderRadius: 5 }}
                                />
                                <View style={[styles.homeSearchImagePos, styles.flexRowSpaceBetween]}>
                                    <View style={[styles.hoImagePosRat, styles.flexAlignItem]}>
                                        <Text style={[styles.textBold, { fontSize: 12 }]}>4.5</Text>
                                        <Image
                                            source={icons.startFill}
                                            style={{ width: 12, height: 12, resizeMode: 'contain', marginLeft: 3, tintColor: '#FFC529' }}
                                        />
                                        <Text style={[styles.textRegular, { fontSize: 8, color: colors.greyColor, marginLeft: 5 }]}>(100+)</Text>
                                    </View>
                                    <TouchableOpacity>
                                        <Image
                                            source={icons.Saved}
                                            style={{ width: 30, height: 30, resizeMode: 'contain', marginRight: 10 }}
                                        />
                                    </TouchableOpacity>
                                </View>

                                <Text style={[styles.textBold, { fontSize: 17, marginTop: 10 }]}>Pepperoni pizza</Text>
                                <Text style={[styles.textRegular, { fontSize: 12, marginTop: 3,color:colors.greyColor }]}>African Delicious </Text>
                                <View style={[styles.flexAlignItem, { marginTop: 5 }]}>
                                    <Image
                                        source={icons.deliveryBike}
                                        style={{ width: 15, height: 15, resizeMode: 'contain' }}
                                    />
                                    <Text style={[styles.textRegular, { fontSize: 12, marginLeft: 5 }]}>Free Delivery</Text>

                                    <Image
                                        source={icons.deliveryTime}
                                        style={{ width: 15, height: 15, resizeMode: 'contain', marginLeft: 15 }}
                                    />
                                    <Text style={[styles.textRegular, { fontSize: 12, marginLeft: 5 }]}>15-20 mins</Text>
                                </View>
                            </View>
                        )}
                        keyExtractor={(item) => item.id}
                        style={{marginBottom:'55%'}}
                    />
                </View>
        </View>
    )
}

export default HomeSearch