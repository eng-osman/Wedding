import Axios from 'axios'
import { LoginManager, GraphRequest, GraphRequestManager } from "react-native-fbsdk";
//#region  SetState
export const Name = (Name) => {
    return {
        type: 'Name',
        payload: Name
    }
}
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
export const ConfirmPassword = (ConfimPassword) => {
    return {
        type: 'ConfirmPassword',
        payload: ConfimPassword
    }
}

export const GenderType = (Gender) => {
    return {
        type: 'GenderType',
        payload: Gender

    }
}
export const ImageUri = (ImageUri) => {
    return {
        type: 'ImageUri',
        payload: ImageUri

    }
}
export const AgeType = (Age) => {
    return {
        type: 'AgeType',
        payload: Age

    }
}
export const HeightType = (Height) => {
    return {
        type: 'HeightType',
        payload: Height

    }
}
export const WeightType = (Weight) => {
    return {
        type: 'WeightType',
        payload: Weight

    }
}
export const ReligionType = (Religion) => {
    return {
        type: 'ReligionType',
        payload: Religion

    }
}
export const CityType = (City) => {
    return {
        type: 'CityType',
        payload: City

    }
}
export const CountryType = (Country) => {
    return {
        type: 'CountryType',
        payload: Country

    }
}
export const NationaltyType = (Nationalty) => {
    return {
        type: 'NationaltyType',
        payload: Nationalty

    }
}
export const StatusType = (Status) => {
    return {
        type: 'StatusType',
        payload: Status

    }
}
export const ColorSkinType = (ColorSkin) => {
    return {
        type: 'ColorSkinType',
        payload: ColorSkin
    }
}
export const ReadyToMerageType = (ReadyToMerage) => {
    return {
        type: 'ReadyToMerageType',
        payload: ReadyToMerage
    }
}
export const BetweenType = (Age) => {
    return {
        type: 'BetweenType',
        payload: Age
    }
}
export const AndType = (Age) => {
    return {
        type: 'AndType',
        payload: Age
    }
}

export const IWantToKnowType = (Know) => {
    return {
        type: 'IWantToKnowType',
        payload: Know
    }
}
export const PartnerSkinColorType = (PartnerSkinColorType) => {
    return {
        type: 'PartnerSkinColorType',
        payload: PartnerSkinColorType
    }
}
export const PartnerSalaryType = (PartnerSalaryType) => {
    return {
        type: 'PartnerSalaryType',
        payload: PartnerSalaryType
    }
}
export const EducationType = (EducationType) => {
    return {
        type: 'EducationType',
        payload: EducationType
    }
}
export const BradType = (BradType) => {
    return {
        type: 'BradType',
        payload: BradType
    }
}
//#endregion

//#region RegistFirstSenario
export const RegistFirstSenario = ({ Name, Email, Password, ConfirmPassword }, callback,reject) => {
    return (dispatch) => {
        Axios.post('https://evil-skeleton-31303.herokuapp.com/Api/Users/regist',
            {
                email: Email,
                password: Password,
                name: Name,
                confimPaswword: ConfirmPassword
            }
        )
            .then((u) => {
                if (u.status === 200) {
                    dispatch({ type: 'registSecsuess', payload: u.status })
                    callback()
                }
                else {
                    dispatch({ type: 'registFaild', payload: u.status })
                }
            })
            .catch((e) => {
                dispatch({ type: 'registErorr', payload: e.response.data.Erorr })
                reject()
            })
    }
}
//#endregion

//#region RegistComplete
export const RegistComplete = ({
    Gender,
    Image,
    Age,
    Height,
    Weight,
    Religion,
    City,
    Country,
    Nationalty,
    Status,
    And,
    Between,
    ColorSkin,
    ReadyToMerage,
    PartnerSkinColor,
    PartnerSalary,
    Education,
    Brad,
    IWantToKnow
}, token) => {
    return (dispatch) => {
        Axios.post('https://evil-skeleton-31303.herokuapp.com/Api/Profile/updateprofile',
            {
                age: Age,
                image: Image,
                height: Height,
                weight: Weight,
                gender: Gender,
                city: City,
                nationalty: Nationalty,
                skinColor: ColorSkin,
                meriageStatus: Status,
                educationevel: Education,
                wantToKnow: IWantToKnow,
                readyMarige: ReadyToMerage,
                relagin: Religion,
                country: Country,
                myImportant: {
                    age: {
                        between: Between,
                        and: And
                    },
                    brad: Brad,
                    skinColor: PartnerSkinColor,
                    partnerSalary: PartnerSalary,
                }
            },
            {
                headers: {
                    'Authorization': token
                }
            }
        ).then((u) => {
            if (u.status == 200) { Fdispatch({ type: 'RegistSucsecc' }) }
            else { dispatch({ type: 'RegistFalid', payload: u.status }) }
        }).catch((e) => { dispatch({ type: 'RegistFalidFromAxios', payload: e }) })
    }
}
//#endregion

export const RegistByFaceBook = (callback) => {
    return (dispatch) => {
        const infoRequest = new GraphRequest('/me', {
            httpMethod: 'GET', version: 'v2.5', parameters: { 'fields': { 'string': 'email,name' } }
        },
            (error, result) => {
                if (error) {
                    dispatch({ type: 'ErorrinrequestFaceBook', payload: error })
                } else {
                    dispatch({
                        type: 'RegistWithFBSucess',
                        payload: result
                    })
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