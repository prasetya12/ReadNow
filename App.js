import React,{Component} from 'react'
import SignIn from './screens/SignIn'
import Begin from './screens/Begin'
import SignUp from './screens/SignUp'
import Home from './screens/Home'
import Profile from './screens/Profile'
import BookDetail from './screens/BookDetail'

import {createStackNavigator,createAppContainer} from 'react-navigation'


const AppNavigator =  createStackNavigator({
  SignIn: SignIn,
  Begin : Begin,
  SignUp : SignUp,
  Home : Home,
  Profile: Profile,
  BookDetail : BookDetail
},
{
  initialRouteName:'Begin',
  headerMode: 'none',
    navigationOptions: {
        headerVisible: false,
    }
}
);

export default createAppContainer(AppNavigator);