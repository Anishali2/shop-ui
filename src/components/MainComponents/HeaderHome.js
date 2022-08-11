import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity, TextInput, FlatList } from 'react-native'
import { colors, fonts, images, icons } from '../../constraints'
import styles from '../../assets/css/style';
import { Notification, Search } from 'svg';

const HeaderHome = (props) => {

    return (
        <View style={[styles.homeHeaderTop, styles.leftPadding,]}>
            <View style={{ width: '70%' }}>
                <Text style={styles.headerTxtLocation}>My Location</Text>
                <View style={[styles.flexAlignItem, { minWidth: '50%', marginTop: 5 }]}>
                    <Text style={[styles.textMedium, { fontSize: 16 }]}>18th Avenue</Text>
                    <Image
                        source={icons.downArrow}
                        style={{ width: 10, height: 10, resizeMode: 'contain', marginLeft: 10, alignSelf: 'center', marginTop: 4 }}
                    />
                </View>
            </View>
            <TouchableOpacity>
                <Notification />
            </TouchableOpacity>
        </View>
    )
}

export default HeaderHome;