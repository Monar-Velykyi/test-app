import {
    IMAGE_DATA_REQUEST,
    IMAGE_DATA_SUCCES,
    IMAGE_DATA_ERROR
} from './action'

let initialState = {
    loading: false,
    error: '',
    images: []
}

export const imageData = (state = initialState, action) => {
    switch (action.type) {
        case IMAGE_DATA_REQUEST:
            return {...state, loading: true }
        case IMAGE_DATA_SUCCES:
            return { loading: false, images: action.payload, error: '' }
        case IMAGE_DATA_ERROR:
            return { loading: false, images: [], error: action.error }
        default:
            return state
    }
}