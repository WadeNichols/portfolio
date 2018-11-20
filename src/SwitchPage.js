import React from 'react';
import { Switch, Route } from 'react-router-dom';

//my components
import Main from './Main';
import About from './About';
import Projects from './Projects'

export default function SwitchPage() {
    return (
        <Switch>
            <Route exact path='/' component={Main} />
            <Route path='/about' component={About} />
            <Route path='/projects' component={Projects} />
        </Switch>
    )
}