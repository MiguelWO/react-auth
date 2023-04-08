import React from 'react'
import {Col, Row} from "react-bootstrap"
import Login from './Login'
import Register from './Register'


const Account = () => {
  return (
    <Row>
        <Col xs = {12} sm = {12} md = {6} lg = {6}>
          <Register />
        </Col>
        
        <Col xs = {12} sm = {12} md = {6} lg = {6}>
          <Login />
        </Col>
      </Row>
  )
}

export default Account