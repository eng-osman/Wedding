import { AsyncStorage } from "react-native";
import { LoginManager, GraphRequest, GraphRequestManager } from "react-native-fbsdk";
import Axios from "axios";
export const Email = (Email) => {
    return {
        type: 'Email',
        payload: Email
    }
}
export const Password = (Password) => {
    return {
        type: 'Password',
        payload: Password
    }
}
export const LoginWithUs = ({ Email, Password }, resolve) => {
    return (dispatch) => {
        Axios.post('https://evil-skeleton-31303.herokuapp.com/Api/Users/login', {
            email: Email,
            password: Password
        })
            .then(async (u) => {
                if (u.status === 200) {
                    await AsyncStorage.setItem('token', u.data.token)
                    dispatch({ type: 'loginSucess', payload: u.data.token })
                    resolve()
                }
            }).catch((e) => alert(e.response.data.msg) )
    }
}
export const LoginWithFaceBook = (callback) => {
    return (dispatch) => {
        const infoRequest = new GraphRequest('/me', {
            httpMethod: 'GET', version: 'v2.5', parameters: { 'fields': { 'string': 'email,name' } }
        },
            (error, result) => {
                if (error) {
                    dispatch({ type: 'Erorrinrequest', payload: error })
                } else {
                    dispatch({type: 'loginWithFBSucess', payload: result.email})
                    callback()
                }
            }
        );
        LoginManager.logInWithReadPermissions(['public_profile']).then(
            function (result) {
                if (result.isCancelled) {
                    alert('تم الغاء التسجيل');
                } else {
                    new GraphRequestManager().addRequest(infoRequest).start();
                }
            })
    }
}
export const GenrateTokenAfterLoginWithFB = ({Email},resolve)=>{
    return (dispatch)=> {
        Axios.post('https://evil-skeleton-31303.herokuapp.com/Api/Users/loginwithfacebook', {
        email: Email,
    })
    .then(async (u) => {
        if (u.status === 200) {
            await AsyncStorage.setItem('token', u.data.token)
            dispatch({ type: 'loginSucess', payload: u.data.token })
            resolve()
        }
    }).catch((e) =>alert(e.response.data.msg) )
      }
}
