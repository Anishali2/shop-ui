import React from 'react';
import { View, Text, Image } from 'react-native'
import { colors} from '../../constraints'
import styles from '../../assets/css/style';
import { ProgressBar } from 'react-native-paper';

const ActiveOrder = () =>{
    return(
        <View style={{ backgroundColor: colors.backgroundColor,marginBottom:10}}>
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
                </View>
    )
}

export default ActiveOrder