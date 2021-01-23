import React, { useState } from 'react'
import Navbar from './Navbar'
import Alert from './Alert'
import About from './About'
import Home from './Home'
import NotFound from './NotFound'
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import UserDetail from './UserDetail'
import GithubState from '../context/github/githubState'
import AlertState from '../context/alert/alertState'


const App = () => {
    
    return (
        <GithubState>
            <AlertState>
                <BrowserRouter>
                    <Navbar />
                    <Alert />
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/about" component={About}  />
                        {/* 1 componentle birlikte fonksiyon, değişken vs.. gönderilmesi (component={} yerine)render ile sağlanır*/}
                        <Route path="/user/:login" component={UserDetail} />
                        <Route component={NotFound} />

                    </Switch>
                </BrowserRouter>
            </AlertState>
        </GithubState>
    )
}

export default App
