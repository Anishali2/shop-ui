import React,{useState,useEffect} from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity, TextInput, FlatList } from 'react-native'
import { colors, fonts, images, icons } from '../../constraints'
import styles from '../../assets/css/style';
import ActiveOrder from '../../screens/Home/ActiveOrder';

 const HomePopularWeek = (props) => {
    const [checkIndex, setCheckIndex] = useState([])

    const onPressCategory = (index, searchTxt) => {
        console.log(index)
        setCheckIndex(index)
    }
    return (
        <>
        <ActiveOrder />
        <View style={styles.popularCompMain}>
            <View style={styles.leftPadding}>
                <View style={{ marginTop: 15 }}></View>

                <FlatList
                    horizontal={true}
                    showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false}
                    data={[{name:'Sort By'},{name:'Price'},{name:'Nearest'},{name:'Rating'}]}
                    renderItem={({ item, index }) => (
                        <View style={{ marginHorizontal: 1 }}>
                            <TouchableOpacity
                                onPress={() => onPressCategory(index, item.name)}
                                style={{ minWidth: 56, height: 30, backgroundColor: index == checkIndex ? colors.primaryColor : colors.whiteColor, justifyContent: 'center', 
                                alignItems: 'center', flexDirection: 'row', marginRight: 5, borderRadius: 50, paddingLeft: 10, paddingRight: 10, borderWidth: 1,borderColor: '#DDDDE1' }}>
                                <Text style={{ color: index == checkIndex ? colors.whiteColor : '#000', fontSize: 12, fontFamily: fonts.Regular, marginLeft: 5,fontFamily:fonts.Medium }}>{item.name}</Text>
                                <TouchableOpacity>
                                    {index === checkIndex ?
                                        <Image
                                            source={icons.cross}
                                            style={{ width: 10, height: 10, tintColor: colors.whiteColor, resizeMode: 'contain', marginLeft: 5 }}
                                        />
                                        :
                                        null}
                                </TouchableOpacity>
                            </TouchableOpacity>
                        </View>

                    )}
                    keyExtractor={(item) => item.id}
                    style={{}}
                />

                <Text style={[styles.textBold, { marginTop: 20, fontSize: 23 }]}>Popular this week</Text>
                <View style={[styles.flexRowSpaceBetween, { marginTop: 5 }]}>
                    <Text style={[styles.textMedium, { fontSize: 13 }]}>Check out these hype restaurants</Text>
                    <Text style={[styles.textMedium, { fontSize: 13, color: colors.primaryColor }]}>SEE ALL</Text>
                </View>
                <View style={{ marginTop: 10,marginLeft:-9 }}>
                <FlatList
                    horizontal={true}
                    showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false}
                    data={[1, 2, 3]}
                    renderItem={({ item, index }) => (
                        <View style={{ marginHorizontal: 10 }}>
                            <View style={{ width: 320, height: 'auto' }}>
                                <Image
                                    source={require('../../assets/images/Food/Asian.png')}
                                    style={{ width: '100%', height: 180, borderRadius: 8, }}
                                />
                                <View style={[styles.flexRowSpaceBetween]}>
                                    <Text style={[styles.textMedium, { fontSize: 17, marginTop: 10 }]}>African Delicious</Text>
                                    <View style={{ width: 'auto', paddingLeft: 15, paddingRight: 15, height: 24, backgroundColor: 'rgba(30, 104, 205, 0.1)', justifyContent: 'center', alignItems: 'center', borderRadius: 32, marginTop: 5, }}>
                                        <Text style={[styles.textMedium, { fontSize: 12, color: colors.primaryColor }]}>FREE DELIVERY</Text>
                                    </View>
                                </View>
                                <Text style={[styles.textRegular, { fontSize: 14, color: '#A1A1A1', marginTop: 5 }]}>Burger, Sandwich, Coffee</Text>
                                <View style={[styles.flexAlignItem, { marginTop: 5 }]}>
                                    <Text style={[styles.textRegular, { fontSize: 14 }]}>$8.90  ·  10-20min</Text>
                                    <Image
                                        source={icons.Star}
                                        style={{ width: 10, height: 10, resizeMode: 'contain', marginLeft: 15 }}
                                    />
                                    <Text style={[styles.textMedium, { fontSize: 14, color: colors.blueColor, marginLeft: 5 }]}>4.8</Text>
                                    <Text style={[styles.textRegular, { fontSize: 14, color: '#000', marginLeft: 5 }]}>(5)</Text>
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
        </>
    )
}

export default HomePopularWeek;