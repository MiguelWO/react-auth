import React, {useEffect, useState} from 'react'
import axios from 'axios'

const FreeComponent = () => {
  const [data, setData] = useState("");



  useEffect(() => {
    const configuration = {
      method : "get",
      url : "https://nodejs-mongodb-auth-app-test.herokuapp.com/free-endpoint",
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
    <div>  
      <h1 className="text-center">Free Component</h1>
      <h3 className="text-center text-danger">{data}</h3>
    </div>
  )
}

export default FreeComponent