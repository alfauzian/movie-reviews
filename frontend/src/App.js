import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import { Routes, Route, Link, Router } from "react-router-dom"

import AddReview from './components/add-reviews';
import MovieList from './components/movies-list';
import Movie from './components/movie';
import Login from './components/login';

import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'


function App() {
  const [user, setUser] = React.useState(null)
  async function login(user = null){
    setUser(user)
  }
  async function logout() {
    setUser(null)
  }


  return (
    <div className='App'>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">Movie Reviews</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link>
              <Link to={"/movies"}>Movies</Link>
            </Nav.Link>
            <Nav.Link>
              {user ? (<a onClick={logout}>Logout User</a>):(<Link to={"/login"}>Login</Link>) }
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <Routes>
        <Route exact path='/movies' Component={MovieList}></Route>
        <Route path="/movies/:id" render= {(props) => <AddReview {...props} user={user}/>}></Route>
        <Route path='/login' render={(props)=> <Login {...props} login = {login}></Login>}></Route>
      </Routes>

    </div>
  )
}

export default App;