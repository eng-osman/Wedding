import { Fonts } from '../Fonts/Fonts'
const SignIn = {
  textInput: {
    fontSize: 20,
    paddingBottom: 20,
    borderWidth: 1,
    borderColor: "white"
  },
  container: {
    flex: 1,
    justifyContent: "space-evenly",
    paddingHorizontal: 50
  },
  emptyHeader: {
    height: "15%"
  },
  socialContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-evenly"
  },
  socialButton: {
    width: 52,
    height: 52,
    borderRadius: 26,
    backgroundColor: "#EA85C1",
    justifyContent: "center",
    alignItems: "center"
  },

  signInButton: {
    alignSelf: "center"
  },
  title: {
    color: "white",
    alignSelf: "center",
    fontSize: 12,
    fontFamily: Fonts.BlueOcean
  },
  textInput: {
    textAlign: "center",
    color: "white"
  },
  forgetPasswordLabelText: {
    fontSize: 15,
    color: "white",
    fontWeight: "bold",
    paddingRight: 5,
    textAlign: 'right',
    fontFamily: Fonts.BlueOcean
  },
  signUpLabelText: {
    alignSelf: "center",
    fontSize: 12,
    color: "white",
    fontFamily: Fonts.BlueOcean
  }
}
export default SignIn