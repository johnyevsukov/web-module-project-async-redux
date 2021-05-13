import axios from 'axios';

export const FETCH_START = "FETCH_START";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAIL = "FETCH_FAIL";

export const fetchDog = () => {
    return (dispatch => {
        dispatch({type: FETCH_START});
    
        axios.get('https://dog.ceo/api/breeds/image/random')
          .then(resp=> {
            dispatch({type: FETCH_SUCCESS, payload:resp.data.message});
          })
          .catch(err=>{
            dispatch({type: FETCH_FAIL, payload:err});
          })
    });
}

export const fetchSpecificDog = (breed) => {
    return (dispatch => {
        dispatch({type: FETCH_START});

        axios.get(`https://dog.ceo/api/breed/${breed}/images/random`)
          .then(resp=> {
            dispatch({type: FETCH_SUCCESS, payload:resp.data.message});
          })
          .catch(err=>{
            dispatch({type: FETCH_FAIL, payload:err});
          })

    })
}

export const fetchStart = () => {
    return({type:FETCH_START});
}

export const fetchSuccess = (dogImage) => {
    return({type:FETCH_SUCCESS, payload:dogImage});
}

export const fetchFail = (error) => {
    return({type:FETCH_FAIL, payload:error});
}