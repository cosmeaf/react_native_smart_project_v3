import React, { createContext, useState, useEffect, useContext } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Api from '../service/Api';

const GlobalContext = createContext({});

export const GlobalProvider = ({ children }) => {
  const [authentication, setAuthentication] = useState(false);
  const [accessToken, setAccessToken] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // Sign-In
  const signin = async (username, password) => {
    let json = await Api.signIn(username, password)
    // console.log('REFRESH ===========> ' + json.refresh)
    // console.log('ACCESS ===========> ' + json.access)
    if (json.access && json.refresh) {
      setIsLoading(true)
      await AsyncStorage.setItem("accessToken", JSON.stringify(json.access));
      await AsyncStorage.setItem("refreshToken", JSON.stringify(json.refresh));
      setAuthentication(true)
    } else {
      setAuthentication(false)
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
    setAuthentication(false);
    setIsLoading(false)
  }


  /**
   *  Data Persiste, Validation Token and Refresh new Token
   * @param {*} token_verify 
   * @param {*} token_refresh 
   */
  const tokenVerify = async (token_verify, token_refresh) => {
    setIsLoading(true)
    const value = await AsyncStorage.getItem('accessToken');
    const token = JSON.parse(value)
    let verify = await Api.tokenkVerify(token)
    if (Object.keys(verify).length == 0) {
      setAuthentication(true)
      setIsLoading(false)
    } else {
      const value = await AsyncStorage.getItem('refreshToken');
      const refresh = JSON.parse(value)
      let json = await Api.tokenkRefresh(refresh)
      // console.log('RENEW REFRESH ===========> ' + json.refresh)
      // console.log('RENEW ACCESS ===========> ' + json.access)
      if (json.access && json.refresh) {
        setIsLoading(true)
        await AsyncStorage.setItem("accessToken", JSON.stringify(json.access));
        await AsyncStorage.setItem("refreshToken", JSON.stringify(json.refresh));
        setAuthentication(true)
        setIsLoading(false)
      } else {
        console.log('SIGN-OUT SUCCESSFULY MOBILE')
        setAuthentication(false)
        setIsLoading(false)
      }
    }
  }

  useEffect(() => {
    tokenVerify()
  }, []);

  return (
    <GlobalContext.Provider value={{ authentication, isLoading, signin, signup, signout }}>
      {children}
    </GlobalContext.Provider>
  )
}

export default GlobalContext;