import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import StyleSheet from '../../assets/css/style'
//  import { SmallArrow }  from 'svg';

export const MiniMainButton = (props) => {

    return (
        <TouchableOpacity 
        onPress={props.onTouch}

            style={!props.borderColor ?
                [StyleSheet.mini_btn,
                {
                    backgroundColor: props.bg,
                    color: props.color,
                    borderRadius: props.radius,
                    width: props.width,
                    height:props.height,
                    marginTop:props.margin
                }]
                : [StyleSheet.mini_btn, {
                    backgroundColor: props.bg,
                    color: props.color,
                    borderRadius: props.radius,
                    borderColor: props.borderColor,
                    borderWidth: 1,
                    padding:20,
                    width: props.width,
                    height:props.height,
                    marginTop:props.margin
                }]}
        >
            <Text style={[StyleSheet.mini_btn_txt, { color: props.color, }]}>{props.text}</Text>
            {props.rotate == 'down'?

                // <SmallArrow />
                <Text>==</Text>
                : props.rotate == 'up' ? 
                <Text>==</Text>
                 : null

            }
        </TouchableOpacity>
    )
}
