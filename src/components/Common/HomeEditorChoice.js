import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity, TextInput, FlatList } from 'react-native'
import { colors, fonts, images, icons } from '../../constraints'
import styles from '../../assets/css/style';

const HomeEditorChoice = (props) => {

    return (
        <View style={styles.popularCompMain}>
            <View style={styles.leftPadding}>
                <Text style={[styles.textBold, { marginTop: 20, fontSize: 23 }]}>Editor’s choice</Text>
                <View style={[styles.flexRowSpaceBetween, { marginTop: 5 }]}>
                    <Text style={[styles.textRegular, { fontSize: 13 }]}>Check out these hype restaurants</Text>
                    <Text style={[styles.textMedium, { fontSize: 13, color: colors.blueColor }]}>SEE ALL</Text>
                </View>
                <View style={{ marginTop: 10,marginLeft:-9   }}>
                <FlatList
                    horizontal={true}
                    showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false}
                    data={[1, 2, 3]}
                    renderItem={({ item, index }) => (
                        <View style={{ marginHorizontal: 10 }}>
                            <View style={{ width: 155, height: 'auto' }}>
                                <Image
                                    source={require('../../assets/images/Food/Chicken.png')}
                                    style={{ width: '100%', height: 155, borderRadius: 8, }}
                                />
                                <View style={[styles.flexRowSpaceBetween]}>
                                    <Text style={[styles.textMedium, { fontSize: 17, marginTop: 10 }]}>Smoked Salmon</Text>
                                </View>
                                <Text style={[styles.textRegular, { fontSize: 14, color: '#A1A1A1', marginTop: 5 }]}>Bagels</Text>
                                <Text style={[styles.textMedium, { fontSize: 14, color: colors.blueColor, marginTop:5 }]}>$15.30</Text>
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

export default HomeEditorChoice;