import AsyncStorage from "@react-native-async-storage/async-storage";

const BASE_API = 'http://10.0.0.162/api'
//const BASE_API = 'http://smartmecanico.duckdns.org:8002/api/v1'


// Authentication
export default {
  // TOKEN VERIFY
  tokenkVerify: async (token) => {
    try {
      const response = await fetch(`${BASE_API}/verify/`, {
        method: 'POST',
        headers: {
          Accept: "application/json",
          "Content-type": "application/json;charset=UTF-8"
        },
        body: JSON.stringify({ token })
      });
      if (response.status === 200) {
        const json = await response.json();
        return json;
      } else {
        throw new Error(`${response.status}`);
      }
    } catch (error) {
      return error;
    }
  },
  tokenkRefresh: async (refresh) => {
    //console.debug(refreshToken)
    try {
      const response = await fetch(`${BASE_API}/refresh/`, {
        method: 'POST',
        headers: {
          Accept: "application/json",
          "Content-type": "application/json;charset=UTF-8"
        },
        body: JSON.stringify({ refresh })
      });
      if (response.status === 200) {
        const json = await response.json();
        return json;
      } else {
        throw new Error(`${response.status}`);
      }
    } catch (error) {
      return error;
    }
  },
  // SIGN-IN
  signIn: async (username, password) => {
    try {
      const response = await fetch(`${BASE_API}/login/`, {
        method: 'POST',
        headers: {
          Accept: "application/json",
          "Content-type": "application/json;charset=UTF-8"
        },
        body: JSON.stringify({ username, password })
      });
      if (response.status === 200) {
        const json = await response.json();
        return json;
      } else {
        throw new Error(`${response.status}`);
      }
    } catch (error) {
      return error;
    }
  },
  // SIGN-UP
  signUp: async (username, email, password, password2, first_name = null, last_name = null) => {
    console.log(username, email, password, password2)
    try {
      const response = await fetch(`${BASE_API}/register/`, {
        method: 'POST',
        headers: {
          Accept: "application/json",
          "Content-type": "application/json;charset=UTF-8"
        },
        body: JSON.stringify({ username, email, password, password2, first_name, last_name, })
      });
      if (response.status === 201) {
        const json = await response.json();
        return json;
      } else {
        throw new Error(`${response.status}`);
      }
    } catch (error) {
      return error;
    }
  },
  //-------------------------------------------------------------------------
  // API ACCESS USER
  //-------------------------------------------------------------------------
  getUser: async () => {
    const value = await AsyncStorage.getItem('accessToken');
    const token = JSON.parse(value)
    try {
      const response = await fetch(`${BASE_API}/user/`, {
        method: 'GET',
        headers: {
          Accept: "application/json",
          "Content-type": "application/json;charset=UTF-8",
          'Authorization': `Bearer ${token}`,
        },
      });
      if (response.status === 200) {
        const json = await response.json();
        return json;
      } else {
        console.log('ERROR API READ_USER' + response.status)
        return response.status
      }
    } catch (error) {
      return error;
    }
  },
  updateUser: async (id, first_name, last_name) => {
    const value = await AsyncStorage.getItem('accessToken');
    const token = JSON.parse(value)
    try {
      const response = await fetch(`${BASE_API}/user/${id}/`, {
        method: 'PATCH',
        headers: {
          Accept: "application/json",
          "Content-type": "application/json;charset=UTF-8",
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({ id, first_name, last_name })
      });
      if (response.status === 200) {
        const json = await response.json();
        return json;
      } else {
        console.log('ERROR API PUT_USER ' + response.status)
        return response.status
      }
    } catch (error) {
      return error;
    }
  },
  deleteUser: async (id) => {
    const value = await AsyncStorage.getItem('accessToken');
    const token = JSON.parse(value)
    try {
      const response = await fetch(`${BASE_API}/user/${id}/`, {
        method: 'DELETE',
        headers: {
          Accept: "application/json",
          "Content-type": "application/json;charset=UTF-8",
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({ id })
      });
      if (response.status === 200) {
        const json = await response.json();
        return json;
      } else {
        console.log('ERROR API PUT_USER ' + response.status)
        return response.status
      }
    } catch (error) {
      return error;
    }
  },

  //-------------------------------------------------------------------------
  // API ACCESS PROFILE
  //-------------------------------------------------------------------------
  getProfile: async () => {
    const value = await AsyncStorage.getItem('accessToken');
    const token = JSON.parse(value)
    try {
      const response = await fetch(`${BASE_API}/profile/`, {
        method: 'GET',
        headers: {
          Accept: "application/json",
          "Content-type": "application/json;charset=UTF-8",
          'Authorization': `Bearer ${token}`,
        },
      });
      if (response.status === 200) {
        const json = await response.json();
        return json;
      } else {
        console.log('ERROR API READ_PROFILE ' + response.status)
        return response.status
      }
    } catch (error) {
      return error;
    }
  },
  updateProfile: async (id, birthday, phone_number) => {
    console.log(`UPDATE PROFILE = ${id}, ${birthday}, ${phone_number}`)

    const value = await AsyncStorage.getItem('accessToken');
    const token = JSON.parse(value)
    try {
      const response = await fetch(`${BASE_API}/profile/${id}/`, {
        method: 'PATCH',
        headers: {
          Accept: "application/json",
          "Content-type": "application/json;charset=UTF-8",
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({ id, birthday, phone_number })
      });
      if (response.status === 200) {
        const json = await response.json();
        return json;
      } else {
        console.log('ERROR API PUT_USER ' + response.status)
        return response.status
      }
    } catch (error) {
      return error;
    }
  },
  //-------------------------------------------------------------------------
  // API GET SERVICES
  //-------------------------------------------------------------------------
  getServices: async () => {
    const value = await AsyncStorage.getItem('accessToken');
    const token = JSON.parse(value)
    try {
      const response = await fetch(`${BASE_API}/services/`, {
        method: 'GET',
        headers: {
          Accept: "application/json",
          "Content-type": "application/json;charset=UTF-8",
          'Authorization': `Bearer ${token}`,
        },
      });
      if (response.status === 200) {
        const json = await response.json();
        console.log('GET SERVICES ' + json)
        return json;
      } else {
        throw new Error(`${response.status}`);
      }
    } catch (error) {
      return error;
    }
  },
};