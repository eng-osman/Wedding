import Axios from 'axios';
export const fitchAllProfile = () => {
    return (dispatch) => {
        Axios.get('https://evil-skeleton-31303.herokuapp.com/Api/Profile/all')
            .then(Users => { dispatch({ type: 'fitchAllProfileSuccsess', payload: Users.data }) })
    }
}