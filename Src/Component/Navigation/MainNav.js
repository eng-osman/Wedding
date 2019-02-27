import RegistrationAccount from '../Registrtions/RegistrationAccount';
import RegistrationBeardTypeList from '../Registrtions/RegistrationBeardTypeList';
import RegistrationEducationPreferences from '../Registrtions/RegistrationEducationPreferences';
import Registrations from '../Registrtions/Registrations';
import RegistrationMarriageTypes from '../Registrtions/RegistrationMarriageTypes';
import RegistrationPersonalInfo from '../Registrtions/RegistrationPersonalInfo';
import RegistrationEthnicPreferences from '../Registrtions/RegistrationEthnicPreferences';
import RegistrationsMySkinColor from '../Registrtions/RegistrationsMySkinColor';
import RegistrationLocationPreferences from '../Registrtions/RegistrationLocationPreferences';
import RegistrationIWantToKnow from '../Registrtions/RegistrationIWantToKnow';
import SignInScreen from '../Login/SignInScreen';
import Chat from '../Auth/Chat';
import { createBottomTabNavigator, createStackNavigator, createSwitchNavigator } from 'react-navigation';
import MainPage from '../Auth/MainPage';
import Messages from '../Auth/Messages';
import iccommentblack from '../../Photos/iccommentblack.png';
import iccommentcolored from '../../Photos/iccommentcolored.png';
import TabBarOptionsForAuth from '../Native/TabBarOptionsForAuth'
import NotificationScreen from '../Auth/NotificationScreen';
import icnotificationscolored from '../../Photos/icnotificationscolored.png';
import icnotifications from '../../Photos/icnotifications.png';
import Fav from '../../Photos/Fav.png';
import Favuorite from '../Auth/Favourite'
import ProfileScreen from '../Auth/ProofileScreen';
import icpersonblack from '../../Photos/icpersonblack.png'
import icperson from '../../Photos/icperson.png'
const MessageStack = createStackNavigator({
    Messages: Messages,
    Chat: Chat,
})
const HomeTabBar = createBottomTabNavigator({
    NewsFeed: MainPage,
    Messages: {
        screen: MessageStack,
        navigationOptions: TabBarOptionsForAuth(iccommentcolored,iccommentblack)
    },
    Notification: {
        screen: NotificationScreen,
        navigationOptions: TabBarOptionsForAuth(icnotificationscolored,icnotifications)
    },
    Profile: {
        screen: ProfileScreen,
        navigationOptions: TabBarOptionsForAuth(icperson,icpersonblack)
    },
    Favourite: {
        screen: Favuorite,
        navigationOptions: TabBarOptionsForAuth(Fav,Fav)
    }
});

const RegistrationStack = createStackNavigator({
    SignInScreen: SignInScreen,
    Account: RegistrationAccount,
    PersonalInfo: RegistrationPersonalInfo,
    EthnicPreferences: RegistrationEthnicPreferences,
    Registrations: Registrations,
    RegistrationLocationPreferences: RegistrationLocationPreferences,
    MarriagePreferences: RegistrationMarriageTypes,
    SkinPreferences: RegistrationsMySkinColor,
    BeardPreferences: RegistrationBeardTypeList,
    iWantToKnow: RegistrationIWantToKnow,
    EducationPreferences: RegistrationEducationPreferences,
})

const MainNav = createSwitchNavigator({
    nunAuth: RegistrationStack,
    auth: HomeTabBar,
})
export default MainNav;