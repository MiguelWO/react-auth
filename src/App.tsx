import React from 'react';
import './App.css';
import { Container, Row, Col } from 'react-bootstrap';
import Register from './components/Register';
import Login from './components/Login';

import {Routes, Route} from "react-router-dom"
import Account from './components/Account';
import FreeComponent from './components/FreeComponent';
import AuthComponent from './components/AuthComponent';
import ProtectedRoutes from './components/ProtectedRoutes';

function App() {
  return (
    <Container>
      <Row>
        <Col classname = "text-center">
          <h1>React Authentication Tutorial</h1>

          <section id = "navigation>">
            <a href='/'>Home</a>
            <a href = "/free">Free Component</a>
            <a href ="/auth">Auth Component</a>
          </section>
        </Col>
      </Row>

      <Routes>
        <Route  path = "/" element = {<Account/>}/>
        <Route  path = "/free" element = {<FreeComponent/>}/>
        <Route  path = "/auth" element = { 
        <ProtectedRoutes path = "/auth" component={AuthComponent}>
          <AuthComponent/>
        </ProtectedRoutes>}
        />
      </Routes>
    </Container>
  );
}

export default App;
