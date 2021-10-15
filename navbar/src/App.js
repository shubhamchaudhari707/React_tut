import React from 'react'
import { Route, Switch } from 'react-router-dom';
import About from './About';
import Home from './Home';
import Error from "./Error"
import Navbar from "./Navbar"
import Service from "./Service"
import User from "./User"
import Search from "./Search"
import Todo from "./Todo"
import Todos from './Todos';
import Todo1 from "./todo1"
import ImagesProject from './ImagesProject';

const App = () => {

  return (
    <>

      <Navbar />

      <Switch>

        <Route path="/" component={ ()=> <Home name="shubham" />  } exact />
        <Route path="/about" render={ ()=> <About lname="chaudhari" /> } />
        <Route path="/service" component={Service} />
        <Route path="/user/:name/:lname" component={User} />
        <Route path="/search" component={Search} />
        <Route path="/todo" component={Todo} />
        <Route path="/todos" component={Todos} />
        <Route path="/todo1" component={Todo1} />
        <Route path="/images" component={ImagesProject} />
        <Route component={Error} />

      </Switch>

    </>
  )
}

export default App
