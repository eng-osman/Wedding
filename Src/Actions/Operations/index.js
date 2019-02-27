import Axios from "axios";
export const Me = (token) => {
    return (dispatch) => {
        Axios.get('https://evil-skeleton-31303.herokuapp.com/Api/Profile/me', {
            headers: {
                'Authorization': token
            }
        })
            .then((user) => {
                 dispatch({
                     type: 'myInfo',
                     payload: user.data
                 })
            }).catch((e) => alert(e.response.data.user))
    }
}
export const FindById = (_id) => {
    return (dispatch) => {
        Axios.get('https://evil-skeleton-31303.herokuapp.com/Api/Profile/findById', {_id})
            .then((user) => {
                 dispatch({
                     type: 'IDInfo',
                     payload: user.data
                 })
            }).catch((e) => alert(e.response.data.msg))
    }
}
export const loadMyMsg = (msg) =>{
    return {
        type: 'loadMyMsg',
        payload: msg
    }
}