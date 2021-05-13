import { FETCH_START, FETCH_SUCCESS, FETCH_FAIL} from '../actions/index';

const initialState = {
    dogImage: "https://images.dog.ceo/breeds/germanshepherd/n02106662_662.jpg",
    isFetching: false,
    error: '',
}

export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case(FETCH_START):
            return({
                ...state,
                isFetching: true
            })
        case(FETCH_SUCCESS):
            return({
                ...state,
                dogImage: action.payload,
                isFetching: false
            })
        case(FETCH_FAIL):
            return({
                ...state,
                error: action.payload,
                isFetching: false
            })
        default:
            return state;
    }
}