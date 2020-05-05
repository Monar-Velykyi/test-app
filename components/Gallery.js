import React, {useEffect} from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native'

//Redux
import {connect} from 'react-redux'
import {getAllImages} from '../redux/action'
import {bindActionCreators} from 'redux'

//React Navigation
import {useNavigation} from '@react-navigation/native'


const Gallery = ({images, getImages}) => {

    const navigation = useNavigation()

// Loading Images

    useEffect(() => {
        getImages()
    },[])


    const renderList = ({item}) => {
        return (
            <View style={styles.imageInfo}>
                <TouchableOpacity onPress={() => {navigation.navigate('FullImage', {
                img: item.urls.full, 
                width: item.width,
                height: item.height})}}>
                    <Image style={styles.img} source={{uri: item.urls.full}} />
                </TouchableOpacity>
                <View style={styles.textImage}>
                    <Text>{item.description !== null ? item.description : item.alt_description}</Text>
                    <Text>{item.user.name}</Text>
                </View>
            </View>
        )
    }
   
    
    return images.loading ? (
        <View style={styles.activityIndicator}>
            <ActivityIndicator size='large' color='blue'/>
        </View>
    ) : images.error ? (
        <View>
            <Text>{images.error}</Text>
        </View>
    ) : (
        <View style={styles.container}>
            <FlatList
            data={images.images}
            renderItem={renderList}
            keyExtractor={item => item.id}
            />
        </View>
    )
}

//React-Redux started//

const mapStateToProps = (state) => {
    return {
        images: state.imageData
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getImages: bindActionCreators(getAllImages, dispatch)
    }
}

export const GalleryInfo =  connect(mapStateToProps, mapDispatchToProps) (Gallery)

//React-Redux ended//

// *** //

// Styles Added

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#BFCDF5'
    },
    imageInfo: {
        flex: 2,
        margin:3,
        padding:5,
        flexDirection: 'row'
    },
    img: {
        width: 100,
        height: 100,
        borderRadius: 5,
    },
    textImage: {
        padding: 5,
        justifyContent: 'space-between',
        alignContent: 'space-between'
    },
    activityIndicator: {
        flex: 1,
        justifyContent: 'center',
    }
})