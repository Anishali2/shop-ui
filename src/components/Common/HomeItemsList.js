import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity, TextInput, FlatList } from 'react-native'
import { colors, fonts, images, icons } from '../../constraints'
import styles from '../../assets/css/style';

const HomeItemsList = (props) => {

    return (
        <View style={styles.popularCompMain}>
            <View style={styles.leftPadding}>
                <View style={{ marginTop: 20, }}>
                    <FlatList
                        showsVerticalScrollIndicator={false}
                        showsHorizontalScrollIndicator={false}
                        data={[1, 2, 3,4,5,6,7]}
                        renderItem={({ item, index }) => (
                            <View style={{ width: '100%', height: 'auto',marginTop:10,paddingBottom:20,borderBottomWidth:1,borderBottomColor:colors.borderColor }}>
                                <View style={[styles.flexRowSpaceBetween,]}>
                                    <View>
                                        <Text style={[styles.textMedium, { fontSize: 17, }]}>African Delicious</Text>
                                        <Text style={[styles.textRegular, { fontSize: 14, color: '#A1A1A1', marginTop: 5 }]}>Burger, Sandwich, Coffee</Text>
                                        <View style={[styles.flexAlignItem, { marginTop: 10 }]}>
                                            <Text style={[styles.textRegular, { fontSize: 14 }]}>$8.90  ·  10-20min</Text>
                                            <Image
                                                source={icons.Star}
                                                style={{ width: 10, height: 10, resizeMode: 'contain', marginLeft: 15 }}
                                            />
                                            <Text style={[styles.textMedium, { fontSize: 14, color: colors.blueColor, marginLeft: 5 }]}>4.8</Text>
                                            <Text style={[styles.textRegular, { fontSize: 14, color: '#000', marginLeft: 5 }]}>(5)</Text>
                                        </View>
                                    </View>
                                    <View>
                                        <Image
                                            source={require('../../assets/images/Food/HealthyFood.png')}
                                            style={{ width: 64, height: 64, borderRadius: 8, }}
                                        />
                                    </View>
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

export default HomeItemsList;