import React from 'react';
import {Image, Dimensions, StyleSheet} from 'react-native'

//React Navigation
import {useRoute} from '@react-navigation/native'

export const FullImage = () => {

    const route = useRoute()
    
    const win = Dimensions.get('window');
    const ratio = win.width / route.params.width;

    return <Image style={{
        width: win.width,
        height: route.params.height * ratio,
        }} 
        source={{uri: route.params.img}}
        />
}
