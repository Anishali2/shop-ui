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
import { ProgressBar } from 'react-native-paper';


const HomeDetail = (props) => {

    return (
        <View style={[styles.whiteBackground, { backgroundColor: colors.backgroundColor }]}>
            <MyContainer {...props} isHeader={false} />
            <MyStatusBar
                color={colors.backgroundColor}
            />
            <HeaderHome />
            <ScrollView showsVerticalScrollIndicator={false}>
                <Text style={[styles.textBold, styles.leftPadding, { fontSize: 23 }]}>Hey, Javier</Text>
                <Text style={[styles.textBold, styles.leftPadding, { fontSize: 23, }]}>Going to start your day?</Text>
                <View style={[styles.headerSearchView, styles.flexAlignItem,]}>
                    <View style={{ marginLeft: 10 }}>
                        <Search />
                    </View>
                    <TextInput
                        style={{ width: '70%', paddingLeft: 10, height: 47 }}
                        placeholder="Search"
                    />
                </View>
                <View style={[styles.leftPadding, { marginTop: 10 }]}>
                    <Text style={[styles.textMedium, { fontSize: 14 }]}>ACTIVE ORDER</Text>
                    <View style={[styles.activeOrderMain]}>
                        <View style={{ width: '90%', alignSelf: 'center' }}>
                            <View style={[styles.flexAlignItem, { borderBottomWidth: 1, borderBottomColor: colors.borderColor, paddingBottom: 15 }]}>
                                <Image
                                    source={require('../../assets/images/Food/Chicken.png')}
                                    style={{ width: 48, height: 48, borderRadius: 8, }}
                                />
                                <View style={{ marginLeft: 10 }}>
                                    <Text style={[styles.textMedium, { color: colors.greyColor }]}>FROM</Text>
                                    <Text style={[styles.textMedium, { fontSize: 16, marginTop: 3 }]}>African Delicious - #488797</Text>
                                </View>
                            </View>
                            <View style={[styles.flexRowSpaceBetween, { marginTop: 10 }]}>
                                <Text style={[styles.textRegular, { fontSize: 15 }]}>$13.50 · 2 items</Text>
                                <Text style={[styles.textRegular, { fontSize: 15 }]}>Est. Arrival 11:10am</Text>
                            </View>
                            <ProgressBar progress={0.3} color={colors.primaryColor}
                                style={{ marginTop: 30, borderRadius: 8, backgroundColor: colors.borderColor }} />
                            <Text style={[styles.textRegular, { fontSize: 13,marginTop:10 }]}>Food is being prepared</Text>

                        </View>
                    </View>
                </View>
                {/* Home Popular */}
                <HomePopularWeek />
                {/* Home Popular End */}
                <HomeEditorChoice />
                <HomeCategories />
                {/* <HomeItemsList/> */}
            </ScrollView>
        </View>
    )
}

export default HomeDetail