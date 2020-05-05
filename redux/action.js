import axios from 'axios'

export const IMAGE_DATA_REQUEST = 'IMAGE_DATA_REQUEST'
export const IMAGE_DATA_SUCCES = 'IMAGE_DATA_SUCCES'
export const IMAGE_DATA_ERROR = 'IMAGE_DATA_ERROR'

const fetchingRequest = () => {
    return {
        type: IMAGE_DATA_REQUEST
    }
}
const fetchingSucces = data => {
    return {
        type: IMAGE_DATA_SUCCES,
        payload: data
    }
}
const fetchingError = error => {
    return {
        type: IMAGE_DATA_ERROR,
        error: error
    }
}

export const getAllImages = () => {
    return dispatch => {
        dispatch(fetchingRequest())
        axios.get('https://api.unsplash.com/photos/?client_id=ab3411e4ac868c2646c0ed488dfd919ef612b04c264f3374c97fff98ed253dc9')
            .then((response) => {
                const { data } = response
                dispatch(fetchingSucces(data))
            }).catch((err) => {
                fetchingError(err)
            })
    }
}