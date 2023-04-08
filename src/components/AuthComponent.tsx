import React, { useState, useEffect} from 'react'
import axios from 'axios'
import { Button } from 'react-bootstrap'

import Cookies from 'universal-cookie'
const cookies = new Cookies();

const token = cookies.get('TOKEN')

const AuthComponent = () => {
  const [data, setData] = useState("");

  const logout = () => {
    cookies.remove('TOKEN', { path: '/' })
    window.location.href = "/"
  }

  useEffect(() => {
    const configuration = {
      method : "get",
      url : "https://nodejs-mongodb-auth-app-test.herokuapp.com/auth-endpoint",
      headers : {
        Authorization: `Bearer ${token}`,
      },
    };
    axios(configuration)
    .then((response) => {
      setData(response.data.message)
    })
    .catch((error) => {
      error = new Error();
      console.log(error)
    });
  }, [])

  
  return (
    <div className = "text-center">
        <h1 className="text-center">Auth Component</h1>
        <h3 className="text-center text-danger">{data}</h3>
        <Button 
        type="submit" variant = "danger" onClick = {() => logout()}>Logout</Button>
    </div>
  )
}

export default AuthComponent