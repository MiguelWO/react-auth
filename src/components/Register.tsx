import React from 'react'
import { Form, Button } from 'react-bootstrap'
import { useState } from 'react'
import axios from 'axios'

const Register = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [register, setRegister] = useState(false)

    const handleSubmit = (e: any) => {
        e.preventDefault()
        const configuration = {
            method :"post",
            url: "https://nodejs-mongodb-auth-app-test.herokuapp.com/register",
            data: {
                email,
                password,
            },
        };
        axios(configuration)
        .then((response) => {
            setRegister(true);
        })
        .catch((error) => {
            error = new Error("Error: " + error);
        });
    };
  return (
    <>
        <h2>Register</h2>
        <Form onSubmit = {(e) => handleSubmit(e)}>
            {/*display success message*/}
            {register ? (
                <p className = "text-success">Registration successful</p>
            ) : (
                <p className = "text-danger">Registration failed</p>
            )}
            
            {/*email*/}
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control 
                type="email" 
                name = "email" 
                placeholder="Enter email" 
                value = {email}
                onChange = {(e) => setEmail(e.target.value)}
                />
            </Form.Group>

            {/*password*/}
            <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control 
                type="password" 
                placeholder="Password" 
                name = "password"
                value = {password}
                onChange = {(e) => setPassword(e.target.value)}
                />
            </Form.Group>

            {/*submit*/}
            <Button 
            variant="primary" 
            type="submit"
            onClick = {(e) => handleSubmit(e)}
            >
                Submit
            </Button>
        </Form>
    </>
  )
}

export default Register