import React, { createContext, useState, useEffect, useReducer } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Api from '../service/Api';

const GlobalContext = createContext({});

export const GlobalProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [authentication, setAuthentication] = useState(false);
  const [accessToken, setAccessToken] = useState('');

  useEffect(() => {
    tokenVerify()
  }, []);

  // Sign-In
  const signin = async (username, password) => {
    let json = await Api.signIn(username, password)
    // console.log('SIGN-IN REFRESH ===========> ' + json.refresh)
    // console.log('SIGN-IN ACCESS ===========> ' + json.access)
    if (json.access && json.refresh) {
      await AsyncStorage.setItem("accessToken", JSON.stringify(json.access));
      await AsyncStorage.setItem("refreshToken", JSON.stringify(json.refresh));
      setAuthentication(true)
    } else {
      setIsLoading(false);
      setAuthentication(false);
    }
    setIsLoading(false)
  }
  // Sign-Up
  const signup = async (username, email, password, password2) => {
    let json = await Api.signUp(username, email, password, password2)
    if (json) {
      setAuthentication(false)
    } else {
      setAuthentication(false)
    }
  }

  /**
   * Sign-Out
   */
  const signout = () => {
    AsyncStorage.removeItem("accessToken");
    AsyncStorage.clear();
    setIsLoading(false)
    setAuthentication(false);
  }


  // Data Persiste, Validation Token and Refresh new Token 
  const tokenVerify = async (token_verify, token_refresh) => {
    const value = await AsyncStorage.getItem('accessToken');
    const token = JSON.parse(value)
    let verify = await Api.tokenkVerify(token)
    if (Object.keys(verify).length == 0) {
      setAuthentication(true)
    } else {
      const value = await AsyncStorage.getItem('refreshToken');
      const refresh = JSON.parse(value)
      let json = await Api.tokenkRefresh(refresh)
      // console.log('RENEW REFRESH ===========> ' + json.refresh)
      // console.log('RENEW ACCESS ===========> ' + json.access)
      if (json.access && json.refresh) {
        await AsyncStorage.setItem("accessToken", JSON.stringify(json.access));
        await AsyncStorage.setItem("refreshToken", JSON.stringify(json.refresh));
        setAuthentication(true)
      } else {
        console.log('SIGN-OUT SUCCESSFULY MOBILE')
        setAuthentication(false);
        setIsLoading(false)
      }
    }
    setIsLoading(false)
  }


  return (
    <GlobalContext.Provider value={{ authentication, isLoading, signin, signup, signout }}>
      {children}
    </GlobalContext.Provider>
  )
}

export default GlobalContext;