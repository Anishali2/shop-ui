import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity, TextInput, FlatList } from 'react-native'
import { colors, fonts, images, icons } from '../../constraints'
import styles from '../../assets/css/style';

const HomeCategories = (props) => {

    return (
        <View style={styles.popularCompMain}>
            <View style={styles.leftPadding}>
                <Text style={[styles.textBold, { marginTop: 20, fontSize: 23 }]}>Browse from categories</Text>
                <View style={{ marginTop: 20,marginLeft:-9 }}>
                <FlatList
                    horizontal={true}
                    showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false}
                    data={[1, 2, 3,4,5,6,7,8]}
                    renderItem={({ item, index }) => (
                        <View style={{ marginHorizontal: 10 }}>
                            <View style={{ width: 70, height: 'auto',justifyContent:'center',alignItems:'center' }}>
                                <Image
                                    source={require('../../assets/images/Food/HealthyFood.png')}
                                    style={{ width: 64, height: 64, borderRadius: 50, }}
                                />
                               <Text style={[styles.textRegular, { fontSize: 17, marginTop: 10 }]}>Asian</Text>
                            </View>
                        </View>
                    )}
                    keyExtractor={(item) => item.id}
                    style={{}}
                />
                </View>
            </View>
        </View>
    )
}

export default HomeCategories;