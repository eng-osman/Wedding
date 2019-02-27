import Validator from 'validator';
export const EmailPassword = ({Email, Password})=>{
    if (!Validator.isEmail(Email)) {
        alert('ادخل بريد اليكتروني صحيح')
        return false
    }
    if (Validator.isEmpty(Password)) {
        alert('ادخل كلمة سر صحيحة')
        return false
    }
    return true
}
export const EmailNamePassword = ({ Name, Email, Password, ConfirmPassword }) => {
    if (Validator.isEmpty(Name) || Validator.isNumeric(Name)) {
        alert('ادخل أسم صحيح')
        return false
    }
    if (!Validator.isEmail(Email)) {
        alert('ادخل بريد اليكتروني صحيح')
        return false
    }
    if (Validator.isEmpty(Password)) {
        alert('ادخل كلمة سر صحيحة')
        return false
    }
    if (Validator.isEmpty(ConfirmPassword) || !Validator.equals(Password, ConfirmPassword)) {
        alert('كلمة السر غير متتاطبقة')
        return false
    }
    return true
}
export const GenderImage = (Gender) => {
    if (Validator.isEmpty(Gender)) {
        alert('من فضلك اختار النوع')
        return false
    }
    return true
}
export const AgeHeightWeightReligion = ({ Height, Weight, Age, Religion }) => {
    if (Age <= 0) {
        alert('من فضلك اختار العمر')
        return false
    }
    if (Height <= 0) {
        alert('من فضلك اختار الطول')
        return false
    }
    if (Weight <= 0) {
        alert('من فضلك اختار الوزن')
        return false
    }
    if (Validator.isEmpty(Religion)) {
        alert('من فضلك اختار الديانة')
        return false
    }
    return true
}
export const CityCountryRelagin = ({ City, Country, Nationalty, Status }) => {
    if (Validator.isEmpty(City)) {
        alert('من فضلك اختار المدينة')
        return false
    }
    if (Validator.isEmpty(Country)) {
        alert('من فضلك اختار البلد')
        return false
    }
    if (Validator.isEmpty(Nationalty)) {
        alert('من فضلك اختار الجنسية')
        return false
    }
    if (Validator.isEmpty(Status)) {
        alert('من فضلك اختار حالتك الاجتماعية')
        return false
    }
    return true
}
export const ReadyToMerageAndBetweenColorSkin = ({ And, ReadyToMerage, Between, ColorSkin }) => {
    if (And <= 0) {
        alert('من فضلك اختار بداية السن')
        return false
    }
    if (Between <= 0) {
        alert('من فضلك اختار نهاية السن')
        return false
    }

    if (Validator.isEmpty(ColorSkin)) {
        alert('من فضلك اختار لون بشرتك')
        return false
    }
    if (Validator.isEmpty(ReadyToMerage)) {
        alert('من فضلك اختار استعدادك للزواج')
        return false
    }
    if (Validator.isEmpty(ColorSkin)) {
        alert('من فضلك اختار لون بشرتك')
        return false
    }
    return true
}
export const IwantToknow = ({ IWantToKnow }) => {
    if (IWantToKnow.length <= 0) {
        alert('من فضلك اختار تود التعرف علي')
        return false
    }
    return true
}
export const Education = ({ Education }) => {
    if (Education.length <= 0) {
        alert('من فضلك اختار مستوي تعليمك')
        return false
    }
    return true
}
export const Brad = ({ Brad }) => {
    if (Brad <= 0) {
        alert('من فضلك اختاري لحية شريكك')
        return false
    }
    return true
}


