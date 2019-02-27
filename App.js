import React, { Component } from "react";
import { I18nManager} from 'react-native'
import MainNav from "./Src/Component/Navigation/MainNav";
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import Reducers from './Src/Reducers'
import ReduxThunk from 'redux-thunk'

export default class App extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    I18nManager.allowRTL(false)
    return (
      <Provider store={createStore(Reducers, {}, applyMiddleware(ReduxThunk))} > 
        <MainNav />
      </Provider>
    )
  }
}

